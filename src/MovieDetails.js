import { useParams } from 'react-router-dom';


export function MovieDetails({ movieList }) {
  // const name= "The Avengers";
  // const rating= 8;
  // const summary =
  //   "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.";
  // const trailer = "https://www.youtube.com/embed/eOrNdBpGMv8"
  // console.log(movieList)
  const { id } = useParams();
  const movie = movieList[id];
  console.log(movie);

  return (
    <div>
      <iframe
        width="100%"
        height="600"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p>{movie.summary}</p>
      </div>
    </div>
  );
}