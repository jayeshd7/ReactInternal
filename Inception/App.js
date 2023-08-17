const heading = React.createElement(
    "h1", 
    {id:"heading",'data-cy':"h1_heading" }, 
    "Hello Jayesh from React");

console.log(heading); // heading : returns object
const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(heading); // render the heading in the root element
