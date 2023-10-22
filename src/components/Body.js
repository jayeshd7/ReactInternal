import RestaurantCard from "./RestaurantCard";
import { restObj } from "../utils/mockData";
import {useEffect} from "react";
import {useState} from "react";

const Body = () => {
    

 
    // local ate vaiable is so powerful

    const [listOfRestaurants, setListOfRestaurants] = useState(restObj);
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                // update the state of listOfRestaurants
                setListOfRestaurants(listOfRestaurants.filter((res) => res.data.rating > 3));
                
                console.log(listOfRestaurants)
                   
                    }}>
                    
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurantData) => (
                    <RestaurantCard key={restaurantData.data.id} restData={restaurantData} />
                ))}
            </div>
        </div>
    );
};

export default Body;