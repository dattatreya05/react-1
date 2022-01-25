
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


// Doing the different pages in an app like home, about ..etc why
// 1. Performance
// 2. Organised
// 3. Ease of access
// 4. Analytics
// 5. Share - URL - Most Important

// SPA - Single Page Application

// Router - Maintain SPA and behave MPA(Multi page application)
// With conditional rendering
// Syntax: import { BrowserRouter as Router } from "react-router-dom";
// we can use BrowserRouter or HashRouter depending on requirement. 

// 1. BrowserRouter - Modern browser - Added features
// 2. HashRouter - Older browser (IE)