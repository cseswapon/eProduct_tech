import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeToCart } from "../redux/actionCreators/productAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div
      className="shadow-lg rounded-3xl border relative p-3 flex flex-col text-indigo-900"
    >
      {product.quantity && <span className="absolute right-3 bg-red-500 p-2 rounded-lg text-white">{product.quantity}</span>}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, i) => {
            return (
              <li key={i} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart") ? (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeToCart(product))}
            className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Delete to Cart
          </button>
        )}
        {!pathname.includes("cart") && <button
          title="Add to wishlist"
          className="bg-indigo-500  py-1 px-2 rounded-full"
        >
          <BiListPlus className="text-white" />
        </button>}
      </div>
    </div>
  );
};

export default ProductCard;
