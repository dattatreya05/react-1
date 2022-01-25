import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from "react";
// import { Counter } from './Counter.js';

function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

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

export {Counter}
