import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id:"heading"}, "Namaste React 🧑‍💻");
//console.log(heading);

// JSX  - HTML like syntex for React, JSX ===> React.createElement() ==> React elements - JS objects --> DOM nodes --> Browser
// JSX code is transpied before it is rendered in the browser & JS engine.
const jsxHeading = (<h1 className="heading" tabIndex="5"> Namaste React Using JSX🧑‍💻 </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
