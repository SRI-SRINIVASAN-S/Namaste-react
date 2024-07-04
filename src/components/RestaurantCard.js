import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.card?.card?.info;
  const { deliveryTime } = resData?.card?.card?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{"Rating" + " " + avgRating}</h4>
      <h4>{"DeliveryTime" + " " + deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
