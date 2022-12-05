import { ADD_TO_CART, REMOVE_TO_CART } from "../actionType/actionType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeToCart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload: id,
  };
};
