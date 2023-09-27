export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addIngredient = ( name ) => {
  return {
      type: INCREMENT,
      ingredientName: name
  };
};
export const removeIngredient = (name) => {
  return {
    type: DECREMENT,
    ingredientName: name,
  };
};
