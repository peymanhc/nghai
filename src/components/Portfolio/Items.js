import { Box, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  ItemBox: {
    width: "95%",
    height: 230,
    padding: 15,
    borderRadius: 15,
    border: "1px solid rgba(0,0,0,0.2)",
    boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.2)",
    display: "flex",
    overflow: "hidden",
    [theme.breakpoints.down(960)]: {
      flexDirection: "column",
      maxHeight: 400,
      height: "auto",
      overflow: "scroll",
    },
  },
  imgitem: {
    borderRadius: 15,
    width: "40%",
    height: "100%",
    [theme.breakpoints.down(960)]: {
      width: "100%",
      height: 200,
    },
  },
  text: {
    padding: 20,
  },
  boxtitle: {
    fontSize: 17,
    fontWeight: 600,
    [theme.breakpoints.down(960)]: {
      fontSize: 15,
    },
  },
  offprice: {
    color: "#f44336",
    textDecoration: "line-through",
    [theme.breakpoints.down(960)]: {
      fontSize: 13,
    },
  },
  price: {
    color: "rgba(0,0,0,0.7)",
    [theme.breakpoints.down(960)]: {
      fontSize: 13,
    },
  },
  description: {
    color: "rgba(0,0,0,0.9)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    [theme.breakpoints.down(960)]: {
      fontSize: 14,
    },
  },
  addButtonbox: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down(960)]: {
      justifyContent: "center",
    },
  },
  addButton: {
    marginTop: 20,
    padding: "14px 30px",
    backgroundColor: "#f00000",
    borderRadius: 30,
    color: "white",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#f44336",
    },
    [theme.breakpoints.down(960)]: {
      padding: "10px 20px",
      fontSize: 13,
    },
  },
}));
const Items = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.center} item xs={12} md={6}>
      <Box className={classes.ItemBox}>
        <img className={classes.imgitem} alt="header" src={props.imgitem} />
        <Box className={classes.text}>
          <Typography className={classes.boxtitle} variant="h6">
            {props.itemTitle}
          </Typography>
          <Typography className={classes.offprice} variant="body1">
            {props.offprice}
          </Typography>
          <Typography className={classes.price} variant="body1">
            {props.price}
          </Typography>
          <Typography className={classes.description} variant="body1">
            {props.description}
          </Typography>
          <Box className={classes.addButtonbox}>
            <Link href="/ServiceDetail" className={classes.addButton}>
              Add To Basket
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Items;
