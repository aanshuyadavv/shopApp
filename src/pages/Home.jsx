import React, { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await fetch(API_URL);
      const output = await res.json();
      // console.log(output);
      setProducts(output);
    } catch (error) {
      console.log("error aa gya jee", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" w-[80%] m-auto">
      {isLoading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div className="grid grid-cols-4  flex-wrap justify-center items-center">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          No Products found
        </div>
      )}
    </div>
  );
};

export default Home;
