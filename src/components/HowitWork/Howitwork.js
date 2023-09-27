import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import banner from '../../images/Howitworks.png' 
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 23,
    textAlign: "center",
    fontWeight: 700,
    width: "100%",
    "&:before": {
      content: "''",
      display: "block",
      width: "57%",
      position: "absolute",
      marginTop: 35,
      borderBottom: "2px solid #f9938c",
    },
  },
  subtitle:{
      fontSize:20,
      color:"rgba(0,0,0,0.8)",
      textAlign:"center",
      marginTop:50,
  },
  banner:{
      width:"100%",
      height:200,
      objectFit:"contain",
      margin:"auto",
      justifyContent:"center",
      display:"flex"
  }
}));
const Howitwork = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.title} variant="h4">
        How it Works
      </Typography>
      <Typography className={classes.subtitle} variant="body1">
        Compeletely newworks impactful user whereas nex-generations angage out
        thinking via tactical action
      </Typography>
      <img className={classes.banner} alt="how it works" src={banner} />
    </Box>
  );
};

export default Howitwork;
