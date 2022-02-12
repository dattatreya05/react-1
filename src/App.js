import { useState } from "react";
import { AddColor } from './AddColor';
import "./App.css";
// import {double} from "./ColorBox.js"; // 1. Named exports and imports
// import { ColorBox } from "./ColorBox.js"; // defalut exports and imports- only one at a time
import { Switch, Route, Redirect } from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { Welcome } from './Welcome.1';
import { NotFound } from './NotFound';
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useEffect } from "react";

// console.log(double(10))

// 1. Creating - createContext
// 2. Publisher - provider - context.Provider
// 3. Subscriber - useContext - useContext(context)

export default function App() {

    
    const [movieList, setMovieList] = useState([]);

    // useEffect(() => {
    //   fetch("https://619cfba768ebaa001753ce3a.mockapi.io/movies")
    //     .then((data) => data.json())
    //     .then((mvs) => setMovieList(mvs));
    // }, []);

    const [mode, setMode] = useState("dark");
    const history = useHistory();
    const themeCtx = createTheme({
      palette: {
        mode: mode,
      },
    });

    return (
      <ThemeProvider theme={themeCtx}>
        <Paper sx={{ borderRadius: "0px", minHeight: "100vh" }}elevation={3} >
          <div className="App">
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" onClick={() => history.push('/movies')}>Movies</Button>
                <Button color="inherit" onClick={() => history.push('/color-game')}>Color game</Button>
                <Button color="inherit" onClick={() => history.push('/')}>Home</Button>
                <Button color="inherit" onClick={() => history.push('/movies/add')}>Add movies</Button>
                
                <Button 
                  style={{ marginLeft: "auto" }}
                  color="inherit"
                  startIcon={mode==="dark" ? <Brightness7Icon /> : <Brightness4Icon />} 
                  onClick={() => setMode(mode ==='light' ? "dark" : "light")}
                  >
                  {mode ==='light' ? "dark" : "light"} mode
                </Button>
              </Toolbar>
            </AppBar>
            <div className="route-content">
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

                <Route path="/movies/edit/:id">
                <EditMovie movieList={movieList} setMovieList={setMovieList}/>
                </Route>

                <Route path="/movies/:id">
                  <MovieDetails movieList={movieList}/>
                </Route>

                <Route path="/movies">
                  <MovieList />
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
          </div>
        </Paper>
      </ThemeProvider>
    );
  }


