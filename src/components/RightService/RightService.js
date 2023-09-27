import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  wrapper: {
    minHeight: 150,
    height: "min-content",
    padding: 20,
    boxShadow: "1px 1px 19px rgba(0,0,0,0.2)",
    borderRadius: 6,
    margin: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  subtext: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    fontWeight: 700,
    marginTop: 10,
  },
  box: {
    paddingBottom: 20,
    borderBottom: "1px solid black",
    marginBottom: 20,
  },
}));
const RightService = () => {
  const classes = useStyles();
  return (
    <Box padding={2} >
      <Box
        className={classes.box}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" className={classes.title}>
          City
        </Typography>
        <Typography variant="h4" className={classes.subtext}>
          dubai
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography variant="h4" className={classes.title}>
          Service Details
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h4" className={classes.subtext}>
              home type
            </Typography>
            <Typography variant="h4" className={classes.subtext}>
              bedrooms of aparteman
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" className={classes.subtext}>
              aparteman
            </Typography>
            <Typography variant="h4" className={classes.subtext}>
              2BR(AED 99)
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.box}>
        <Typography variant="h4" className={classes.title}>
          Date a time
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h4" className={classes.subtext}>
              date
            </Typography>
            <Typography variant="h4" className={classes.subtext}>
              time
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" className={classes.subtext}>
              sat,jul,28
            </Typography>
            <Typography variant="h4" className={classes.subtext}>
              16:00
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.box}>
        <Typography variant="h4" className={classes.title}>
          Address
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h4" className={classes.subtext}>
              1824 Tamani Arts Offices Tower, Businessbay
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.box}>
        <Typography variant="h4" className={classes.title}>
          Price Detail
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h4" className={classes.subtext}>
              price
            </Typography>
            <Typography variant="h4" className={classes.subtext}>
              vat
            </Typography>
            <Typography variant="h4" className={classes.subtext}>
              total
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" className={classes.subtext}>
              AED 760.95
            </Typography>
            <Typography variant="h4" className={classes.subtext}>
              AED 38.05
            </Typography>
            <Typography
              style={{ color: "#f44336" }}
              variant="h4"
              className={classes.subtext}
            >
              AED 799.00
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightService;
