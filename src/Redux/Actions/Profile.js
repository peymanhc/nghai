import axios from "../../shared/axios-datas";

export const GET_PROFILE_FAIL = "GET_PROFILE_FAIL";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const AuthSuccess = (data) => {
  return {
    type: GET_PROFILE_SUCCESS,
    data: data,
  };
};
export const AuthFailed = (error) => {
  return {
    type: GET_PROFILE_FAIL,
    error: error,
  };
};
export const FetchProfile = () => {
  return (dispatch) => {
    const access_token = localStorage.getItem("access_token");
    axios
      .get("eda/cart/profile?lang=en", {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(AuthSuccess(res.data));
      })
      .catch((err) => {
        dispatch(AuthFailed(err.statusText));
      });
  };
};
