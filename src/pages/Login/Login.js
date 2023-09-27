import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import LoginImg from "../../images/login.jpg";
import MangeImg from "../../images/login2.jpg";
import logo from "../../images/Logo.png";
import "./styles.css";
import Tilt from "react-tilt";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { doLogin } from "../../Redux/Actions/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  page: {
    background:
      "linear-gradient(331deg, rgba(255, 23, 68, 1) 0%, rgba(255, 138, 128, 1) 100%)",
    padding: "50px",
    [theme.breakpoints.down(500)]: {
      padding: "5px",
    },
  },
  root: {
    position: "relative",
    maxWidth: 900,
    margin: "auto",
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "100%",
    height: 400,
    boxShadow: "0px 0px 3px rgba(0,0,0,0.4)",
    display: "flex",
    [theme.breakpoints.down(1000)]: {
      height: "auto",
    },
  },
  imgbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titl: {
    height: 240,
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 20,
    objectFit: "cover",
  },
  logo: {
    width: 120,
  },
  right: {
    width: "70%",
    margin: "auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down(1000)]: {
      width: "100%",
    },
  },
  buttons: {
    margin: "25px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    width: "100%",
    paddingBottom: 15,
  },
  managebutton: {
    backgroundColor: "#f50057",
    fontSize: 12,
    textTransform: "capitalize",
    color: "white",
    padding: "5px 20px",
    borderRadius: 50,
    "&:hover": {
      backgroundColor: "#f50057",
    },
  },
  login: {
    marginTop: 15,
    backgroundColor: "#f50057",
    fontSize: 15,
    width: "100%",
    height: 40,
    textTransform: "uppercase",
    color: "white",
    padding: "5px 20px",
    borderRadius: 50,
    "&:hover": {
      backgroundColor: "#f50057",
    },
  },
  "@global": {
    [theme.breakpoints.down(1000)]: {
      ".input100": {
        padding: "0 20px",
      },
      ".symbol-input100": {
        display: "none",
      },
    },
  },
}));

function Login() {
  const classes = useStyles();
  const [mode, setmode] = useState(0);
  return (
    <Box className={classes.page}>
      <Box className={classes.root}>
        <Box className={classes.wrapper}>
          <Grid style={{ padding: 10 }} container spacing={3}>
            <Grid xs={12} md={6} className={classes.imgbox}>
              <Tilt className={classes.titl} options={{ max: 25, scale: 1 }}>
                <img
                  className={classes.img}
                  alt="login"
                  src={mode === 0 ? LoginImg : MangeImg}
                />
              </Tilt>
            </Grid>
            <Grid xs={12} md={6}>
              <Box className={classes.right}>
                <img className={classes.logo} alt="logo" src={logo} />
                <Box className={classes.buttons}>
                  <Button
                    onClick={() => setmode(0)}
                    style={{ opacity: mode === 1 && 0.5 }}
                    className={classes.managebutton}
                  >
                    App Login
                  </Button>
                  <Button
                    onClick={() => setmode(1)}
                    style={{ opacity: mode === 0 && 0.5 }}
                    className={classes.managebutton}
                  >
                    Device manage
                  </Button>
                </Box>
                {mode === 0 ? <Loginform /> : <ManageForm />}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

const Loginform = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(doLogin(data.email, data.password));
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Box className="wrap-input100 validate-input">
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="User Name"
              ref={register}
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <EmailIcon style={{ fontSize: 20 }} />
            </span>
          </Box>
          <Box className="wrap-input100 validate-input">
            <input
              className="input100"
              type="password"
              name="password"
              placeholder="Password"
              ref={register}
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <LockIcon style={{ fontSize: 20 }} />
            </span>
          </Box>
        </Box>
        <Button type="submit" className={classes.login}>
          Login
        </Button>
      </form>
      <ToastContainer />
    </Box>
  );
};
const ManageForm = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Box className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            name="User Name"
            placeholder="User Name"
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <EmailIcon style={{ fontSize: 20 }} />
          </span>
        </Box>
        <Box className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            name="Password"
            placeholder="Password"
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <LockIcon style={{ fontSize: 20 }} />
          </span>
        </Box>
      </Box>
      <Button className={classes.login}>Login</Button>
    </Box>
  );
};

export default Login;
