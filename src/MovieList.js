import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";

export function MovieList() {
  
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies", {method:"GET"})
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  }

  useEffect(getMovies, []);


  // Delete -> Refresh data (getMovies)
  const deleteMovie = (id) => {
    fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies/" + id, {method:"DELETE"})
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
        id={index}
        deleteButton={
          // Index -> tell which movie to delete
          // remove the clicked from movielist
          // filter
          <IconButton
            style={{marginLeft: "auto"}} 
            onClick={() => deleteMovie(movie.id)}
            
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
              history.push("/movies/edit/" + index)
              } aria-label="edit" color="secondary">
              <EditIcon />
            </IconButton>}
        />
        ))
    }
  </section>;
}
