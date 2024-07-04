import RestaurantCard from "./RestaurantCard";
import resLits from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resLits);

  return (
    <div className="body">
      <div className="filters">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant(
              listOfRestaurant.filter(
                (res) => res?.card?.card?.info?.avgRating > 4
              )
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
