import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from 'yup';
import { API } from './global';


export const formValidationSchema = yup.object({
  name: yup.string().required("A cool name is in need😊"),
  poster: yup
      .string()
      .min(4, "Need a bigger poster😗")
      .required("A cool poster is in need😊"),
  rating: yup
      .number()
      .required("Need some rating😊")
      .min(0).max(10),
  summary: yup
      .string()
      .min(20, "Lets think about the summary😊")
      .required("A cool description is in need😊"),
  trailer:  yup
      .string()
      .min(4, "Need a bigger trailer😗")
      .required("Awesome trailer is in need😊"),
});

// Redirect tag
// /films - old user are using this one.
// /movies - new users are using this one.
// so we have to change the that whenever we are going to films it will automatically redirect to movies by redirect tag.
// Regex - * - matches anything for getting the things.
export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: { 
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
     },
    // validate: validateForm, // In this yup we are not using this one.
    validationSchema: formValidationSchema,
    onSubmit: (newMovie) => {
      console.log("values", newMovie);

        fetch(`${API}/movies`, {
          method:"POST",
          body: JSON.stringify(newMovie),
          headers:{
            "Content-type": "application/json",
          }
        }).then(()=>history.push("/movies")); // after complteing the post we are calling the movies to show if it not it will leads race condition.
      
      }
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
        type="submit"  
        variant="outlined"
      >
        Add Movie
      </Button>

      {/* create copy of the movielist and add new movie to it. */}
    </form>
  );
}


// 1. Method-Post
// 2. body-JSON Data
// 3. Header - data - Json

// onClick={() => {

//   const newMovie = {
      //     name: name,
      //     poster: poster,
      //     rating: rating,
      //     summary: summary,
      //     trailer: trailer,
      //   };

        // fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies", {
        //   method:"POST",
        //   body: JSON.stringify(newMovie),
        //   headers:{
        //     "Content-type": "application/json",
        //   }
        // }).then(()=>history.push("/movies")); // after complteing the post we are calling the movies to show if it not it will leads race condition.

      //   // setMovieList([...movieList, newMovie]);
      
      // }}
