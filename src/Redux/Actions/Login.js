import axios from "../../shared/axios-datas";
import { toast } from "react-toastify";

export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const AuthSuccess = (data, email) => {
  return {
    type: AUTH_SUCCESS,
    email: email,
    data: data,
  };
};
export const AuthFailed = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};
export const AuthLogOut = () => {
  return {
    type: AUTH_LOGOUT,
    data: null,
  };
};
export const doLogin = (email, pass) => {
  return (dispatch) => {
    axios
      .get(`/api/auth?email=${email}&password=${pass}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success(`Wellcome Back 💋`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          localStorage.setItem("access_token", res.data.access_token);
          setTimeout(() => {
            window.location.replace("/");
          }, 2000);
        } else {
          toast.error(`some thing went wrong`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        dispatch(AuthSuccess(res.data, email));
      })
      .catch((err) => {
        dispatch(AuthFailed(err));
      });
  };
};

export const doLogOut = () => {
  return (dispatch) => {
    dispatch(AuthLogOut());
    localStorage.removeItem("access_token");
    setTimeout(() => {
      window.location.replace("/");
    }, 1000);
  };
};
