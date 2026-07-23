import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer.jsx";
import { IMAGE_CDN_URL } from "../utils/constant.jsx";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.jsx";

// Restaurant Menu Component
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const [count, setCount] = useState({});
  const dispatch = useDispatch();
  const handleAddItem = (input) => {
    dispatch(addItem(input));
  };
  const handleRemoveItem = (input) => {
    dispatch(removeItem(input));
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  // Api calling- Menu
  async function getRestaurantMenu() {
    const data = await fetch(
      "https://raw.githubusercontent.com/pankajsingh1594/Mock_Data/refs/heads/main/Food%20Ordering%20Api%20Data/Restaurant_Id_" +
        id +
        ".txt",
    );
    const json = await data.json();
    setRestaurantMenu(json?.data);
  }

  return restaurantMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className="p-5 pt-32 pb-12]"
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url(https://raw.githubusercontent.com/pankajsingh1594/Mock_Data/f6d2c620a5a8f1429ea43e11a195b7d4fbbe76fa/Dummy_Images/BackgroundImage_RestaurantMenu_FoodJunctionApp.jpg)`,
        backgroundSize: `cover`,
        backgroundPosition: `fixed`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div>
        <h1 className="text-center text-3xl font-bold text-secondary">
          __{restaurantMenu?.cards[2]?.card?.card?.info?.name}__
        </h1>
        <h2 className="text-2xl font-bold text-center text-white">Menu</h2>
      </div>

      <div>
        {restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (resMenu) => {
            return resMenu?.card?.card?.itemCards?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-wrap justify-center mx-auto w-[75%] shadow-2xs p-5 max-md:w-full max-md:justify-between max-md:p-0 max-md:mt-5"
                >
                  <div className="w-[75%] max-md:px-5 max-md:w-[70%]">
                    <p className="text-lg font-bold text-secondary max-md:line-clamp-1">
                      - {item?.card?.info?.name}
                    </p>
                    <p className="text-sm line-clamp-2 my-2 text-white">
                      {item?.card?.info?.description}
                    </p>
                    <p className="font-bold text-white">
                      - Rs.
                      {item?.card?.info?.defaultPrice / 100 ||
                        item?.card?.info?.price / 100}
                    </p>
                  </div>
                  <div className="w-[25%] flex flex-col items-center max-md:w-[30%]">
                    <img
                      src={IMAGE_CDN_URL + item?.card?.info?.imageId}
                      alt="Food_Image"
                      className="w-[110px] h-[110px] object-cover rounded-full border-2 border-white max-md:h-[100px] max-md:w-[100px]"
                    />
                    <button
                      className="bg-secondary  text-white w-[60px] h-[30px] mt-[-20px] rounded-full cursor-pointer"
                      onClick={() => {
                        handleAddItem(item);
                        setCount((prev) => ({
                          ...prev,
                          [item.card.info.id]:
                            (prev[item.card.info.id] || 0) + 1,
                        }));
                      }}
                    >
                      {count[item.card.info.id] || "Add"}
                    </button>
                  </div>
                </div>
              );
            });
          },
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
