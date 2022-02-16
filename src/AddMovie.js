import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

// Redirect tag
// /films - old user are using this one.
// /movies - new users are using this one.
// so we have to change the that whenever we are going to films it will automatically redirect to movies by redirect tag.
// Regex - * - matches anything for getting the things.
export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

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
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer: trailer,
        };

        fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies", {
          method:"POST",
          body: JSON.stringify(newMovie),
          headers:{
            "Content-type": "application/json",
          }
        }).then(()=>history.push("/movies")); // after complteing the post we are calling the movies to show if it not it will leads race condition.

        // setMovieList([...movieList, newMovie]);
       
      }} variant="outlined">Add Movie</Button>

      {/* create copy of the movielist and add new movie to it. */}
    </div>
  );
}


// 1. Method-Post
// 2. body-JSON Data
// 3. Header - data - Json
