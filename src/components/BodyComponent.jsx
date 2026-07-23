import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import { filterData, sortByRating, sortByName } from "../utils/constant.jsx";
import { Link } from "react-router";
import Shimmer from "./Shimmer.jsx";

// Body Component
const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  // Api calling - All Restaurants
  async function getRestaurant() {
    try {
      const data = await fetch(
        "https://raw.githubusercontent.com/pankajsingh1594/Mock_Data/refs/heads/main/Food%20Ordering%20Api%20Data/All_Restaurants_Api_Data.txt",
      );
      const json = await data.json();
      setAllRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (err) {
      console.log(err);
    }
  }

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-5 pt-28 pb-10 max-md:pb-15 bg-dark-background">
      {/* Search Container */}
      <div className="px-2 flex justify-between max-md:flex-col max-md:px-0">
        <input
          type="text"
          placeholder={"what's in your mind"}
          className="text-white border-1 px-4 py-2 outline-none mb-2 w-7/12 max-md:w-full rounded-2xl border-gray-400 max-md:py-3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={() => {
            const filteredRestaurant = filterData(searchText, allRestaurant);
            filteredRestaurant?.length === 0
              ? alert("Not Found")
              : setFilteredRestaurant(filteredRestaurant);
          }}
        />

        <div className="flex justify-end w-5/12 max-md:w-full max-md:justify-start max-md:items-center mt-1 max-md:hidden">
          <button
            className="bg-secondary text-black font-bold px-6 py-4 rounded-full cursor-pointer mr-5"
            onClick={() => {
              const sortedRestaurants = sortByRating(filteredRestaurant);
              setFilteredRestaurant(sortedRestaurants);
            }}
          >
            Sort By Ratings
          </button>
          <button
            className="bg-secondary text-black font-bold  px-6 py-4 rounded-full cursor-pointer"
            onClick={() => {
              const sortedRestaurantsByName = sortByName(filteredRestaurant);
              setFilteredRestaurant(sortedRestaurantsByName);
            }}
          >
            Sort By Name
          </button>
        </div>
      </div>

      {/* ----RestaurantCard Section---- */}
      <div className="px-3 mt-1 max-md:px-0">
        <div className="flex flex-wrap">
          {filteredRestaurant?.map((res) => {
            return (
              <Link
                to={/restaurant/ + res?.info?.id}
                key={res?.info?.id}
                className="w-1/4 max-md:w-full"
              >
                <RestaurantCard {...res?.info} key={res?.info?.id} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
