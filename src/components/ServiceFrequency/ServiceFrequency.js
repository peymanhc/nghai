import React, { useEffect } from "react";
import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import SnoozeIcon from "@material-ui/icons/Snooze";
import InfoIcon from "@material-ui/icons/Info";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import Support from "../../images/support.png";
import SupportBlack from "../../images/supportblack.png";
import Time from "../../images/time.png";
import Timered from "../../images/timered.png";
import help from "../../images/help.png";
import helpred from "../../images/helpred.png";
import { Help } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: 1200,
    margin: "50px auto",
  },
  iconBox: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.1)",
    [theme.breakpoints.down(1000)]: {
      width: 60,
      height: 60,
    },
  },
  iconButton: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    backgroundColor: "white",
    boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.1)",
    [theme.breakpoints.down(1000)]: {
      width: 40,
      height: 40,
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 700,
    margin: "auto",
  },
  activeicon: {
    width: 30,
    height: 30,
    color: "#ff0000",
    borderRadius: "50%",
    backgroundColor: "white",
  },
  icon: {
    width: 30,
    height: 30,
    color: "rgba(0,0,0,0.7)",
    borderRadius: "50%",
    backgroundColor: "white",
  },
  titleBox: {
    width: "100%",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    position: "relative",
  },
  title1: {
    width: "50%",
    marginRight: 5,
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
    height: 50,
    fontSize: 20,
    fontWeight: 600,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "start",
    display: "flex",
    color: "white",
  },
  item: {
    flexDirection: "column",
  },
  activeservice: {
    color: "#f20023",
    marginTop: 10,
    textAlign: "center",
    [theme.breakpoints.down(1000)]: {
      fontSize: 12,
    },
  },
  servicetext: {
    marginTop: 10,
    textAlign: "center",
    color: "rgba(0,0,0,0.7)",
    [theme.breakpoints.down(1000)]: {
      fontSize: 12,
    },
  },
}));

const ServiceFrequency = (props) => {
  const classes = useStyles();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box>
      <Box className={classes.titleBox}>
        <Box className={classes.title2}>
          <Typography className={classes.title1}>service </Typography> detail
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" className={classes.wrapper}>
        <Box className={classes.center}>
          <Box className={classes.item}>
            <Box className={classes.iconBox}>
              <IconButton className={classes.iconButton}>
                <img src={Support} />
              </IconButton>
            </Box>
            <Typography className={classes.activeservice} variant="subtitle1">
              frequency
            </Typography>
          </Box>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="301.197"
          height="100.500"
          viewBox="0 0 601.197 100.500"
        >
          <g transform="translate(-559.214 -405.15)">
            <path
              d="M0,0S155.9-108.85,300.15-108.85,577,0,577,0"
              transform="translate(559.5 514.5)"
              fill="none"
              stroke="#212121"
              stroke-width="1"
              stroke-dasharray="4 1"
            />
            <path
              d="M17.5,0,35,31,17.5,26.226,0,31Z"
              transform="matrix(-0.602, 0.799, -0.799, -0.602, 1160.41, 510.852)"
              fill="#212121"
            />
          </g>
        </svg>
        <Box className={classes.center}>
          <Box className={classes.item}>
            <Box className={classes.iconBox}>
              <IconButton className={classes.iconButton}>
                {props.active2 === undefined ? (
                  <img src={SupportBlack} />
                ) : (
                  <img src={Support} />
                )}
              </IconButton>
            </Box>
            <Typography
              style={{ color: props.active2 }}
              className={classes.servicetext}
              variant="subtitle1"
            >
              service detail
            </Typography>
          </Box>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="301.197"
          height="100.500"
          viewBox="0 0 601.197 100.500"
        >
          <g transform="translate(-559.214 -405.15)">
            <path
              d="M0,0S155.9-108.85,300.15-108.85,577,0,577,0"
              transform="translate(559.5 514.5)"
              fill="none"
              stroke="#212121"
              stroke-width="1"
              stroke-dasharray="4 1"
            />
            <path
              d="M17.5,0,35,31,17.5,26.226,0,31Z"
              transform="matrix(-0.602, 0.799, -0.799, -0.602, 1160.41, 510.852)"
              fill="#212121"
            />
          </g>
        </svg>
        <Box className={classes.center}>
          <Box className={classes.item}>
            <Box className={classes.iconBox}>
              <IconButton className={classes.iconButton}>
                {props.active3 === undefined ? (
                  <img src={Time} />
                ) : (
                  <img src={Timered} />
                )}
              </IconButton>
            </Box>
            <Typography
              style={{ color: props.active3 }}
              className={classes.servicetext}
              variant="subtitle1"
            >
              date a time
            </Typography>
          </Box>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="301.197"
          height="100.500"
          viewBox="0 0 601.197 100.500"
        >
          <g transform="translate(-559.214 -405.15)">
            <path
              d="M0,0S155.9-108.85,300.15-108.85,577,0,577,0"
              transform="translate(559.5 514.5)"
              fill="none"
              stroke="#212121"
              stroke-width="1"
              stroke-dasharray="4 1"
            />
            <path
              d="M17.5,0,35,31,17.5,26.226,0,31Z"
              transform="matrix(-0.602, 0.799, -0.799, -0.602, 1160.41, 510.852)"
              fill="#212121"
            />
          </g>
        </svg>
        <Box className={classes.center}>
          <Box className={classes.item}>
            <Box className={classes.iconBox}>
              <IconButton className={classes.iconButton}>
                {props.active4 === undefined ? (
                  <img src={help} />
                ) : (
                  <img src={helpred} />
                )}
              </IconButton>
            </Box>
            <Typography
              style={{ color: props.active4 }}
              className={classes.servicetext}
              variant="subtitle1"
            >
              peyment
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceFrequency;
