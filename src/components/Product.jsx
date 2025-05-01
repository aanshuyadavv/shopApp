import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/CartSlice";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";
const Product = ({ product }) => {
  // console.log(product);
  const title = product.title;
  const price = product.price;
  const description = product.description;
  const image = product.image;
  const id = product.id;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const someDesc = description.substring(0, 100);
  const [showMore, setShowMore] = useState(false);

  function removeFromCart() {
    const productId = product.id;
    dispatch(remove(productId));
    toast.error("removed from cart");
  }
  function addToCart() {
    dispatch(add(product));
    toast.success("added to cart");
  }
  function toggleHandler() {
    setShowMore((prev) => !prev);
  }


  return (
    <div
      className={`flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-gray-500 border-solid border-[1px] shadow-xl ${showMore}?h-'[25px]':h-'[20px]'`}
    >
      <div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {title}
          </h1>
          {showMore ? (
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left overflow-hidden">
              {description}{" "}
              <span
                onClick={toggleHandler}
                className="text-green-600 cursor-pointer"
              >
                show less...
              </span>
            </p>
          ) : (
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
              {someDesc}{" "}
              <span
                onClick={toggleHandler}
                className="text-green-600 cursor-pointer"
              >
                read more...
              </span>
            </p>
          )}
        </div>
        <div className="h-[100px] w-[100px]">
          <img src={image} alt="" className="h-full w-full " />
        </div>
        <div>
          <p className="text-green-600 font-semibold ">{price}</p>
          {cart.some((item) => item.id === product.id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
