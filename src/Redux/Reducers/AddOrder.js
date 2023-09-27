import * as Actions from "../Actions/AddOrder";

const initialState = {
  ingredient: 0,
  total: 0,
  error: false,
};

const Order = (state = initialState, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]:
            (state.ingredient[action.ingredientName] || 0) + 1,
        },
      };
    case Actions.DECREMENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]:
            (state.ingredient[action.ingredientName] || 0) - 1,
        },
      };
    default:
      return state;
  }
};

export default Order;
