import {
  Box,
  Button,
  makeStyles,
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
  button: {
    width: 70,
    margin: 5,
    height: 35,
    fontSize: 12,
    borderRadius: 30,
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.2)",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  },
  activebutton: {
    width: 70,
    margin: 5,
    height: 35,
    fontSize: 12,
    borderRadius: 30,
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,0.2)",
    color: "white",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
    backgroundColor: "rgba(0,0,0,0.4)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },
  sepecficbtn: {
    width: 160,
    height: 50,
    margin: 10,
    fontSize: 13,
    borderRadius: 30,
    border: "1px solid #f44336",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.6)",
    "&:hover": {
      border: "1px solid #f44336",
      backgroundColor: "transparent",
      color: "rgba(0,0,0,0.6)",
    },
  },
  activesepecficbtn: {
    width: 160,
    height: 50,
    margin: 10,
    fontSize: 13,
    borderRadius: 30,
    fontWeight: 700,
    border: "1px solid #f44336",
    backgroundColor: "#f44336",
    color: "white",
    "&:hover": {
      border: "1px solid #f44336",
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
}));
const HomeCleaners = () => {
  const [hours, sethours] = useState(3);
  const [cleaners, setcleaners] = useState(1);
  const [sepecfic, setsepecfic] = useState(0);
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.title} variant="h3">
        How many hours do you need your cleaner to stay?
      </Typography>
      <Box display="flex">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Button
            key={item}
            onClick={() => sethours(item)}
            className={hours === item ? classes.activebutton : classes.button}
          >
            {item}
          </Button>
        ))}
      </Box>
      <Typography className={classes.title} variant="h3">
        How many cleaners do you need?
      </Typography>
      {[1, 2, 3, 4, 5].map((item) => (
        <Button
          key={item}
          onClick={() => setcleaners(item)}
          className={cleaners === item ? classes.activebutton : classes.button}
        >
          {item}
        </Button>
      ))}
      <Typography className={classes.title} variant="h3">
        Do you have any specific instructions?
      </Typography>
      <Button
        onClick={() => setsepecfic(0)}
        className={
          sepecfic === 0 ? classes.activesepecficbtn : classes.sepecficbtn
        }
      >
        No,i have them
      </Button>
      <Button
        onClick={() => setsepecfic(1)}
        className={
          sepecfic === 1 ? classes.activesepecficbtn : classes.sepecficbtn
        }
      >
        yes,please
      </Button>
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
        <Link style={{ textDecoration: "none" }} to="/HomeCleaningTime">
          <Button className={classes.next}>next</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeCleaners;
