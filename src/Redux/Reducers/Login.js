import * as actions from "../Actions/Login";

const initialState = {
  email: null,
  data:null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_LOGOUT:
      return {
        email: null,
      };
    case actions.AUTH_SUCCESS:
      return {
        email: action.email,
        data:action.data,
        data:action.data
      };
    case actions.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
