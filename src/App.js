import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import "./App.css";

export default function App() {
    const INITIAL_MOVIES = [
      {
        name:"Love Story", 
        poster:"https://m.media-amazon.com/images/M/MV5BNDFmNDk3MWMtMDY0NS00ZGFmLTlkYTUtNmUwYTU4YzllNTNhXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        rating:8.4,
        summary:"A Christian Zumba instructor falls in love with a starry-eyed upper caste Hindu girl. In their quest for happiness, however, they must first overcome a massive caste divide."
      },
      {
        name:"Rangdhe", 
        poster:"https://m.media-amazon.com/images/M/MV5BMTUxYjk4OGYtNTg0My00MzA2LTg2MjYtYTNlOWU3YjY2MWU0XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        rating:9.0,
        summary:"Arjun as a kid enjoys attention from his parents and everyone in the neighbourhood. As the colony he lives in doesn't have kids of his age, he wishes to have a girlfriend, when Anupama's Anu family moves in. Arjun's family members grew fond of Anu, which sows the seed of jealousy in him."
      },
      {
        name:"A1 Express", 
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/0/00/A1_Express.jpg/220px-A1_Express.jpg",
        rating:8.3,
        summary:"A young man moves to a new town and falls in love with a hockey player. However, he soon finds himself opposing a corrupt politician's plans to take over the ground his girlfriend's team practices on."
      },
      {
        name:"Bheeshma", 
        poster:"https://upload.wikimedia.org/wikipedia/en/f/f5/Bheeshma_poster.jpg",
        rating:9.0,
        summary:"When Bheeshma gets involved with Chaitra, an employee of Bheeshma Organics, he develops an interest in organic farming. Trouble ensues when her company announces a new product that seems to be shady."
      },
      {
        name: "RRR",
        poster:
          "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        rating: 8.8,
        summary:
          "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
      },
      {
        name: "Iron man 2",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 7,
        summary:
          "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
      },
      {
        name: "No Country for Old Men",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        rating: 8.1,
        summary:
          "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
      },
      {
        name: "Jai Bhim",
        poster:
          "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        summary:
          "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        rating: 8.8
      },
      {
        name: "The Avengers",
        rating: 8,
        summary:
          "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        poster:
          "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
      },
      {
        name: "Baahubali",
        poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        rating: 8,
        summary:
          "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
      },
      {
        name: "Interstellar",
        poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        rating: 8.6,
        summary:
          "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
      },
      {
        name: "Ratatouille",
        poster:
          "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        rating: 8,
        summary:
          "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
      }
      
    ];
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [movieList, setMovieList] = useState(INITIAL_MOVIES);

    return (
      <div className="App">
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

          <Button onClick={() => {
          const newMovie = {
              name:name, 
              poster:poster,
              rating:rating,
              summary:summary,
            };
          setMovieList([...movieList, newMovie])
          }} variant="outlined">Add Movie</Button>

        </div>

        {/* create copy of the movielist and add new movie to it. */}
        

        <section className="movie-list">
          {movieList.map((movie) => (
            <Movie 
            name={movie.name}
            poster={movie.poster}
            rating={movie.rating}
            summary={movie.summary}
            />
          ))}
        </section>
        {/* <AddColor /> */}
      </div>
    );
  }
  // function Welcome({ name, poster, rating, summary }) {
  //   return (
  //     <div>
  //       <h1 className="user-name">{name}</h1>
  //       <img className="user-img" src={poster} alt={name}/>
  //       <p className="user-rating"><b className="imdb-color">IMDB:</b> {rating}</p>
  //       <p className="user-summary"><b className="summary-color">Summary:</b> {summary}</p>
  //     </div>
  //   )
  // }

  function AddColor(){
    const [color, setColor] = useState('purple');
    const styles = { background: color };
    // const [colorList, setColorList] = useState(["yellow", "pink", "teal"]);

    // typing -> onChange -> content (event.target.value) -> setColor -> Inform react color is updated
    return(
      <div>
        <input
          value={color}
          style={styles} onChange={(event) => { 
          // console.log(event.target.value);  // for to get value in the console output we are writing this console.log()
          setColor(event.target.value);
        }}
        placeholder="Enter a color" />
        {/* <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
        {colorList.map((clr) =>
        (<ColorBox color={clr}/> ))} */}
        
      </div>
    )
  }


  function ColorBox({color}){
    const styles = {
      height : "25px",
      width: "250px",
      background: color,
      marginTop:"10px"
    }
    return(
      <div style = {styles}>

      </div>
    )
  }

  function Movie({name, poster, rating, summary}){
    // conditional styling
    const styles = {color: rating >= 8.5 ? "green" : "red"}
    const [summaryDisplay, setsummaryDisplay] = useState(true);
    const [summarystyles, setsummaryStyles] = useState({
      display:"none"
    });
    
    return <div className="movie-container">
      <img className = "movie-poster" src={poster} alt={name}/>
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p style={styles} className="movie-rating">⭐ {rating}</p>
      </div>
      <Button onClick = {() => {
        setsummaryStyles({display:summaryDisplay ? "block" : "none"});
        setsummaryDisplay(summaryDisplay ? false : true);
      }} variant="contained">Toggle Summary</Button>
      <p className="movie-summary" style={summarystyles}>{summary}</p>
      <Counter />
    </div>
  }

  function Counter() {
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);

    return(
      <div className="counter-container">
        <Button onClick={() => setLike(like + 1)} variant="outlined"><span>👍</span>{like}</Button>
        <Button onClick={() => setDisLike(disLike + 1)} variant="outlined"><span>👎</span>{disLike}</Button>
      </div>
    );
  }

  // function Movies(){
  //   const [name, setMovieName] = useState("Love Story")
  //   const [nameList, setNameList] = useState(["Rangdhe", "A1 Express", "Bheeshma"]);
  //   return(

  //     <form action="#" className ="movies">
  //       <input placeholder="movie-poster"/>
  //       <div className="names">
  //         <input  value={name}
  //           onChange={(event) =>{setMovieName(event.target.value)}}
  //           placeholder="movie-name" />
  //           <button onClick={() =>{setMovieName(name)}}>Add movie</button>
  //           {/* {nameList.map((nm) => (nm))} */}
  //       </div>
  //       <input placeholder="movie-rating" />
  //       <input placeholder="movie-summary" />
        
        
  //     </form>
  //   )
  // }

  

