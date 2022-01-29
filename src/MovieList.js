import { Movie } from './Movie';


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
        deleteButton={<button onClick={() => {
          // Index -> tell which movie to delete
          // remove the clicked from movielist
          // filter
          const remainingMovies = movieList.filter((mv, idx) =>{
            const removeIdx = index;
            return idx !== removeIdx; 
          })
          setMovieList(remainingMovies) 
        }}>Delete me!!!🙌</button>}
       />
    ))}
  </section>;
}
