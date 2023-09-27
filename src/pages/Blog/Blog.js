import React, { useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import HeadImg from "../../images/BlogHeader.png";
import Foods from "../../components/Food/Foods";
import Nearbay from "../../components/NearBay";
import Offers from "../../components/Offers/Offers";
import Works from "../../components/Works/Works";
import Restaurants from "../../components/Restaurant/Restaurants";
import Howitwork from "../../components/HowitWork/Howitwork";
import BeComeHome from "../../components/BeComeHome/BeComeHome";
import FoodsSlider from "../../components/FoodsSlider/FoodsSlider";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: 400,
    objectFit: "cover",
    [theme.breakpoints.down(1000)]: {
      height: 200,
      objectFit: "fill",
    },
  },
  titleBox: {
    margin: "50px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  title1: {
    width: "50%",
    height: 35,
    padding: 10,
    fontSize: 20,
    fontWeight: 800,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "start",
    display: "flex",
    color: "white",
  },
  title2: {
    width: "100%",
    height: 50,
    fontSize: 20,
    fontWeight: 600,
    alignItems: "center",
    justifyContent: "start",
    display: "flex",
    color: "black",
  },
  titlered: {
    width: "50%",
    padding: 10,
    fontSize: 20,
    fontWeight: 600,
    display: "flex",
    color: "#f20023",
    justifyContent: "end",
  },
  subtext: {
    textAlign: "center",
    maxWidth: 900,
    fontSize: 16,
    color: "rgba(0,0,0,0.7)",
    margin: "auto",
  },
}));
const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <Box>
      <img className={classes.header} alt="blog" src={HeadImg} />
      <FoodsSlider />
      <Box className={classes.titleBox}>
        <Box className={classes.title2}>
          <Typography className={classes.titlered} variant="h4">
            check
          </Typography>
          <Typography variant="h4" className={classes.title1}>
            these out
          </Typography>
        </Box>
      </Box>
      <Typography className={classes.subtext} variant="body1">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and
      </Typography>
      <Foods />
      <Nearbay />
      <Offers />
      <Works
        buttontext="mealDeals"
        boxcolor="#e0e0e0"
        img="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
        description="EXPOCENTRE AO has featured its projects at the 6th
                  International Microelectronics Forum EXPOCENTRE AO has
                  featured its projects at the 6th International
                  Microelectronics Forum"
      />
      <Restaurants />
      <Howitwork />
      <BeComeHome />
    </Box>
  );
};

export default Blog;
