import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useState } from "react";
import { Counter } from './App';

export function Movie({ name, poster, rating, summary }) {
  // conditional styling
  const styles = { color: rating >= 8.5 ? "green" : "red" };
  // const [summaryDisplay, setsummaryDisplay] = useState(true);
  // const [summarystyles, setsummaryStyles] = useState({
  //   display:"none"
  // });
  const [show, setShow] = useState(true);
  // conditional styling
  const summaryStyles = { display: show ? "block" : "none" };

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">{name}
            <IconButton color="primary" onClick={() => setShow(!show)} aria-label="Toggle summary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>{" "}
          </h3>
          <p style={styles} className="movie-rating">⭐ {rating}</p>
        </div>

        {/* This is done by me */}
        {/* <Button onClick = {() => {
              setsummaryStyles({display:summaryDisplay ? "block" : "none"});
              setsummaryDisplay(summaryDisplay ? false : true);
            }} variant="contained">Toggle Summary</Button>
            <p className="movie-summary" style={summarystyles}>{summary}</p> */}

        {/* It was done in class  */}
        {/* onClick -> setShow -> Inform react that show is updated. */}
        {/* show -> true -> setShow -> false -> hides */}
        {/* show -> false -> setShow -> true -> display */}

        {/* <Button onClick = {() => setShow(!show)} variant="contained">Toggle summary</Button> */}

        {/* conditional styling */}
        {/* <p style= {summaryStyles} className="movie-summary">{summary}</p> */}

        {/* conditional rendering - removed from the DOM itself*/}
        {show ? <p className="movie-summary">{summary}</p> : ""}

      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}
