import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "1px solid rgba(0,0,0,0.2)",
    width: 170,
    padding: 20,
    margin: 10,
    boxShadow: "1px 1px 3px rgba(0,0,0,0.2)",
    backgroundColor: "white",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down(1000)]: {
      width: 70,
      height: 70,
      flexDirection:"column"
    },
    [theme.breakpoints.down(500)]: {
      width: 40,
      height: 40,
      
    },
  },
  text: {
    fontSize: 18,
    textAlign:"center",
    [theme.breakpoints.down(1000)]: {
      fontSize: 11,
    },
    [theme.breakpoints.down(500)]: {
      display:"none"
    },
  },
  img: {
    objectFit: "contain",
    width: 55,
    height: 55,
    [theme.breakpoints.down(1000)]: {
      width: 45,
      height: 45
    },
  },
}));
const Categories = (props) => {
  const classes = useStyles();
  return (
    <Box key={props.key} className={classes.card}>
      <img className={classes.img} src={props.icon} alt="categories" />
      <Typography className={classes.text} variant="body2">
        {props.title}
      </Typography>
    </Box>
  );
};

export default Categories;
