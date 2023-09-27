import { Box, makeStyles,  } from "@material-ui/core";
import React, { useEffect } from "react";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import DetailNavBox from "../../components/DetailNavbox/DetailNavBox";
import DetailResipes from "../../components/DetailResipes/DetailResipes";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "88%",
    margin: "auto",
  },
}));
const FoodDetail = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        <DetailHeader/>
        <DetailNavBox/>
        <DetailResipes/>
    </Box>
  );
};

export default FoodDetail;
