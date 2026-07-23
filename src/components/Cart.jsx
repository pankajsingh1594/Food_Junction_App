import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store.jsx";
import { IMAGE_CDN_URL } from "../utils/constant.jsx";
import { clearCart } from "../utils/cartSlice.jsx";

// Food Cart Component
const Cart = () => {
  const foodItems = useSelector((store) => store.cart.items);
  const totalAmount = foodItems?.reduce((total, item) => {
    return total + (item?.card?.info?.defaultPrice || item?.card?.info?.price);
  }, 0);

  let count = 0;
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return foodItems?.length === 0 ? (
    <div className="p-5 pt-60 pb-30 bg-dark-background text-white min-h-[100vh]">
      <h1 className="text-3xl font-bold text-secondary text-center">
        Your Cart Is Empty...
      </h1>
    </div>
  ) : (
    <div className="px-10 pt-40 pb-22 bg-dark-background text-white max-md:px-5 max-md:pt-30 max-md:pb-20 max-md:h-full">
      <div className="flex flex-wrap justify-between items-center w-full">
        <h1 className="text-2xl font-bold text-secondary">
          Items you have added...
        </h1>
        <div className="flex flex-wrap justify-end items-center max-md:justify-between max-md:w-full">
          <h4 className="text-xl mr-[20px]">
            Total Amount:{" "}
            <span className="font-bold">Rs.{totalAmount / 100}</span>
          </h4>
          <button
            className="bg-secondary text-black w-[100px] h-[40px] rounded-full font-bold  cursor-pointer"
            onClick={() => {
              handleClearCart();
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mt-3">
        {foodItems?.map((cartItem, index) => {
          return (
            <div key={index} className="p-2 mt-2 w-1/6 max-md:w-1/2">
              <img
                src={IMAGE_CDN_URL + cartItem?.card?.info?.imageId}
                className="w-full h-[150px] object-cover"
              />
              <p className="text-lg font-bold text-secondary mt-1 line-clamp-1">
                {cartItem?.card?.info?.name}
              </p>
              <p>
                Rs.
                {cartItem?.card?.info?.defaultPrice / 100 ||
                  cartItem?.card?.info?.price / 100}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
