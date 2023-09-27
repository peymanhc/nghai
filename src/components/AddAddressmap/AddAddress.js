import {
  Box,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Googlemap from "../Googlemap/Googlemap";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "scroll",
  },
  googlemap: {
    width: "100%",
  },
  titlemodal: {
    fontSize: 15,
    borderLeft: "1px solid #f44336",
    padding: "0 10px",
    margin: "0 10px",
    color: "rgba(0,0,0,0.8)",
  },
  wrapper: {
    padding: 20,
  },
  modaltextfield: {
    backgroundColor: "white",
    boxShadow: "0px 0px 6px rgba(0,0,0,0.4)",
    borderRadius: 10,
    marginBottom: 25,
  },
  fieldInput: {
    border: "none",
    borderRadius: 10,
    fontSize: 12,
    height: 50,
    padding: 20,
  },
  send: {
    padding: "15px 0",
    width: "100%",
    backgroundColor: "#f00000",
    borderRadius: 10,
    fontSize: 14,
    textTransform: "lowercase",
    color: "white",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#f44336",
      textDecoration: "none",
    },
  },
}));

const AddAddress = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.googlemap}>
        <Googlemap height={350} />
      </Box>
      <Box className={classes.wrapper}>
        <Typography className={classes.titlemodal} variant="body1">
          address detail
        </Typography>
        <TextField
          id="outlined-multiline-static"
          placeholder="street/building"
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
        <Typography className={classes.titlemodal} variant="body1">
          your full name
        </Typography>
        <TextField
          id="outlined-multiline-static"
          placeholder="Peyman hadavi"
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
        <Typography className={classes.titlemodal} variant="body1">
          email
        </Typography>
        <TextField
          id="outlined-multiline-static"
          placeholder="ngh@nghaferi.com"
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
        <Link href="/servicePayment" className={classes.send}>
          save and continue
        </Link>
      </Box>
    </Box>
  );
};

export default AddAddress;
