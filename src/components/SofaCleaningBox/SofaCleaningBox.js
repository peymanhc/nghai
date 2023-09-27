import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider2 from "../Slider2/Slider2";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  boxul: {
    minHeight: 150,
    padding: 20,
    boxShadow: "1px 1px 19px rgba(0,0,0,0.2)",
    borderRadius: 6,
    margin: 20,
    marginBottom: 50,
  },
  circle: {
    listStyle: "none",
    position: "relative",
    margin: "15px 0",
    color: "rgba(0,0,0,0.8)",
    fontSize: 15,
    "&:before": {
      content: "''",
      position: "absolute",
      borderRadius: "50%",
      left: -30,
      top: 3,
      width: 12,
      height: 12,
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
  title: {
    color: "black",
    fontSize: 17,
    fontWeight: 600,
    margin: "20px 0",
  },
  buttonitem: {
    border: "1px solid #f44336",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.6)",
    width: 100,
    height: 50,
    fontSize: 13,
    fontWeight: 700,
    borderRadius: 40,
    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
    },
  },
  activebuttonitem: {
    border: "1px solid #f44336",
    backgroundColor: "#f44336",
    color: "white",
    width: 100,
    fontWeight: 900,
    fontSize: 13,
    height: 50,
    borderRadius: 40,
    "&:hover": {
      backgroundColor: "#f44336",
      color: "white",
    },
  },
  next: {
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
  items2: {
    width: 512,
    margin: "20px 60px",
    zIndex: 3,
  },
  cardtimeroot: {
    borderRadius: 40,
    backgroundColor: "white",
    color: "black",
    width: 60,
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
    width: 60,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    boxShadow: "0px 0px 5px rgba(0,0,0,0.4)",
    margin: "10px 0",
  },
}));
const SofaCleaningBox = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const [rooms, setrooms] = useState(1);
  const [chair, setchair] = useState(1);
  const [seater2, setseater2] = useState(7);
  const [seater3, setseater3] = useState(0);
  const [seater4, setseater4] = useState(3);
  const [seater5, setseater5] = useState(5);
  const changeseater2 = (event) => {
    setseater2(event);
  };
  const changeseater3 = (event) => {
    setseater3(event);
  };
  const changeseater4 = (event) => {
    setseater4(event);
  };
  const changeseater5 = (event) => {
    setseater5(event);
  };
  const changechair = (event) => {
    setchair(event);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const RoomChange = (event) => {
    setrooms(event);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.boxul}>
        <ul>
          <li className={classes.circle}>
            Recommended for new houses & apartments
          </li>
          <li className={classes.circle}>
            Thorough sanitation of all the areas including inside cabinets{" "}
          </li>
          <li className={classes.circle}>
            Pressure vacuuming and removal of grease & oil stains by a special
            deep cleaning team
          </li>
          <li className={classes.circle}>
            Floor scrubbing with professioanl cleaning equipment
          </li>
        </ul>
      </Box>
      <Typography className={classes.title} variant="h3">
        What time of sofa(s) or chair would you like to clean?
      </Typography>
      <FormControl className={classes.root} component="fieldset">
        <Box className={classes.wrapper}>
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              className={classes.label}
              value="1"
              control={<Radio />}
              label="Leather"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Fabric / Sueda"
            />
            <FormControlLabel value="3" control={<Radio />} label="Mixed" />
          </RadioGroup>
        </Box>
      </FormControl>
      <Typography className={classes.title} variant="h3">
        Number of chair/1-seater sofas(AED 50 per sofa)?
      </Typography>
      <Slider2 className={classes.items2} showDesktop={7} showTablet={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Box
          key={item}
            onClick={(e) => changechair(item)}
            className={
              chair !== item ? classes.cardtimeroot : classes.cardtimerootActive
            }
          >
            <Typography style={{ fontSize: 13 }} variant="body1">
              {item}
            </Typography>
          </Box>
        ))}
      </Slider2>
      <Typography className={classes.title} variant="h3">
        Number of 2-seater sofas(AED 99 per sofa)?
      </Typography>
      <Slider2 className={classes.items2} showDesktop={7} showTablet={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Box
          key={item}
            onClick={(e) => changeseater2(item)}
            className={
              seater2 !== item
                ? classes.cardtimeroot
                : classes.cardtimerootActive
            }
          >
            <Typography style={{ fontSize: 13 }} variant="body1">
              {item}
            </Typography>
          </Box>
        ))}
      </Slider2>
      <Typography className={classes.title} variant="h3">
        Number of 3-seater sofas(AED 149 per sofa)?
      </Typography>
      <Slider2 className={classes.items2} showDesktop={7} showTablet={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Box
          key={item}
            onClick={(e) => changeseater3(item)}
            className={
              seater3 !== item
                ? classes.cardtimeroot
                : classes.cardtimerootActive
            }
          >
            <Typography style={{ fontSize: 13 }} variant="body1">
              {item}
            </Typography>
          </Box>
        ))}
      </Slider2>
      <Typography className={classes.title} variant="h3">
        Number of 4-seater sofas(AED 199 per sofa)?
      </Typography>
      <Slider2 className={classes.items2} showDesktop={7} showTablet={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Box
          key={item}
            onClick={(e) => changeseater4(item)}
            className={
              seater4 !== item
                ? classes.cardtimeroot
                : classes.cardtimerootActive
            }
          >
            <Typography style={{ fontSize: 13 }} variant="body1">
              {item}
            </Typography>
          </Box>
        ))}
      </Slider2>
      <Typography className={classes.title} variant="h3">
        Number of 5-seater sofas(AED 249 per sofa)?
      </Typography>
      <Slider2 className={classes.items2} showDesktop={7} showTablet={3}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Box
          key={item}
            onClick={(e) => changeseater5(item)}
            className={
              seater5 !== item
                ? classes.cardtimeroot
                : classes.cardtimerootActive
            }
          >
            <Typography style={{ fontSize: 13 }} variant="body1">
              {item}
            </Typography>
          </Box>
        ))}
      </Slider2>
      <Typography className={classes.title} variant="h3">
        The size of the carpet?
      </Typography>
      <Grid spacing={2} container style={{ width: "350px" }}>
        {chairsize.map((item) => (
          <Grid key={item} item sm={12} lg={4}>
            <Button
              onClick={() => RoomChange(item.id)}
              className={
                rooms !== item.id
                  ? classes.buttonitem
                  : classes.activebuttonitem
              }
            >
              {item.text}
            </Button>
          </Grid>
        ))}
      </Grid>
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
      <Box display="flex" justifyContent="end">
        <Link style={{ textDecoration: "none" }} to="/ServiceDetail">
          <Button className={classes.next}>next</Button>
        </Link>
      </Box>
    </Box>
  );
};
const chairsize = [
  {
    id: 1,
    text: "2 * 2",
  },
  {
    id: 2,
    text: "3 * 3",
  },
  {
    id: 3,
    text: "4 * 4",
  },
];
export default SofaCleaningBox;
