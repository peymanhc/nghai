import * as Actions from "../Actions/Lang";

const initialState = {
  Lang:"English"
};

const Lang = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LANG:
      return {
        Lang:action.Lang
      };
    default:
      return state;
  }
};

export default Lang;
