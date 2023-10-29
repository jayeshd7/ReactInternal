import { shimmer_card_unit } from "../utils/constant";

const CardShimmer = () => {
    return (
        <div className="card-shimmer">
        <div className="card-shimmer__image"></div>
        <div className="card-shimmer__title"></div>
        <div className="card-shimmer__desc"></div>
        </div>
    );
    };
const Shimmer = () => {
    return (
        <div className="shimmer-container">
          {new Array(shimmer_card_unit).fill(0).map((element, index) => {
            return <CardShimmer key={index} />;
          })}
        </div>
      );
    };

export default CardShimmer; 
    