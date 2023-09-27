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
    color: "black",
    width: 200,
    height: 50,
    fontSize: 10,
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
    width: 200,
    fontSize: 10,
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
  wrapper: {
    width: "50%",
    [theme.breakpoints.down(1300)]: {
      width: "100%",
    },
  },
}));
const HomeTypes = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const [rooms, setrooms] = useState("1");

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
        Type of home?
      </Typography>
      <FormControl className={classes.root} component="fieldset">
        <Box className={classes.wrapper}>
          <RadioGroup name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel
              className={classes.label}
              value="1"
              control={<Radio />}
              label="Super Shine"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Extreme body Wash"
            />
          </RadioGroup>
        </Box>
      </FormControl>
      <Typography className={classes.title} variant="h3">
        Number of bedrooms?
      </Typography>
      <Grid className={classes.wrapper} spacing={2} container>
        {roomsitems.map((item) => (
          <Grid key={item.id} item xs={12} md={6}>
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
const roomsitems = [
  {
    id: 1,
    text: "studio(aed 399)",
  },
  {
    id: 2,
    text: "1br(aed 599)",
  },
  {
    id: 3,
    text: "2br(aed 799)",
  },
  {
    id: 4,
    text: "3br(aed 999)",
  },
  {
    id: 5,
    text: "4br(aed 1199)",
  },
];

export default HomeTypes;
