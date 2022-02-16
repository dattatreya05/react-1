import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from "react";
// import { Counter } from './Counter.js';

//import { useState } from "react";
// Inform react something changed - hooks
// hook - useState - function - starts with 'use'

export function Counter() {
  // let like = 100;
  // const [state, setState] = useState(InitialState)
  // state - current value in component
  // setState - Inform react something changed
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  //onClick - camelCase
  // onClick -> setLike -> Inform react like changed like+1

  // Any state or prop update this will be called
  // useEffect(() => {
  //   console.log("The like value updated", like)
  // })

  // It will be called for both like and dislike
  // useEffect(() => {
  //   console.log("The like value updated", like)
  // }, [disLike, like])

  return (
    <div className="counter-container">
      <IconButton onClick={() => setLike(like + 1)} color="primary" aria-label="like the movie">
        <Badge badgeContent={like} color="primary">
          <span>👍</span>
        </Badge>
      </IconButton>

      <IconButton onClick={() => setDisLike(disLike + 1)} color="error" aria-label="dislike the movie">
        <Badge badgeContent={disLike} color="error">
          <span>👎</span>
        </Badge>
      </IconButton>
    </div>
  );
}


