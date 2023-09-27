import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: 150,
    objectFit: "cover",
  },
  buttonbox: {
    padding: 5,
    width: 250,
    backgroundColor: "white",
    position: "relative",
    top: -22,
    margin: "auto",
    borderRadius: 10,
  },
  SliderItemButton: {
    display: "flex",
    width: 250,
    backgroundColor: "white",
    color: "black",
    fontSize: 12,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  card: {
    backgroundColor: "white",
    height: 300,
    border: "2px solid #f44336",
    width:"95%"
  },
  subtext: {
    fontSize: 11,
    lineHeight: 2,
    marginTop: -10,
    margin: 10,
    color: "rgba(0,0,0,0.8)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
}));
const Work = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <img alt="facility" className={classes.img} src={props.img} />
      <Box className={classes.buttonbox}>
        <Button className={classes.SliderItemButton}>
          {props.buttontext}Clean
        </Button>
      </Box>
      <p className={classes.subtext}>{props.description}</p>
    </Box>
  );
};

export default Work;
