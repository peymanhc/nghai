import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import RightService from "../../components/RightService/RightService";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
import ServiceTime from "../../components/ServiceTimebox/ServiceTime";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  wrapper: {
    minHeight: 150,
    padding: 20,
    boxShadow: "1px 1px 19px rgba(0,0,0,0.2)",
    borderRadius: 6,
    margin: 20,
    [theme.breakpoints.down(1000)]: {
      width: "100%",
    },
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
  cards: {
    [theme.breakpoints.down(1000)]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));
const Service = () => {
  const classes = useStyles();
  return (
    <Box>
      <ServiceDetail active2={"#f20023"} />
      <Box className={classes.root}>
        <Box className={classes.cards} display="flex" justifyContent="center">
          <Box width="60%" className={classes.wrapper}>
            <ServiceTime />
          </Box>
          <Box width="40%" className={classes.wrapper}>
            <RightService />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
