
 function ColorBox({ color }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: color,
    marginTop: "10px"
  };
  return (
    <div style={styles}>

    </div>
  );
}

const double = (n) => n*2;

// 1. Named exports and imports upperOne

// End of the file all exports are defining.
export {ColorBox, double};


// // 2. Defalut exports and imports - only one at a time
// export default function ColorBox({ color }) {
//   const styles = {
//     height: "25px",
//     width: "250px",
//     background: color,
//     marginTop: "10px"
//   };
//   return (
//     <div style={styles}>

//     </div>
//   );
// }