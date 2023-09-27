import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Breakfast from "../../images/Breakfast.png";
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
    top: -156,
    right: 0,
    margin: "auto",
  },
  arrowBtn: {
    width: 60,
    height: 60,
    position: "absolute",
    top: 0,
    border: "none",
    cursor: "pointer",
    borderRadius: 10,
    backgroundColor: "transparent",
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
  card: {
    cursor: "pointer",
    width: "100%",
    height: 130,
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 70,
    height: 70,
    objectFit: "cover",
    cursor: "pointer",
  },
  name: {
    textAlign: "center",
    marginTop: 10,
    textTransform: "uppercase",
  },
  container: {
    maxWidth: 1200,
    margin: "auto",
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
        style={{ right: 10 }}
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

const FoodsSlider = (props) => {
  const classes = useStyles();
  return (
    <Box style={{ maxWidth: "100%", margin: "auto" }}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        renderButtonGroupOutside={true}
        containerClass={classes.container}
        customButtonGroup={
          <ButtonGroup next={props.next} previous={props.previous} />
        }
        draggable
        className={classes.container}
        infinite={true}
        centerMode={false}
        autoPlay={false}
        keyBoardControl
        minimumTouchDrag={80}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1200,
            },
            items: 6,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: {
              max: 1200,
              min: 900,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 900,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
        }}
        slidesToSlide={1}
        swipeable
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Box key={item} width="90%" style={{ cursor: "pointer" }}>
            <Box className={classes.card}>
              <img alt="Breakfast" src={Breakfast} className={classes.icon} />
            </Box>
            <Typography className={classes.name} variant="body2">
              Breakfast
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default FoodsSlider;
