import { useState } from "react";
import { ColorBox } from "./ColorBox.js";

export function AddColor() {
  const [color, setColor] = useState('purple');
  const styles = { background: color };
  const [colorList, setColorList] = useState(["yellow", "pink", "teal"]);
  // typing -> onChange -> content (event.target.value) -> setColor -> Inform react color is updated
  return (
    <div>
      <input
        value={color}
        style={styles} onChange={(event) => {
          // console.log(event.target.value);  // for to get value in the console output we are writing this console.log()
          setColor(event.target.value);
        }}
        placeholder="Enter a color" />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (<ColorBox color={clr} />))}
    </div>
  );
}
