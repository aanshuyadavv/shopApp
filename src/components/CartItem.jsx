import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from "react";
const CartItem = ({ product }) => {
  const image = product.image;
  const title = product.title;
  const description = product.description;
  const price = product.price;
  const cart = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(product.id));
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={image} alt="" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {description}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">{price}</p>
            <div
              className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
