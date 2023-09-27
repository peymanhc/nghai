import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    width: "100%",
    minHeight: 320,
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: 5,
    position: "relative",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.03)",
    },
  },
  wrapper: {
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  imgitem: {
    width: "100%",
    height: 150,
    objectFit: "cover",
  },
  boxicon: {
    backgroundColor: "#e0e0e0",
    border: "1px solid white",
    width: 60,
    height: 60,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    top: -30,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.8)",
  },
  about: {
    fontSize: 14,
    color: "rgba(0,0,0,0.7)",
  },
  time: {
    width: "100%",
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    border: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timetosend: {
    fontSize: 12,
    padding: 20,
    color: "rgba(0,0,0,0.6)",
  },
  foodrates: {
    padding: 20,
    fontSize: 27,
  },
  "@global": {
    ".MuiRating-iconEmpty": {
      color: "#ffb400",
    },
  },
}));
const Food = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Link style={{ textDecoration: "none" }} to="/FoodDetail">
        <Box className={classes.wrapper}>
          <img className={classes.imgitem} alt="food" src={props.image} />
          <Box className={classes.boxicon}>{props.icon}</Box>
          <Box>
            <Typography className={classes.title} variant="h4">
              {props.title}
            </Typography>
            <Typography className={classes.about} variant="body1">
              type of food : {props.foodtype}
            </Typography>
          </Box>
          <Box className={classes.time}>
            <Rating
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              className={classes.foodrates}
              readOnly
              name="FoodRate"
              precision={0.5}
              value={props.score}
            />
            <Typography className={classes.timetosend}>
              {props.time} min
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Food;
