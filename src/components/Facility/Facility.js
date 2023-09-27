import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import translate from "../../i18n/translate";
import { Link } from "react-router-dom";
import ImgFac from '../../images/Fac.png'
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr !important",
  },
  imgpainter: {
    width: "35%",
    height: 450,
    objectFit: "cover",
    [theme.breakpoints.down(1050)]: {
     display:"none"
    },
  },
  facility: {
    margin: "100px 0",
    alignItems: "center",
    position: "relative",
    display: "flex",
  },
  boxSlider: {
    width: "75%",
    height: 350,
    right: 0,
    padding: 30,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    boxShadow: "1px 4px 9px 1px rgba(0,0,0,0.4)",
    [theme.breakpoints.down(1050)]: {
      position: "relative",
      width: "80%",
      padding: 30,
      margin:"auto"
     },
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
    top: 25,
    backgroundColor: "white",
    right: 30,
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
  SliderItemButton: {
    display: "flex",
    width: 250,
    backgroundColor: "#f44336",
    color: "white",
    fontSize: 12,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  container: {
    marginTop: 30,
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

const Lists = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const Facility = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.facility}>
        <img
          className={classes.imgpainter}
          alt="painter"
          src={ImgFac}
        />
        <Box className={classes.boxSlider}>
          <Box className={classes.boxheader}>
            <Typography className={classes.SliderHeader} variant="h6">
              {translate("FacilityServices")}
            </Typography>
          </Box>
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
            className={classes.container}
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
                items: 3,
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
                <Link
                key={i}
                  style={{ textDecoration: "none", color: "black" }}
                  to="/HomeCleaningFrequency"
                >
                  <Box style={{ padding: 10 }} >
                    <img
                      alt="facility"
                      className={classes.img}
                      src="https://www.navitech-expo.ru/common/img/uploaded/exhibitions/navitech/2019/photo/index/IMG_8876_.jpg"
                    />
                    <Box className={classes.buttonbox}>
                      <Button className={classes.SliderItemButton}>
                        Clean
                      </Button>
                    </Box>
                    <p
                      style={{ fontSize: 11, marginTop: 5, padding: 5 }}
                      className="mt-2 p-2 "
                    >
                      EXPOCENTRE AO has featured its projects at the 6th
                      International Microelectronics Forum
                    </p>
                  </Box>
                </Link>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default Facility;
