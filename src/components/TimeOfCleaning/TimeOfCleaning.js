import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "black",
    fontSize: 17,
    fontWeight: 600,
    margin: "20px 0",
  },
  subtitle: {
    margin: "0 32px",
    color: "rgba(0,0,0,0.7)",
    fontSize: 15,
  },
  label: {
    fontSize: 18,
  },
  off: {
    borderRadius: 5,
    margin: "0 50px",
    padding: "8px 25px",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "white",
    fontSize: 12,
  },
  rootlabel: {
    margin: "20px 0",
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
}));
const TimeOfCleaning = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box padding={2} >
      <Typography className={classes.title} variant="h3">
        How often do you need your cleaner?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={value} onChange={handleChange}>
          <Box className={classes.rootlabel}>
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={<span className={classes.label}>One-Time</span>}
            />
            <Typography className={classes.subtitle} variant="body2">
              Book a cleaning for one time only
            </Typography>
          </Box>
          <Box className={classes.rootlabel}>
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={
                <span className={classes.label}>
                  Bi-weekly <span className={classes.off}> 5% off</span>
                </span>
              }
            />
            <Typography className={classes.subtitle} variant="body2">
              Book a recurring cleaning with same cleaner every two-weeks
            </Typography>
          </Box>
          <Box className={classes.rootlabel}>
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={
                <span className={classes.label}>
                  Weekly <span className={classes.off}> 12% off</span>
                </span>
              }
            />
            <Typography className={classes.subtitle} variant="body2">
              Book a recurring cleaning with same cleaner every weeks
            </Typography>
          </Box>
        </RadioGroup>
      </FormControl>
      <Box display="flex" justifyContent="end">
        <Link
          style={{ textDecoration: "none" }}
          to="/HomeCleaningServiceDetail"
        >
          <Button className={classes.next}>next</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TimeOfCleaning;
