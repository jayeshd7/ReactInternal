import RestaurantCard from "./RestaurantCard";
import { restObj } from "../utils/mockData";

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

export default Body;