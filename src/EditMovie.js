import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { formValidationSchema } from './AddMovie';

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
  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [rating, setRating] = useState(movie.rating);
  // const [summary, setSummary] = useState(movie.summary);
  // const [trailer, setTrailer] = useState(movie.trailer);
  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: movie,
    // validate: validateForm, // In this yup we are not using this one.
    // eslint-disable-next-line no-undef
    validationSchema: formValidationSchema,
    onSubmit: (updatedMovie) => {
      console.log(updatedMovie);
          fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies/" + movie.id, {
            method:"PUT",
            body: JSON.stringify(updatedMovie),
            headers:{
              "Content-type": "application/json",
              }
          }).then(()=>history.push("/movies"));
        },
  });
  
  const history = useHistory();


  return (

    <form onSubmit={handleSubmit} className="add-movie-form">
      <h3>Enter Movie Details</h3>
      <TextField
        id="name"
        name="name" 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur} 
        // id="outlined-basic" 
        label="Name" 
        variant="outlined"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name ? errors.name : ""} />
      
      <TextField
        id="poster"
        name="poster" 
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur} 
        // id="outlined-basic" 
        label="Poster" 
        variant="outlined"
        error={errors.poster && touched.poster}
        helperText={errors.poster && touched.poster ? errors.poster : ""} />
       
       <TextField 
        id="rating"
        name="rating" 
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        // id="outlined-basic" 
        label="Rating" 
        variant="outlined"
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating ? errors.rating : ""}  />
      
      <TextField 
        id="summary"
        name="summary" 
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        // id="outlined-basic" 
        label="Summary" 
        variant="outlined"
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary ? errors.summary : ""}/>
      
      <TextField 
        id="trailer"
        name="trailer" 
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        // id="outlined-basic" 
        label="Trailer" 
        variant="outlined" 
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer ? errors.trailer : ""}/>
      <Button
      color="success"
        type="submit"  
        variant="outlined"
      >
        Save
      </Button>

      {/* create copy of the movielist and add new movie to it. */}
    </form>
  );

}


// 1. Method-PUt and pass id
// 2. body-JSON Data
// 3. Header - data - Json

//  <Button onClick={() => {
//         const updatedMovie = {
//           name: name,
//           poster: poster,
//           rating: rating,
//           summary: summary,
//           trailer: trailer,
//         };
//         // Replace the updated movie in the movielist
//         // const copyMovieList = [...movieList]
//         // copyMovieList[id] = updatedMovie;
//         // setMovieList(copyMovieList);
//         // history.push("/movies");
//         fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies/" + movie.id, {
//           method:"PUT",
//           body: JSON.stringify(updatedMovie),
//           headers:{
//             "Content-type": "application/json",
//             }
//         }).then(()=>history.push("/movies"));

//       }} variant="outlined" color="success" >Save</Button>

      // create copy of the movielist and add new movie to it. 

