import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

// Redirect tag
// /films - old user are using this one.
// /movies - new users are using this one.
// so we have to change the that whenever we are going to films it will automatically redirect to movies by redirect tag.
// Regex - * - matches anything for getting the things.
export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = () => {
    fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies/" + id, {
      method:"GET"
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(getMovie, []);

  return movie ? <EditMovieForm movie={movie}/> : "";
  
}



function EditMovieForm({movie}){
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const history = useHistory();


  return (

    <div className="add-movie-form">
      <h3>Enter Movie Details</h3>
      <TextField value={name}
        onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
      <TextField value={poster}
        onChange={(event) => setPoster(event.target.value)} id="outlined-basic" label="Poster" variant="outlined" />
      <TextField value={rating}
        onChange={(event) => setRating(event.target.value)} id="outlined-basic" label="Rating" variant="outlined" />
      <TextField value={summary}
        onChange={(event) => setSummary(event.target.value)} id="outlined-basic" label="Summary" variant="outlined" />
      <TextField value={trailer}
        onChange={(event) => setTrailer(event.target.value)} id="outlined-basic" label="Trailer" variant="outlined" />
      <Button onClick={() => {
        const updatedMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer: trailer,
        };
        // Replace the updated movie in the movielist
        // const copyMovieList = [...movieList]
        // copyMovieList[id] = updatedMovie;
        // setMovieList(copyMovieList);
        // history.push("/movies");
        fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies/" + movie.id, {
          method:"PUT",
          body: JSON.stringify(updatedMovie),
          headers:{
            "Content-type": "application/json",
            }
        }).then(()=>history.push("/movies"));

      }} variant="outlined" color="success" >Save</Button>

      {/* create copy of the movielist and add new movie to it. */}
    </div>
  );

}


// 1. Method-PUt and pass id
// 2. body-JSON Data
// 3. Header - data - Json



