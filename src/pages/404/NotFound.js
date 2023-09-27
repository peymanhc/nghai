import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    color: "#ff0000",
    textShadow: "1px 1px 1px black",
  },
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4">Page Not Found</Typography>
      <Typography style={{ marginTop: 50 }} variant="h4">
        404
      </Typography>
    </Box>
  );
};

export default NotFound;
