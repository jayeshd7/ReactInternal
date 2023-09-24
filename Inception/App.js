import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id:"heading"}, "Namaste React 🧑‍💻");
//console.log(heading);

// JSX  - HTML like syntex for React, JSX ===> React.createElement() ==> React elements - JS objects --> DOM nodes --> Browser
// JSX code is transpied before it is rendered in the browser & JS engine.

// react element


// react Comoonent
/*
class based component: old way write code
fucntional components: new way to write code
alwyas it starts with capital letter
const fn = () => true;
below both code are same - this is way to return
const HeadingComponent = () => {
    return <h1 className="heading"> Namaste React Using JSX🧑‍💻 </h1>;
}

const HeadingComponent = () => (
     <h1 className="heading"> Namaste React Using JSX🧑‍💻 </h1>
);
*/
const spanElement = (
    <span> This is span element </span>
  
  );
  

const jsxHeading = (
<h1 className="heading" tabIndex="5"> 
{spanElement} 
Namaste React Using JSX🧑‍💻 
</h1>
);

const TitleComponent = () => (
    <div id="container">
    <h1 className="heading"> Title is React 👌 </h1>
    </div>
);
const number = 10000;
// component composition - combine multiple components
// using {} we can write JS code inside JSX

const HeadingComponent = () => (
    <div id="container">
        
    {TitleComponent()}
    <h2>{number}</h2>
    {jsxHeading}
    <h1 className="heading"> Namaste React Using JSX ❤️ </h1>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
// way to render react element
// root.render(jsxHeading);

// way to render react component
root.render(<HeadingComponent />);
