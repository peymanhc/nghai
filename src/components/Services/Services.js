import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import translate from "../../i18n/translate";
import { Link } from "react-router-dom";
import ServImg1 from "../../images/services1.png";
import ServImg2 from "../../images/services2.png";
import ServImg3 from "../../images/services3.png";
import ServImg4 from "../../images/services4.png";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  textheader: {
    backgroundColor: "#ff0000",
    textAlign: "end",
    width: "50%",
    color: "white",
    padding: 2,
  },
  title: {
    top: -25,
    width: "100%",
    color: "white",
    margin: "auto",
    position: "relative",
    textAlign: "center",
    backgroundColor: "#ff0000",
  },
  addicon: {
    backgroundColor: "black",
    color: "white",
    width: 40,
    height: 40,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    "&:hover": {
      backgroundColor: "#ff0000",
    },
  },
  cards: {
    maxWidth: 1400,
    margin: "auto",
    padding: 20,
  },
  card: {
    border: "1px solid transparent",
    boxShadow: "1px 12px 32px 1px rgba(0,0,0,0.2)",
    "&:hover": {
      border: "1px solid red",
      "& $addicon": {
        backgroundColor: "#ff0000",
      },
    },
  },
  serviceText: {
    textAlign: "center",
    margin: "40px 0",
  },
  viewMore: {
    backgroundColor: "#ff0000",
    color: "white",
    fontWeight: 600,
    boxShadow: "1px 4px 9px 1px rgba(0,0,0,0.4)",
    width: 350,
    height: 60,
    padding: 20,
    borderRadius: 10,
    margin: "50px auto",
    display: "flex",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  "@global": {
    ".MuiCardActions-root": {
      padding: "0",
    },
    ".MuiCardContent-root": {
      padding: "10px",
    },
  },
}));
const Services = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box style={{ display: "flex" }}>
        <Typography variant="h4" className={classes.textheader}>
          {translate("MaintenanceS")}
        </Typography>
        <Typography
          style={{
            borderBottom: "1px solid black",
            margin: "0 5px",
            width: "50%",
          }}
          variant="h4"
        >
          {translate("ervice")}
        </Typography>
      </Box>
      <Typography className={classes.serviceText} variant="subtitle1">
        {translate("SelectService")}
      </Typography>
      <Box width="100%">
        <Grid className={classes.cards} container spacing={3}>
          {List.map((item, i) => (
            <Grid key={i} item sm={6} lg={3}>
              <Link style={{ textDecoration: "none" }} to="/DeepCleaning">
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="180"
                      image={item.img}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "end" }}>
                    <IconButton className={classes.addicon}>
                      <AddIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Link style={{ textDecoration: "none" }} to="/Services">
        <Button className={classes.viewMore}>{translate("ViewMore")}</Button>
      </Link>
    </Box>
  );
};

const List = [
  {
    id: 0,
    img: ServImg1,
  },
  {
    id: 1,
    img: ServImg2,
  },
  {
    id: 2,
    img: ServImg3,
  },
  {
    id: 2,
    img: ServImg4,
  },
];

export default Services;
