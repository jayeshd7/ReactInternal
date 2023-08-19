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

const parent = React.createElement(
    "div", {id:"parent"}, 
    React.createElement(
        "div", {id:"child"},
       [ React.createElement(
            "h1", {}, "I am an h1 element") , 
        React.createElement(
                "h2", {}, "I am an h2 element")]
            
));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);