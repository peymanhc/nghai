import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: 150,
    objectFit: "cover",
  },
  buttonGp: {
    height: 0,
    position: "relative",
    width: "100%",
    right: 0,
    left: 0,
    top: -190,
    margin: "auto",
  },
  arrowBtn: {
    width: 60,
    backgroundColor: "white",
    height: 60,
    position: "absolute",
    top: 0,
    border: "none",
    cursor: "pointer",
    borderRadius: 10,
    boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.3)",
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
    backgroundColor: "white",
    position: "relative",
    top: -22,
    margin: "auto",
    borderRadius: 10,
  },
  SliderItemButton: {
    display: "flex",
    width: 250,
    backgroundColor: "white",
    color: "black",
    fontSize: 12,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));
const ButtonGroup = ({ next, previous }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonGp}>
      <button
        style={{ left: -30 }}
        className={classes.arrowBtn}
        onClick={() => previous()}
      >
        <span className={classes.arrow}>
          <ArrowForwardIosIcon className={classes.leftarrow} />
        </span>
      </button>
      <button
        style={{ right: -20 }}
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

const DefaultSlider = (props) => {
  return (
    <Box style={{ maxWidth: "90%", margin: "auto" }}>
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
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        showDots={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1200,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1200,
              min: 700,
            },
            items: 2,
          },
          mobile: {
            breakpoint: {
              max: 700,
              min: 0,
            },
            items: 1,
          },
        }}
        slidesToSlide={1}
        swipeable
      >
        {props.children}
      </Carousel>
    </Box>
  );
};

export default DefaultSlider;
