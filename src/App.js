import { useState } from "react";
import "./App.css";

export default function App() {
    const movies = [
      {
        name:"Love Story", 
        poster:"https://m.media-amazon.com/images/M/MV5BNDFmNDk3MWMtMDY0NS00ZGFmLTlkYTUtNmUwYTU4YzllNTNhXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        rating:"8.5",
        summary:"A Christian Zumba instructor falls in love with a starry-eyed upper caste Hindu girl. In their quest for happiness, however, they must first overcome a massive caste divide."
      },
      {
        name:"Rangdhe", 
        poster:"https://m.media-amazon.com/images/M/MV5BMTUxYjk4OGYtNTg0My00MzA2LTg2MjYtYTNlOWU3YjY2MWU0XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
        rating:"9.0",
        summary:"Arjun as a kid enjoys attention from his parents and everyone in the neighbourhood. As the colony he lives in doesn't have kids of his age, he wishes to have a girlfriend, when Anupama's Anu family moves in. Arjun's family members grew fond of Anu, which sows the seed of jealousy in him."
      },
      {
        name:"A1 Express", 
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/0/00/A1_Express.jpg/220px-A1_Express.jpg",
        rating:"8.5",
        summary:"A young man moves to a new town and falls in love with a hockey player. However, he soon finds himself opposing a corrupt politician's plans to take over the ground his girlfriend's team practices on."
      },
      {
        name:"Bheeshma", 
        poster:"https://upload.wikimedia.org/wikipedia/en/f/f5/Bheeshma_poster.jpg",
        rating:"9.0",
        summary:"When Bheeshma gets involved with Chaitra, an employee of Bheeshma Organics, he develops an interest in organic farming. Trouble ensues when her company announces a new product that seems to be shady."
      },
      
    ]
    return (
      <div className="App">
        {/* <section className="movie-list">
          {movies.map((movie) => (
            <Movie 
            name={movie.name}
            poster={movie.poster}
            rating={movie.rating}
            summary={movie.summary}
            />
          ))}
        </section> */}
        <AddColor />
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
    const [colorList, setColorList] = useState(["yellow", "pink", "teal"]);

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
        <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
        {colorList.map((clr) =>
        (<ColorBox color={clr}/> ))}
        
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
    return <div className="movie-container">
      <img className = "movie-poster" src={poster} alt={name}/>
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
      <p className="movie-summary">{summary}</p>
      <Counter />
    </div>
  }

  function Counter() {
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);

    return(
      <div className="counter-container">
        <button onClick={() => setLike(like + 1)}><span>👍</span>{like}</button>
        <button onClick={() => setDisLike(disLike + 1)}><span>👎</span>{disLike}</button>

      </div>
    );
  }