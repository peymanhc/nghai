import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import HomeCleaners from "../../components/HomeCleaners/HomeCleaners";
import RightService from "../../components/RightService/RightService";
import ServiceFrequency from "../../components/ServiceFrequency/ServiceFrequency";
import TimeOfCleaning from "../../components/TimeOfCleaning/TimeOfCleaning";

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
}));
const HoursPage = () => {
  const classes = useStyles();
  return (
    <Box>
      <ServiceFrequency active2="#f20023"  />
      <Box className={classes.root}>
        <Box display="flex" justifyContent="center">
          <Box
            padding="20px 50px !important"
            width="60%"
            className={classes.wrapper}
          >
           <HomeCleaners/>
          </Box>
          <Box width="40%" className={classes.wrapper}>
            <RightService />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HoursPage;
