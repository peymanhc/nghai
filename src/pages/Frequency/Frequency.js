import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import ServiceFrequency from "../../components/ServiceFrequency/ServiceFrequency";
import TimeOfCleaning from "../../components/TimeOfCleaning/TimeOfCleaning";
import RightService from "../../components/RightService/RightService";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: 150,
    height: "min-content",
    boxShadow: "1px 1px 19px rgba(0,0,0,0.2)",
    borderRadius: 6,
    width:"95%",
    margin:10
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
    <Box >
      <ServiceFrequency />
      <Box  display="flex" justifyContent="center">
        <Box className={classes.wrapper} display="flex" justifyContent="center">
          <Box className={classes.box1} className={classes.wrapper}>
            <TimeOfCleaning />
          </Box>
          <Box className={classes.box2} className={classes.wrapper}>
            <RightService />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeepCleaning;
