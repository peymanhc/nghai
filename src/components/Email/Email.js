import { Box, Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1250,
    margin: "50px auto",
  },
  wrapper: {
    backgroundColor: "white",
    width: "100%",
    minHeight: 100,
    display: "flex",
    justifyContent: "center",
    boxShadow: "1px 1px 20px 1px rgba(0,0,0,0.1)",
  },
  sendbox: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
  },
  send: {
    marginTop: 20,
    padding: "10px 30px",
    backgroundColor: "#f00000",
    borderRadius: 30,
    color: "white",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 700,
    margin: "20px auto",
    [theme.breakpoints.down(700)]: {
      margin: "0px auto",
    },
  },
  category: {
    backgroundColor: "white",
    borderRadius: 30,
    textTransform: "lowercase",
    padding: "10px 45px",
    fontSize: 18,
    boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.1)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    [theme.breakpoints.down(700)]: {
      padding: "10px 25px",
      fontSize: 12,
    },
  },
  categoryactive: {
    backgroundColor: "#f20023",
    borderRadius: 30,
    color: "white",
    textTransform: "lowercase",
    padding: "10px 45px",
    fontSize: 18,
    boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.1)",
    "&:hover": {
      backgroundColor: "#f44336",
    },
    [theme.breakpoints.down(700)]: {
      padding: "10px 25px",
      fontSize: 12,
    },
  },
}));
const Email = () => {
  const classes = useStyles();
  const [active, setactive] = useState(0);
  const changeActive = (e) => {
    setactive(e);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.center}>
        <Box className={classes.center} item>
          <Button
            onClick={(e) => changeActive(0)}
            className={active === 0 ? classes.categoryactive : classes.category}
          >
            apartman
          </Button>
        </Box>
        <Box className={classes.center} item>
          <Button
            onClick={(e) => changeActive(1)}
            className={active === 1 ? classes.categoryactive : classes.category}
          >
            villa
          </Button>
        </Box>
        <Box className={classes.center} item>
          <Button
            onClick={(e) => changeActive(2)}
            className={active === 2 ? classes.categoryactive : classes.category}
          >
            office
          </Button>
        </Box>
        <Box className={classes.center} item>
          <Button
            onClick={(e) => changeActive(3)}
            className={active === 3 ? classes.categoryactive : classes.category}
          >
            add-on
          </Button>
        </Box>
      </Box>
      <Box className={classes.wrapper}>
        <Grid style={{ padding: 20 }} container spacing={3}>
          <Grid className={classes.center} item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              placeholder="First Name"
              fullWidth
              margin="none"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.center} item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              placeholder="Last Name"
              fullWidth
              margin="none"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.center} item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              placeholder="City"
              helperText="Your city"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.center} item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              placeholder="Service Detail"
              helperText="1 * 6 Bedroom"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.center} item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              placeholder="date a time"
              helperText="How long do you want?"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.center} item md={6} xs={12}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              placeholder="Email"
              helperText="Your Currect Email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.center} item xs={12}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              placeholder="Address"
              helperText="1824 Tamani Arts Offices Tower, Businessbay"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.sendbox}>
        <Button className={classes.send}>send Email</Button>
      </Box>
    </Box>
  );
};

export default Email;
