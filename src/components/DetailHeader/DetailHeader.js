import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import detailimg from "../../images/detail.png";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    height: 300,
    [theme.breakpoints.down(1280)]: {
      height: "auto",
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  img: {
    width: "100%",
    objectFit: "cover",
    height: 300,
  },
  leftbox: {
    margin: "15px 40px 15px 0",
  },
  minimaltitle: {
    fontSize: 15,
    color: "#f44336",
  },
  title: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 700,
    textDecoration: "underline",
    textTransform: "capitalize",
  },
  subtitle1: {
    marginTop: 20,
    fontSize: 14,
    color: "rgba(0,0,0,0.5)",
    textTransform: "capitalize",
  },
  subtitle2: {
    marginTop: 20,
    fontSize: 16,
    color: "rgba(0,0,0,0.6)",
    textTransform: "capitalize",
  },
  textboxes: {
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    color: "rgba(0,0,0,0.7)",
  },
}));
const DetailHeader = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid item sm={12} lg={6}>
        <Box className={classes.leftbox}>
          <Typography className={classes.minimaltitle} variant="h6">
            ___Chiken
          </Typography>
          <Typography className={classes.title} variant="h1">
            This is a test title chiken test chiken
          </Typography>
          <Typography className={classes.subtitle1} variant="subtitle1">
            Cooking time :30 min
          </Typography>
          <Typography className={classes.subtitle2} variant="subtitle2">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print,
          </Typography>
          <Grid className={classes.textboxes} container spacing={3}>
            <Grid item xs={4}>
              20 Like
            </Grid>
            <Grid item xs={4}>
              472 Views
            </Grid>
            <Grid item xs={4}>
              25 Comments
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item sm={12} lg={6}>
        <img className={classes.img} alt="detail" src={detailimg} />
      </Grid>
    </Grid>
  );
};

export default DetailHeader;
