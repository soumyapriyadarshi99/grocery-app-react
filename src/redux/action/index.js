import { ActionType } from "../../constants/constants";
// To add item
export const addCart = (product) => {
  return {
    type: ActionType.ADD_ITEM,
    payload: product,
  };
};

// To delete item

export const delCart = (product) => {
  return {
    type: ActionType.DELETE_ITEM,
    payload: product,
  };
};

export const increaseQuantity = (product) => {
  return {
    type: ActionType.INCREASE_QTY,
    payload: product,
  };
};
export const decreaseQuantity = (product) => {
  return {
    type: ActionType.DECREASE_QTY,
    payload: product,
  };
};
