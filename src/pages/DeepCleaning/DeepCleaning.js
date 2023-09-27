import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import HomeTypes from "../../components/HomeTypes/HomeTypes";
import RightService from "../../components/RightService/RightService";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  wrapper: {
    minHeight: 150,
    height: "min-content",
    padding: 20,
    boxShadow: "1px 1px 19px rgba(0,0,0,0.2)",
    borderRadius: 6,
    margin: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  subtext: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    fontWeight: 700,
    marginTop: 10,
  },
  box: {
    paddingBottom: 20,
    borderBottom: "1px solid black",
    marginBottom: 20,
  },
  [theme.breakpoints.down(900)]: {
    box1:{width:"100%"},
    box2:{width:"100%"},
    wrapper:{flexDirection:"column"}
  },
}));
const DeepCleaning = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box>
      <ServiceDetail /> 
      <Box className={classes.root}>
        <Box className={classes.wrapper} display="flex" justifyContent="center">
          <Box className={classes.box1} >
            <HomeTypes />
          </Box>
          <Box className={classes.box2} >
            <RightService />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeepCleaning;
