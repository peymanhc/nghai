import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Leftimg from '../../images/Mask Group 16.png'
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto",
    position: "relative",
  },
  leftimg: {
    width: "100%",
    height: 600,
    objectFit: "cover",
    [theme.breakpoints.down(1000)]: {
      height: 400,
    }
  },
  storytitle: {
    fontSize: 18,
    marginTop: 70,
    fontWeight: 700,
    [theme.breakpoints.down(1000)]: {
      marginTop: 0,
    }
  },
  storyText: {
    marginTop: 50,
    textAlign: "justify",
    fontSize: 17,
    color: "rgba(0,0,0,0.5)",
    [theme.breakpoints.down(1000)]: {
      marginTop: 20,
    }
  },
  bottomBg: {
    backgroundImage:"url(https://nynypizzeria.com/wp-content/uploads/2015/11/red-food-wallpaper.jpg)",
    height: 150,
    width: "100%",
    backgroundSize: "cover",
    position: "relative",
    right: 0,
    top: -174,
    zIndex: -1,
    margin:"0 50px",
    [theme.breakpoints.down(1000)]: {
     display:"none"
    }
  },
}));

const OurStory = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid style={{ margin: "auto", maxWidth: 1400 }} container >
        <Grid style={{padding:16}} item md={4} xs={12}>
          <img
            className={classes.leftimg}
            alt="mechanic"
            src={Leftimg}
          />
        </Grid>
        <Grid style={{padding:16}} item xs={12} md={6}>
          <Typography className={classes.storytitle} variant="h3">
            our story
          </Typography>
          <Typography className={classes.storyText} variant="subtitle1">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Typography>
        </Grid>
        <Box className={classes.bottomBg}/>
      </Grid>
    </Box>
  );
};

export default OurStory;
