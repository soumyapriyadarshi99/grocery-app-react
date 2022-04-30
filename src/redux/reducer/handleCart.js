import { ActionType } from "../../constants/constants";
const cart = [];

const handleCart = (state = cart, action) => {
  //console.log(product);
  const product = action.payload;

  switch (action.type) {
    case ActionType.ADD_ITEM:
      const exist = state.find((items) => items._id === product._id);
      if (exist) {
        return state.map((item) =>
          item._id === product._id
            ? {
                ...item,
                qty:
                  item.qty > 1
                    ? item.qty + product.qty
                    : parseInt(item.unit) + 1,
              }
            : item
        );
      }
      // state.push(action.payload);
      return [...state, product];

    case ActionType.DELETE_ITEM:
      return state.filter((item) => {
        // console.log(item);
        // console.log(action.payload);
        return item._id !== action.payload;
      });
    case ActionType.INCREASE_QTY:
      return state.map((item) =>
        item._id === product._id ? { ...item, qty: product.qty + 1 } : item
      );

    case ActionType.DECREASE_QTY:
      return state.map((item) =>
        item._id === product._id
          ? { ...item, qty: product.qty > 1 ? product.qty - 1 : product.qty }
          : item
      );
    default:
      return state;
    // break;
  }
};

export default handleCart;
