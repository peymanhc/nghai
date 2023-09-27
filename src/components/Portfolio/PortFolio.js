import {
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1500,
    margin: "50px auto",
    position: "relative",
  },
  wrapper: {
    backgroundColor: "white",
    width: "100%",
    minHeight: 100,
    display: "flex",
    flexDirection: "column",
    padding: "20px 0",
    justifyContent: "center",
    boxShadow: "1px 1px 20px 1px rgba(0,0,0,0.15)",
    borderRadius: 15,
  },
  title: {
    fontSize: 23,
    textAlign: "center",
    width: "100%",
    "&:before": {
      content: "''",
      display: "block",
      width: "57%",
      position: "absolute",
      marginTop: 35,
      borderBottom: "2px solid #f9938c",
    },
    "&:after": {
      content: "''",
      display: "block",
      width: "57%",
      position: "absolute",
      right: 0,
      marginTop: -35,
      borderBottom: "2px solid #f9938c",
    },
  },
  boxbody: {
    padding: 30,
  },
  imgHeader: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    objectFit: "cover",
  },
  ItemBox: {
    width: "95%",
    height: 230,
    padding: 15,
    borderRadius: 15,
    border: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    overflow: "hidden",
  },
  imgitem: {
    borderRadius: 15,
    width: "40%",
    height: "100%",
  },
  text: {
    padding: 20,
  },
  boxtitle: {
    fontSize: 17,
    fontWeight: 600,
  },
  offprice: {
    color: "#f44336",
    textDecoration: "line-through",
  },
  price: {
    color: "rgba(0,0,0,0.7)",
  },
  description: {
    color: "rgba(0,0,0,0.9)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
  addButtonbox: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
  },
  addButton: {
    marginTop: 20,
    padding: "10px 30px",
    backgroundColor: "#f00000",
    borderRadius: 30,
    color: "white",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
}));
const PortFolio = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title} variant="h4">
          {props.title}
        </Typography>
        <Box className={classes.boxbody}>
          <img
            className={classes.imgHeader}
            alt="header"
            src={props.imageHeader}
          />
          <Grid style={{ marginTop: 50 }} container spacing={3}>
            {props.body}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PortFolio;
