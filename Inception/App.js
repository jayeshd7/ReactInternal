import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
           <div className="logo-container">
            <img className="logo" src = "https://i.pinimg.com/474x/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>

                </div>
        </div>
    )
}

const restObj = [
    {       
           type:"veg",
           data:{
            id:1,
            restName:"Bhavi Foods",
            cuisine:["Indian Foods","Veg Foods"],
            rating:"5 star",
            deliveryTime:"30 minuate",
            specialMenu:["Paneer", "paratha", "Dal Makhani", "Rice", "Rajma"]
           }
    },
   
    {
            type:"non-veg",
            data:{
            id:2,
            restName:"KFC",
            cuisine:["Fast Foods", "chicken"],
            rating:"4 star",
            deliveryTime:"30 minuate",
            specialMenu:["burger", "coldDrink", "chicken", "fries"]
            }
    }
];

const RestaurantCard = (props) => {
    const {restData} = props;
    const {restName,cuisine,rating,deliveryTime,specialMenu} = restData?.data;
    return (
        <div className="restaurant-card" style={{backgroundColor:"#f0f0f0"}}>
            <img alt= "rest-logo"className="restaurant-image" src="https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png" />
            <h3>{restName}</h3>
            <h3>{cuisine.join(',')}</h3>
            <h3>{rating}</h3>
            <h3>{deliveryTime}</h3>
            <h3>{specialMenu.join(',')}</h3>
        
           </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {restObj.map((restaurantData) => (
                    <RestaurantCard key={restaurantData.data.id} restData={restaurantData} />
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
           {Header()}
           {Body()}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
