import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Nearbay from "./Nearbay";
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr !important",
  },
  imgpainter: {
    width: "35%",
    height: 450,
    objectFit: "cover",
  },
  SliderHeader: {
    color: "#f44336",
    backgroundColor: "white",
    fontWeight: "bold",
    height: 50,
    width: 190,
  },
  boxheader: {
    display: "flex",
    width: "100%",
    height: 15,
    borderBottom: "1px solid black",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  buttonGp: {
    height: 0,
    position: "absolute",
    width: 80,
    top: 0,
    backgroundColor: "#fafafa",
    right: 0,
    margin: "auto",
  },
  arrowBtn: {
    width: 35,
    height: 35,
    position: "absolute",
    top: 0,
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  arrow: {
    width: 20,
    border: "none",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    margin: "auto",
  },
  leftarrow: {
    transform: "rotateY(180deg)",
    color: "#f44336",
  },
  buttonbox: {
    padding: 5,
    width: 250,
    border: "1px solid #f44336",
    backgroundColor: "white",
    position: "relative",
    top: -22,
    margin: "auto",
    borderRadius: 10,
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
      [theme.breakpoints.down(990)]: {
        width: "37%",
      },
    },
  },
  "@global": {
    ".react-multi-carousel-track": {
      marginTop: 50,
    },
    ".react-multi-carousel-list": {
      top: -35,
    },
    ".react-multi-carousel-item": {
      justifyContent: "center",
      display: "flex",
    },
  },
}));
const Lists = ["1", "2", "3", "4"];
const ButtonGroup = ({ next, previous }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonGp}>
      <button
        style={{ left: 10 }}
        className={classes.arrowBtn}
        onClick={() => previous()}
      >
        <span className={classes.arrow}>
          <ArrowForwardIosIcon className={classes.leftarrow} />
        </span>
      </button>
      <button
        style={{ right: 0 }}
        className={classes.arrowBtn}
        onClick={() => next()}
      >
        <span style={{ color: "black" }} className={classes.arrow}>
          <ArrowForwardIosIcon />
        </span>
      </button>
    </div>
  );
};
const Slider = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.facility}>
        <Box className={classes.boxSlider}>
          <Typography className={classes.title} variant="h4">
            Nearby
          </Typography>
          <Box style={{ position: "relative" }}>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              customButtonGroup={
                <ButtonGroup next={props.next} previous={props.previous} />
              }
              draggable
              infinite
              autoPlay={false}
              focusOnSelect={false}
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              showDots={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1200,
                  },
                  items: 2,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 1200,
                    min: 0,
                  },
                  items: 1,
                },
              }}
              slidesToSlide={1}
              swipeable
            >
              {Lists.map((item, i) => {
                return (
                  <Nearbay
                    key={i}
                    type="Breakfast"
                    title="Title"
                    img="https://img1.mashed.com/img/gallery/delicious-breakfast-foods-you-need-to-try-before-you-die/intro-1584646886.jpg"
                    detail="Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and"
                    time="20-30"
                  />
                );
              })}
            </Carousel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
