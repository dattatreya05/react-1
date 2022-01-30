import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function MovieList({ movieList, setMovieList }) {
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
          <IconButton onClick={() => {
            const remainingMovies = movieList.filter((mv, idx) =>{
              const removeIdx = index;
              return idx !== removeIdx; 
            })
            setMovieList(remainingMovies) 
            }} aria-label="delete" color="error">
            <DeleteIcon />
          </IconButton>}

          editButton={
            // Index -> tell which movie to delete
            // remove the clicked from movielist
            // filter
            <IconButton onClick={() => {
              const remainingMovies = movieList.filter((mv, idx) =>{
                const removeIdx = index;
                return idx !== removeIdx; 
              })
              setMovieList(remainingMovies) 
              }} aria-label="edit" color="secondary">
              <EditIcon />
            </IconButton>}
        />
        ))
    }
  </section>;
}
