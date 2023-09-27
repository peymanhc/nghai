import React, { useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import OurStory from "../../components/OurStory/OurStory";
import OurGoal from "../../components/OurGoal/OurGoal";
import OurTeam from "../../components/OurTeam/OurTeam";
import header from "../../images/O-1.png";
const useStyles = makeStyles((theme) => ({
  headimg: {
    position: "relative",
    background: `url(${header}) center / cover`,
    width: "100%",
    height: 600,
    backgroundSize: "cover",
  },
  headbox: {
    width: "100%",
    height: 600,
    background: "rgba(0,0,0,0.4)",
  },
  text: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 700,
    padding: "0px 150px",
    color: "white",
    [theme.breakpoints.down(700)]: {
      padding: "0px 20px",
    },
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 100,
  },
  red: {
    backgroundColor: "#f44336",
    height: 40,
    fontSize: 30,
    fontWeight: 700,
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
}));

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.headimg}>
        <Box className={classes.headbox}>
          <Box className={classes.text}>
            <Box className={classes.title}>
              Abou
              <Typography className={classes.red}>
                t <b style={{ color: "black", margin: "0 10px" }}>Us</b>
              </Typography>
            </Box>
            <Typography className={classes.subtitle}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Typography>
          </Box>
        </Box>
      </Box>
      <OurStory />
      <OurGoal />
      <OurTeam />
    </Box>
  );
};

export default About;
