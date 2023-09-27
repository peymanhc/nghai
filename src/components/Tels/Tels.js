import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "25%",
  },
  textbox: {
    textAlign: "center",
    marginTop: 10,
    color: "rgba(0,0,0,0.7)",
    fontSize: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 12,
  },
}));

const Tels = () => {
  const classes = useStyles();
  return (
    <Box
      style={{ margin: "auto" }}
      maxWidth={900}
      display="flex"
      flexDirection="row"
      p={1}
      m={1}
      justifyContent="center"
    >
      <Box className={classes.box} p={1}>
        <PhoneAndroidIcon className={classes.icon} />
        <Box className={classes.textbox}>
          <Typography className={classes.text} variant="subtitle1">
            phone
          </Typography>
          <Typography className={classes.text} variant="subtitle2">
            +241456789
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          borderRight: "1px solid #f44336",
          borderLeft: "1px solid #f44336",
        }}
        className={classes.box}
        p={1}
      >
        <LocationOnIcon className={classes.icon} />
        <Box className={classes.textbox}>
          <Typography className={classes.text} variant="subtitle1">
            SearchMap
          </Typography>
          <Typography className={classes.text} variant="subtitle2">
            1824 tamani offers tower bussin
          </Typography>
        </Box>
      </Box>
      <Box className={classes.box} p={1}>
        <EmailIcon className={classes.icon} />
        <Box className={classes.textbox}>
          <Typography className={classes.text} variant="subtitle1">
            email
          </Typography>
          <Typography className={classes.text} variant="subtitle2">
            ngh@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Tels;
