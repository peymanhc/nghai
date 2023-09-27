import {
  Box,
  Button,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Slider2 from "../Slider2/Slider2";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ModalPopUp from "../Modal/Modal";
import CloseIcon from "@material-ui/icons/Close";
import AddAddress from "../AddAddressmap/AddAddress";
const days = [
  {
    id: 1,
    date: "wed",
    time: "20",
  },
  {
    id: 2,
    date: "thu",
    time: "21",
  },
  {
    id: 3,
    date: "fri",
    time: "22",
  },
  {
    id: 4,
    date: "sat",
    time: "23",
  },
  {
    id: 5,
    date: "sun",
    time: "24",
  },
  {
    id: 6,
    date: "mon",
    time: "25",
  },
  {
    id: 7,
    date: "tue",
    time: "26",
  },
  {
    id: 8,
    date: "wed",
    time: "27",
  },
  {
    id: 9,
    date: "thu",
    time: "28",
  },
  {
    id: 10,
    date: "fri",
    time: "29",
  },
  {
    id: 11,
    date: "sat",
    time: "30",
  },
  {
    id: 12,
    date: "sun",
    time: "1",
  },
  {
    id: 13,
    date: "mon",
    time: "2",
  },
  {
    id: 14,
    date: "thu",
    time: "3",
  },
  {
    id: 15,
    date: "wed",
    time: "4",
  },
];
const time = [
  {
    id: 1,
    time: "8:30",
  },
  {
    id: 2,
    time: "9:00",
  },
  {
    id: 3,
    time: "9:30",
  },
  {
    id: 4,
    time: "10:00",
  },
  {
    id: 5,
    time: "10:30",
  },
  {
    id: 6,
    time: "11:00",
  },
  {
    id: 7,
    time: "11:30",
  },
  {
    id: 8,
    time: "12:00",
  },
  {
    id: 9,
    time: "12:30",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    color: "black",
    fontSize: 17,
    fontWeight: 600,
    margin: "20px 0",
  },
  cardroot: {
    height: 90,
    width: 35,
    cursor: "pointer",
    padding: "3px 10px",
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    border: "1px solid rgba(0,0,0,0.1)",
    textTransform: "uppercase",
  },
  cardDate: {
    borderRadius: "50%",
    backgroundColor: "white",
    color: "black",
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  },
  cardDateActive: {
    borderRadius: "50%",
    backgroundColor: "#f44336",
    color: "white",
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    boxShadow: "0px 0px 5px rgba(0,0,0,0.4)",
  },
  cardtimeroot: {
    borderRadius: 40,
    backgroundColor: "white",
    color: "black",
    width: 100,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    margin: "10px 0",
    cursor: "pointer",
  },
  cardtimerootActive: {
    cursor: "pointer",
    borderRadius: 40,
    backgroundColor: "#9e9e9e",
    color: "white",
    width: 100,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    boxShadow: "0px 0px 5px rgba(0,0,0,0.4)",
    margin: "10px 0",
  },
  items: {
    width: "90%",
    margin: "20px 60px",
    zIndex: 3,
  },
  items2: {
    width: "90%",
    margin: "20px 60px",
    zIndex: 3,
  },
  textfield: {
    fontSize: 12,
    margin: "auto",
    display: "flex",
    width: "90%",
  },
  sendbox: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  send: {
    padding: "5px 30px",
    backgroundColor: "#f00000",
    borderRadius: 10,
    fontSize: 14,
    textTransform: "lowercase",
    color: "white",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  modalbox: {
    width: 700,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalWrapper: {
    padding: 30,
    minHeight: 150,
    border: "1px solid rgba(0,0,0,0.6)",
    position: "relative",
  },
  close: {
    position: "absolute",
    right: 0,
    top: 0,
    color: "black",
  },
  titlemodal: {
    fontSize: 17,
    borderLeft: "1px solid #f44336",
    padding: "0 10px",
    color: "rgba(0,0,0,0.8)",
  },
  subtitlemodal: {
    marginTop: 50,
    fontSize: 18,
    textTransform: "capitalize",
    color: "rgba(0,0,0,0.6)",
  },
  modaltextfield: {
    backgroundColor: "white",
    boxShadow: "0px 0px 6px rgba(0,0,0,0.4)",
    borderRadius: 10,
    marginBottom: 50,
  },
  fieldInput: {
    border: "none",
    borderRadius: 10,
    fontSize: 12,
    height: 50,
    padding: 20,
  },
}));
const ServiceTime = (props) => {
  const classes = useStyles();
  const [activedate, setactivedate] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [map, setmap] = React.useState(false);
  const [activeTime, setactiveTime] = useState(1);
  const changeActivedate = (e) => {
    setactivedate(e);
  };
  const changeActiveTime = (e) => {
    setactiveTime(e);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const mapOpen = () => {
    setmap(true);
  };
  const mapClose = () => {
    setmap(false);
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h3">
        When would you like your cleaning?
      </Typography>
      <Slider2 className={classes.items} showDesktop={12} showTablet={3}>
        {days.map((item) => (
          <Box
          key={item}
            onClick={(e) => changeActivedate(item.id)}
            className={classes.cardroot}
          >
            <Box
              className={
                activedate !== item.id
                  ? classes.cardDate
                  : classes.cardDateActive
              }
            >
              <Typography variant="body1">{item.time}</Typography>
            </Box>
            <Typography variant="body1">{item.date}</Typography>
          </Box>
        ))}
      </Slider2>
      <Typography className={classes.title} variant="h3">
        What time would you like to start?
      </Typography>
      <Slider2 className={classes.items2} showDesktop={8} showTablet={3}>
        {time.map((item) => (
          <Box
            onClick={(e) => changeActiveTime(item.id)}
            className={
              activeTime !== item.id
                ? classes.cardtimeroot
                : classes.cardtimerootActive
            }
          >
            <Typography style={{ fontSize: 13 }} variant="body1">
              {item.time}
            </Typography>
          </Box>
        ))}
      </Slider2>
      <Typography className={classes.title} variant="h3">
        Do you have any specific instructions?
      </Typography>
      <TextField
        id="outlined-multiline-static"
        className={classes.textfield}
        placeholder="Example :key undermart,disinfect"
        multiline
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        rows={5}
        variant="outlined"
      />
      <Box className={classes.sendbox}>
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <Button onClick={handleOpen} className={classes.send}>
          next
        </Button>
      </Box>
      <ModalPopUp
        opening={open}
        close={handleClose}
        modal={
          <Box className={classes.modalbox}>
            <Box className={classes.modalWrapper}>
              <IconButton onClick={handleClose} className={classes.close}>
                <CloseIcon />
              </IconButton>
              <Box>
                <Typography className={classes.titlemodal} variant="body1">
                  please verify your number
                </Typography>
                <Typography className={classes.subtitlemodal} variant="body2">
                  YOUR MOBILE NUMBER
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="+989030525589"
                  multiline
                  size="small"
                  InputProps={{ className: classes.fieldInput }}
                  className={classes.modaltextfield}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <Button
                  onClick={mapOpen}
                  style={{ width: "100%" }}
                  className={classes.send}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        }
      />
      <ModalPopUp
        opening={map}
        close={mapClose}
        modal={
          <Box className={classes.modalbox}>
            <Box style={{ padding: 0 }} className={classes.modalWrapper}>
              <AddAddress />
            </Box>
          </Box>
        }
      />
    </Box>
  );
};

export default ServiceTime;
