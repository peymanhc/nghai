import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import "react-multi-carousel/lib/styles.css";
import Work from "./Work";
import DefaultSlider from "../DefaultSlider/DefaultSlider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: 50,
    direction: "ltr !important",
  },
  colorbox: {
    width: "100%",
    position: "absolute",
    top: 205,
    height: 150,
  },
}));
const Works = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        style={{ backgroundColor: props.boxcolor }}
        className={classes.colorbox}
      />
      <DefaultSlider>
        {[0, 1, 2, 3, 4].map((i) => {
          return (
            <Link style={{ textDecoration: "none" }} key={i} to={props.link}>
              <Work
                description={props.description}
                img={props.img}
                buttontext={props.buttontext}
              />
            </Link>
          );
        })}
      </DefaultSlider>
    </Box>
  );
};

export default Works;
