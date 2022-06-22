import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import { API } from './global';

export function MovieList() {
  
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {method:"GET"})
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  }

  useEffect(getMovies, []);
  // useEffect is loaded only one time when component is called

  // Delete -> Refresh data (getMovies)
  const deleteMovie = (id) => {
    fetch(`${API}/movies/` + id, {method:"DELETE"})
      .then((data) => data.json())
      .then(() => getMovies());
  };

  const history = useHistory();
  return <section className="movie-list">
    {movieList.map((movie, index) => (
      <Movie
        key={index}
        name={movie.name}
        poster={movie.poster}
        rating={movie.rating}
        summary={movie.summary}
        id={movie.id}
        deleteButton={
          // Index -> tell which movie to delete
          // remove the clicked from movielist
          // filter
          <IconButton
            style={{marginLeft: "auto"}} 
            onClick={() => deleteMovie(movie.id)} // movie.id means it is called becuase when movie deleted it should have know which movie deleted.
            
            // instead of writing all these things we are writing only upper deleteMovie one. 
            // const remainingMovies = movieList.filter((mv, idx) =>{
            //   const removeIdx = index;
            //   return idx !== removeIdx; 
            // })
            // setMovieList(remainingMovies) 
            
            aria-label="delete" color="error">
            <DeleteIcon />
          </IconButton>}

          editButton={
            // Index -> tell which movie to delete
            // remove the clicked from movielist
            // filter
            <IconButton onClick={() => 
              history.push("/movies/edit/" + movie.id) // movie.id is called for getting the id when edit button is clicked.
              } aria-label="edit" color="secondary">
              <EditIcon />
            </IconButton>}
        />
        ))
    }
  </section>;
}
