import { RESTAURANT_LOGO_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { restData } = props;
    const { restName, cuisine, rating, deliveryTime, specialMenu } = restData?.data;
    return (
        <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img alt="rest-logo" className="restaurant-image" src={RESTAURANT_LOGO_URL} />
            <h3>{restName}</h3>
            <h3>{cuisine.join(',')}</h3>
            <h3>{rating} stars</h3>
            <h3>{deliveryTime}</h3>
            <h3>{specialMenu.join(',')}</h3>

        </div>
    )
}
export default RestaurantCard