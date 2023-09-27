import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr !important",
    position: "relative",
  },
  imgpainter: {
    width: "35%",
    height: 450,
    objectFit: "cover",
  },
  img: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  buttonGp: {
    height: 0,
    zIndex: 9,
    position: "absolute",
    width: "100%",
    top: "20%",
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
  items: {
    width: "90%",
    margin: "20px 60px",
    zIndex: 3,
  },
  "@global": {
    ".react-multi-carousel-item": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));
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

const Slider2 = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        customButtonGroup={
          <ButtonGroup next={props.next} previous={props.previous} />
        }
        draggable
        infinite={false}
        containerClass={props.className}
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
            items: props.showDesktop,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 1200,
              min: 0,
            },
            items: props.showTablet,
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

export default Slider2;
