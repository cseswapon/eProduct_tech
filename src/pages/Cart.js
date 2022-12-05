import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {cart
        .sort((a, b) => a._id - b._id)
        .map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
    </div>
  );
};

export default Cart;
