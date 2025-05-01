import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="h-[3rem] w-[7rem]">
            <img src="logo.png" alt="" className="h-[100%] w-[100%]" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-black mr-5 space-x-6 ">
          <NavLink to="/">
            <p className="hover:text-green-600">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <MdShoppingCart className="hover:text-green-600" />
            {cart.length > 0 && (
              <span className="absolute top-3 right-16 w-5 h-5 flex  justify-center items-center animate-bounce rounded-full text-white bg-green-600">
               {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
//                      justify-center items-center animate-bounce rounded-full text-red"
