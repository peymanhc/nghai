import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import aak from "../../images/OurPics/aak.png";
import am from "../../images/OurPics/am.png";
import aum from "../../images/OurPics/aum.png";
import mac from "../../images/OurPics/mac.png";
import mm from "../../images/OurPics/mm.png";
import ng from "../../images/OurPics/ng.png";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px auto",
    maxWidth: 1300,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
    position: "relative",
  },
  texttitle: {
    fontSize: 15,
    color: "rgba(0,0,0,0.6)",
    maxWidth: 700,
    margin: "20px auto",
    textAlign: "center",
    position: "relative",
  },
  profilebox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileimg: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    objectFit: "cover",
    [theme.breakpoints.down(600)]: {
      width: 100,
      height: 100,
    },
  },
  name: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 700,
    [theme.breakpoints.down(600)]: {
      fontSize: 12,
    },
  },
  description: {
    textAlign: "center",
    fontSize: 13,
    color: "rgba(0,0,0,0.8)",
    [theme.breakpoints.down(600)]: {
      fontSize: 10,
    },
  },
}));
const OurTeam = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        meet our teem
      </Typography>
      <Typography variant="subtitle2" className={classes.texttitle}>
        N&Ghaferi Technical Services L.L.C
      </Typography>
      <Grid style={{ marginTop: 20 }} container spacing={6}>
        {Team.map((item) => (
          <Grid key={item.id} item xs={6} md={4}>
            <Box className={classes.profilebox}>
              <img
                className={classes.profileimg}
                alt={item.image}
                src={item.image}
              />
              <Box style={{ marginTop: 10 }}>
                <Typography variant="h6" className={classes.name}>
                  {item.name}
                </Typography>
                <Typography variant="h6" className={classes.description}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
const Team = [
  {
    id: 0,
    name: "Narges Ghaferi",
    description: "CEO/Managing Director",
    image: ng,
  },
  {
    id: 1,
    name: "Obaid Ali Rashed Ali Alkaabi",
    description: "CEO/Managing Director",
    image: aak,
  },
  {
    id: 2,
    name: "Maricel Maloles",
    description: "Operation Manager",
    image: mm,
  },
  {
    id: 3,
    name: "Marie Ann Ching",
    description: "Admin",
    image: mac,
  },
  {
    id: 4,
    name: "Arslan Masih",
    description: "Painter",
    image: am,
  },
  {
    id: 5,
    name: "Atta Ullah Mukhtar",
    description: "AC Technician",
    image: aum,
  },
];

export default OurTeam;
