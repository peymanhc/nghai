import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop:20,
    textAlign: "center",
    width: "100%",
    "&:before": {
      content: "''",
      display: "block",
      width: "65%",
      position: "absolute",
      marginTop: 45,
      right: 0,
      borderBottom: "1px solid #f22d2d",
    },
    "&:after": {
      content: "''",
      display: "block",
      width: "65%",
      position: "absolute",
      right: 0,
      marginTop: 25,
      borderBottom: "1px solid #f22d2d",
    },
  },
  resuranbox: {
    width: "100%",
    height: 350,
    display: "flex",
    position: "relative",
  },
  resturanimg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  wrapper: {
    maxWidth: 1500,
    margin: "100px auto",
    justifyContent: "center",
  },
  boxtitle: {
    backgroundColor: "black",
    width: "100%",
    fontWeight: 700,
    height: 50,
    color: "white",
    position: "absolute",
    textAlign: "center",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));
const Restaurants = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.title} variant="h4">
        All Restaurants
      </Typography>
      <Grid className={classes.wrapper} container spacing={3}>
        {[0, 1, 2, 3, 4].map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={2}>
            <Box className={classes.resuranbox}>
              <img
                className={classes.resturanimg}
                alt="food"
                src="https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/fideos-secos-tacos-FT-RECIPE0420-1.jpg"
              />
              <Typography className={classes.boxtitle} variant="body1">
                Resturan
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Restaurants;
