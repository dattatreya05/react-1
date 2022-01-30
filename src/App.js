import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { AddColor } from './AddColor';
import "./App.css";
// import {double} from "./ColorBox.js"; // 1. Named exports and imports
// import { ColorBox } from "./ColorBox.js"; // defalut exports and imports- only one at a time
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome.1';
import { NotFound } from './NotFound';
import { MovieList } from './MovieList';
import { useHistory } from 'react-router-dom';

// console.log(double(10))

export default function App() {

    const INITIAL_MOVIES = [
      {
        name:"Love Story", 
        poster:"https://m.media-amazon.com/images/M/MV5BNDFmNDk3MWMtMDY0NS00ZGFmLTlkYTUtNmUwYTU4YzllNTNhXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        rating:8.4,
        summary:"A Christian Zumba instructor falls in love with a starry-eyed upper caste Hindu girl. In their quest for happiness, however, they must first overcome a massive caste divide.",
        trailer:"https://www.youtube.com/watch?v=1yH_eOxpkwo"
      },
      {
        name:"Rangdhe", 
        poster:"https://m.media-amazon.com/images/M/MV5BMTUxYjk4OGYtNTg0My00MzA2LTg2MjYtYTNlOWU3YjY2MWU0XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        rating:9.0,
        summary:"Arjun as a kid enjoys attention from his parents and everyone in the neighbourhood. As the colony he lives in doesn't have kids of his age, he wishes to have a girlfriend, when Anupama's Anu family moves in. Arjun's family members grew fond of Anu, which sows the seed of jealousy in him.",
        trailer:"https://www.youtube.com/watch?v=z8gBG5d7aes"
      },
      {
        name:"A1 Express", 
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/0/00/A1_Express.jpg/220px-A1_Express.jpg",
        rating:8.3,
        summary:"A young man moves to a new town and falls in love with a hockey player. However, he soon finds himself opposing a corrupt politician's plans to take over the ground his girlfriend's team practices on.",
        trailer:"https://www.youtube.com/watch?v=DBQUoFSebzU"
      },
      {
        name:"Bheeshma", 
        poster:"https://upload.wikimedia.org/wikipedia/en/f/f5/Bheeshma_poster.jpg",
        rating:9.0,
        summary:"When Bheeshma gets involved with Chaitra, an employee of Bheeshma Organics, he develops an interest in organic farming. Trouble ensues when her company announces a new product that seems to be shady.",
        trailer:"https://www.youtube.com/watch?v=8A9mJYprMl4"
      },
      {
        name: "RRR",
        poster:
          "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        rating: 8.8,
        summary:
          "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
        trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
      },
      {
        name: "Iron man 2",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 7,
        summary:
          "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
        trailer: "https://www.youtube.com/embed/wKtcmiifycU"
      },
      {
        name: "No Country for Old Men",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        rating: 8.1,
        summary:
          "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
        trailer: "https://www.youtube.com/embed/38A__WT3-o0"
      },
      {
        name: "Jai Bhim",
        poster:
          "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        summary:
          "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        rating: 8.8,
        trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
      },
      {
        name: "The Avengers",
        rating: 8,
        summary:
          "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        poster:
          "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
        trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
      },
      {
        name: "Baahubali",
        poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        rating: 8,
        summary:
          "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
        trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
        },
      {
        name: "Interstellar",
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        rating: 8.6,
        summary:
          "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
      },
      {
        name: "Ratatouille",
        poster:
          "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        rating: 8,
        summary:
          "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
        trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
      }
      
    ];
    const [movieList, setMovieList] = useState(INITIAL_MOVIES);

    return (
      <div className="App">
        <ul>
          {/* <li>
            <Link to="/movies">Films</Link>
          </li> */}
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Color game</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies/add">Add movies</Link>
          </li>
        </ul>

        <Switch>
          {/* exact one of the word which is used to match the path what is correctly in it. */}
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/films">
            <Redirect  to="/movies"/>
          </Route>
          <Route path="/movies/add">
          <AddMovie movieList={movieList} setMovieList={setMovieList}/>
          </Route>

          <Route path="/movies/:id">
            <MovieDetails movieList={movieList}/>
          </Route>

          <Route path="/movies">
            <MovieList movieList={movieList} setMovieList={setMovieList}/>
          </Route>
          <Route path="/color-game">
              <AddColor />
          </Route>
          <Route path="**">
              <NotFound />
          </Route>
          {/* <Route path="/">
            <h2>Welcome to the movie app ❤️🎶🍕🍕🎶💕</h2>
          </Route> */}
        </Switch>
      </div>
    );
  }


// Redirect tag
// /films - old user are using this one.
// /movies - new users are using this one.
// so we have to change the that whenever we are going to films it will automatically redirect to movies by redirect tag.
// Regex - * - matches anything for getting the things.

function AddMovie({ movieList, setMovieList}){
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
          name:name, 
          poster:poster,
          rating:rating,
          summary:summary,
        };
      setMovieList([...movieList, newMovie])
      history.push("/movies")
    }} variant="outlined">Add Movie</Button>

    {/* create copy of the movielist and add new movie to it. */}
</div>
  );

}