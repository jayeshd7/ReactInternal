import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1", 
//     {id:"heading",'data-cy':"h1_heading" }, 
//     "Hello Jayesh from React");

// console.log(heading); // heading : returns object
// const root = ReactDOM.createRoot(document.getElementById("root"));  
// root.render(heading); // render the heading in the root element


// nested element

/*
  <div id = "parent">
    < div id = "child">
        <h1 id = "heading"> Hello Jayesh from React </h1>
    </div>
   </div>

   ReactElement(object) -> ReactElement(object) -> ReactElement(object)

*/
// hard coded
// JSX using
const parent = React.createElement(
    "div", {id:"parent"}, 
  [  React.createElement(
    "div", {id:"child"},
   [ React.createElement(
        "h1", {}, "This is Jayesh  ") , 
    React.createElement(
            "h2", {}, "Working on React 🧑‍💻🚀 "),
        ]),
        React.createElement(
            "div", {id:"child2"},
           [ React.createElement(
                "h1", {}, "There is a child2") , 
            React.createElement(
                    "h2", {}, "Child element has h2 tag"),
                ])]
);

// JSX
// const parent = (
//     <div id="parent">
//         <div id="child">
//             <h1 id="heading">Hello Jayesh from React</h1>

//         </div>
//     </div>
// );


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render the parent in the root element


