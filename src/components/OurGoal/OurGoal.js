import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleBox: {
    width: "100%",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    position: "relative",
  },
  title1: {
    width: "40%",
    height: 45,
    fontSize: 22,
    fontWeight: 800,
    backgroundColor: "#f20023",
    alignItems: "center",
    justifyContent: "end",
    display: "flex",
    color: "white",
  },
  title2: {
    width: "100%",
    height: 70,
    fontSize: 20,
    fontWeight: 600,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "start",
    display: "flex",
    color: "black",
  },
  views: {
    margin: "70px 0",
    [theme.breakpoints.down(1000)]: {
      display: "flex",
      margin: "20px 0",
    },
    [theme.breakpoints.down(600)]: {
      display: "block",
    },
  },
  view: {
    textAlign: "center",
    margin: 50,
  },
  viewnumber: {
    fontSize: 22,
    fontWeight: "bold",
    margin: "5px 0",
  },
  viewtext: {
    fontSize: 18,
    color: "rgba(0,0,0,0.7)",
  },
  rightbox: {
    backgroundImage: " url(https://wallpaperaccess.com/full/754632.jpg)",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  textbox: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "35%",
    height: "100%",
    margin: "0 20px",
    color: "white",
    [theme.breakpoints.down(1000)]: {
      width: "100%",
      margin: 0,
    },
  },
  boxtitle: {
    fontSize: 20,
    fontWeight: 700,
  },
  boxText: {
    marginTop: 20,
    fontSize: 16,
  },
}));
const OurGoal = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.titleBox}>
        <Box className={classes.title2}>
          <Typography className={classes.title1}>our</Typography>goal
        </Box>
      </Box>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Box className={classes.views}>
            <Box className={classes.view}>
              <Typography className={classes.viewnumber} variant="h4">
                124
              </Typography>
              <Typography className={classes.viewtext} variant="subtitle2">
                last 24h views
              </Typography>
            </Box>
            <Box className={classes.view}>
              <Typography className={classes.viewnumber} variant="h4">
                4000
              </Typography>
              <Typography className={classes.viewtext} variant="subtitle2">
                last month views
              </Typography>
            </Box>
            <Box className={classes.view}>
              <Typography className={classes.viewnumber} variant="h4">
                4500
              </Typography>
              <Typography className={classes.viewtext} variant="subtitle2">
                last year views
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box className={classes.rightbox}>
            <Box className={classes.textbox}>
              <Box padding={1}>
                <Typography className={classes.boxtitle} variant="h4">
                  our goal
                </Typography>
                <Typography className={classes.boxText} variant="subtitle1">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups. Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurGoal;
