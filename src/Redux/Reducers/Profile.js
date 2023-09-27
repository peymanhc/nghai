import * as actions from "../Actions/Profile";

const initialState = {
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PROFILE_SUCCESS:
      return {
        data: action.data,
      };
    case actions.GET_PROFILE_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
