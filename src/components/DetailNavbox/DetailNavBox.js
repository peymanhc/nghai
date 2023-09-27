import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0",
    width: "100%",
    border: "2px solid rgba(0,0,0,0.05)",
  },
  wrapper: {
    padding: "0 20px",
    paddingTop: 20,
    [theme.breakpoints.down(1000)]: {
      display:"flex",
      justifyContent:"center"
    },
  },
  navhead: {
    color: "#f44336",
    fontSize: 15,
    textTransform: "capitalize",
  },
  card: {
    borderBottom: "2px solid transparent",
    padding: "0px 5px 10px 5px",
    margin: "0 10px",
    cursor: "pointer",
    [theme.breakpoints.down(1280)]: {
      margin: 10,
      textAlign:"center"
    }
  },
  cardActive: {
    borderBottom: "2px solid #f22f2f",
    padding: "0px 5px 10px 5px",
    margin: "0 10px",
    cursor: "pointer",
    [theme.breakpoints.down(1280)]: {
      margin: 10,
      textAlign:"center"
    }
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(0,0,0,0.8)",
  },
}));
const DetailNavBox = () => {
  const [activenav, setactivenav] = useState(0);

  const ChangeActive = (active) => {
    setactivenav(active);
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid className={classes.wrapper} container>
        <Grid item sm={12} lg={3}>
          <Box
            onClick={() => ChangeActive(0)}
            className={activenav === 0 ? classes.cardActive : classes.card}
          >
            <Typography className={classes.navhead} variant="h6">
              Fast Food
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Food Corner:Top Japenese Resurants for sushi
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} lg={3}>
          <Box
            onClick={() => ChangeActive(1)}
            className={activenav === 1 ? classes.cardActive : classes.card}
          >
            <Typography className={classes.navhead} variant="h6">
              Chicken
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Food Corner:Top Japenese Resurants for sushi
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} lg={3}>
          <Box
            onClick={() => ChangeActive(2)}
            className={activenav === 2 ? classes.cardActive : classes.card}
          >
            <Typography className={classes.navhead} variant="h6">
              Salads
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Food Corner:Top Japenese Resurants for sushi
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} lg={3}>
          <Box
            onClick={() => ChangeActive(3)}
            className={activenav === 3 ? classes.cardActive : classes.card}
          >
            <Typography className={classes.navhead} variant="h6">
              Fish
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              Food Corner:Top Japenese Resurants for sushi
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailNavBox;
