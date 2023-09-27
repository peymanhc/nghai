import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Banner from "../../images/comeHome.jpg";
import RegisterForm from "../Registerform/RegisterForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Banner})`,
    width: "100%",
    minHeight: 600,
    color: "white",
    position: "relative",
    margin: "auto",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    padding: "50px 0",
    [theme.breakpoints.down(1000)]: {
      flexDirection:"column-reverse"
    },
  },
  title: {
    maxWidth: 300,
    fontSize: 25,
    fontWeight: "bold",
    [theme.breakpoints.down(1000)]: {
      fontSize: 20,
      textAlign:"center",
      maxWidth:"unset"
    },
  },
  subtitle: {
    maxWidth: 550,
    marginTop: 50,
    fontSize: 25,
    [theme.breakpoints.down(1000)]: {
      fontSize: 20,
      marginTop: 20,
      textAlign:"center",
      maxWidth:"unset"
    },
  },
  text: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
const BeComeHome = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box p={1} className={classes.text}>
          <RegisterForm />
        </Box>
        <Box p={1} className={classes.text}>
          <Typography variant="h3" className={classes.title}>
            Become A HomeChef
          </Typography>
          <Typography variant="h3" className={classes.subtitle}>
            Now You can make food happen pretty much wherever you are thanks to
            the free easy-to-us
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BeComeHome;
