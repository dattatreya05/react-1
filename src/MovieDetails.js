import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import { API } from './global';

export function MovieDetails() {
  // const name= "The Avengers";
  // const rating= 8;
  // const summary =
  //   "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.";
  // const trailer = "https://www.youtube.com/embed/eOrNdBpGMv8"
  // console.log(movieList)
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = () => {
    fetch(`${API}/movies/` + id, {
      method:"GET"
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(getMovie, []); 
  // it is for to get the particular movie details by clicking the details.

  // console.log(movie);

  const history = useHistory();

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
        <Button onClick={() => history.goBack()} variant="outlined" startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
