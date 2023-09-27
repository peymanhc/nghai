import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "95%",
    minHeight: 200,
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: 5,
    position: "relative",
    display: "flex",
    margin:10,
  },
  title: {
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
    width: "100%",
    "&:after": {
      content: "''",
      display: "block",
      width: "47%",
      position: "absolute",
      right: 0,
      marginTop: -15,
      borderBottom: "2px solid #f9938c",
    },
  },
  nearbyboxes: {
    margin: "auto",
    maxWidth: 1300,
  },
  image: {
    width: "40%",
    height: 180,
    objectFit: "cover",
    padding: 10,
  },
  textbox: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  cardtitle: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  cardtypefood: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  carddetailfood: {
    marginTop: 20,
    textOverflow: "ellipsis",
    display: "-webkit-box",
    overflow: "hidden",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    color: "rgba(0,0,0,0.7)",
    fontSize: 14,
  },
  timetosend: {
    bottom: 10,
    position: "absolute",
  },
}));
const Nearbay = (props) => {
  const classes = useStyles();
  return (
          <Box key={props.key} className={classes.box}>
            <img className={classes.image} alt="nearby" src={props.img} />
            <Box className={classes.textbox}>
              <Typography className={classes.cardtitle} variant="h5">
                {props.title}
              </Typography>
              <Typography className={classes.cardtypefood} variant="body2">
                Type of food : {props.type}
              </Typography>
              <Typography className={classes.carddetailfood} variant="body2">
                <b>Food Detail : </b>
                {props.detail}
              </Typography>
              <Typography className={classes.timetosend} variant="subtitle2">
                {props.time} min
              </Typography>
            </Box>
          </Box>
  );
};

export default Nearbay;
