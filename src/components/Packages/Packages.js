import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
import Googlemap from "../Googlemap/Googlemap";
import ModalPopUp from "../Modal/Modal";
const listitem = {
  residential: [
    {
      id: 1,
      name: "cleaning of all carpet types with the use of chimical",
    },
    {
      id: 2,
      name: "choosing the right doors and windows for your Home",
    },
    {
      id: 3,
      name: "Cleaning of all carpet types with the use ofchimicals",
    },
  ],
  premium: [
    {
      id: 1,
      name: "cleaning of all carpet types with the use of chimical",
    },
    {
      id: 2,
      name: "choosing the right doors and windows for your Home",
    },
    {
      id: 3,
      name: "Cleaning of all carpet types with the use ofchimicals",
    },
    {
      id: 4,
      name: "choosing the right doors and windows for your Home",
    },
    {
      id: 5,
      name: "choosing the right doors and windows for your Home",
    },
  ],
  commerical: [
    {
      id: 1,
      name: "cleaning of all carpet types with the use of chimical",
    },
    {
      id: 2,
      name: "choosing the right doors and windows for your Home",
    },
    {
      id: 3,
      name: "Cleaning of all carpet types with the use ofchimicals",
    },
  ],
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  textheader: {
    textAlign: "end",
    width: "50%",
    color: "black",
    fontSize: 22,
    padding: 2,
  },
  redBox: {
    position: "absolute",
    top: 40,
    width: "60%",
    height: 100,
    backgroundColor: "#ff0000",
  },
  packages: {
    maxWidth: 1000,
    margin: "auto",
    display: "flex",
    position: "relative",
    top: -50,
  },
  media: {
    height: 150,
    width: "100%",
    objectFit: "cover",
  },
  items: {
    fontSize: 12,
    fontWeight: 400,
    color: "rgba(0,0,0,0.7)",
    marginLeft: -20,
    listStyle: "none",
  },
  listitem: {
    margin: "25px 10px",
    cursor: "pointer",
    fontSize: 11,
    textTransform: "capitalize",
    " &::before": {
      content: "'●  '",
      color: "red",
      fontSize: "15px",
      position: "relative",
      top: 7,
      fontWeight: "bold",
      width: "1em",
      marginLeft: "-1em",
      display: "inline-block",
    },
  },
  orderButton: {
    margin: 20,
    width: 180,
    height: 40,
    padding: 20,
    borderRight: 50,
    borderRadius: 50,
    textTransform: "capitalize",
    color: "white",
    fontWeight: 600,
    fontSize: 13,
  },
  card: {
    boxShadow: "5px 4px 2px rgba(0,0,0,0.2)",
    position: "relative",
    top: 0,
    transition: "0.5s",
    "&:hover": {
      top: "-20px !important",
      transition: "0.5s",
    },
    [theme.breakpoints.down(1050)]: {
      marginTop: 50,
      maxWidth: 600,
      margin: "50px",
    },
  },
  premium: {
    boxShadow: "5px 4px 2px rgba(0,0,0,0.2)",
    position: "relative",
    top: -50,
    transition: "0.5s",
    "&:hover": {
      top: "-80px !important",
      transition: "0.5s",
    },
    [theme.breakpoints.down(1050)]: {
      marginTop: 50,
      maxWidth: 600,
      margin: "50px",
    },
  },
  cards: {
    [theme.breakpoints.down(1050)]: {
      display: "flex",
      justifyContent: "center",
      margin:"auto"
    },
  },
  cardtitle: {
    position: "absolute",
    color: "white",
    top: 42,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  modalroot: {
    width: 750,
    height: 600,
    backgroundColor: "white",
    padding: 5,
    [theme.breakpoints.down(1000)]: {
      width: 600,
      height: 400,
    },
  },
  modalWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    border: "1px solid black",
    position: "relative",
  },
  continuelink: {
    position: "absolute",
    bottom: 10,
    margin: "auto",
    textDecoration: "none",
  },
  continue: {
    backgroundColor: "#f44336",
    color: "white",
    width: 600,
    "&:hover": {
      backgroundColor: "#f44336",
    },
    [theme.breakpoints.down(1000)]: {
      width: 200,
    },
  },
}));

const Packages = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Box style={{ display: "flex", height: 150, padding: 10 }}>
        <Typography variant="h4" className={classes.textheader}>
          {translate("pa")}
        </Typography>
        <Typography
          style={{
            paddingLeft: 5,
            fontSize: 22,
            height: "100%",
            backgroundColor: "black",
            color: "white",
            fontWeight: 700,
            width: "50%",
          }}
          variant="h4"
        >
          {translate("kages")}
        </Typography>
      </Box>
      <Box className={classes.redBox} />
      <Box className={classes.packages}>
        <Grid container spacing={3}>
          <Grid className={classes.cards} item sm={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <img
                  className={classes.media}
                  alt="card"
                  src="data:image/jpeg;base64,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"
                />
                <Box className={classes.cardtitle}>
                  <Typography variant="h5">
                    <b>$2.00</b>/m2
                  </Typography>
                  <Typography variant="subtitle2">
                    {translate("Residential")}
                  </Typography>
                </Box>
                <CardContent>
                  <ul className={classes.items}>
                    {listitem.residential.map((item) => (
                      <li key={item.id} className={classes.listitem}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  style={{ backgroundColor: "black" }}
                  className={classes.orderButton}
                  onClick={handleOpen}
                >
                  {translate("order")}
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.cards} item sm={12} md={4}>
            <Card className={classes.premium}>
              <CardActionArea>
                <img
                  className={classes.media}
                  alt="card"
                  src="https://besthqwallpapers.com/img/original/140722/balloon-icon-red-background-3d-symbols-balloon-creative-3d-art.jpg"
                />
                <Box className={classes.cardtitle}>
                  <Typography variant="h5">
                    <b>$4.00</b>/m2
                  </Typography>
                  <Typography variant="subtitle2">
                    {translate("premium")}
                  </Typography>
                </Box>
                <CardContent>
                  <ul className={classes.items}>
                    {listitem.premium.map((item) => (
                      <li key={item.id} className={classes.listitem}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  onClick={handleOpen}
                  style={{ backgroundColor: "#ff0000" }}
                  className={classes.orderButton}
                >
                  {translate("order")}
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.cards} item sm={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <img
                  className={classes.media}
                  alt="card"
                  src="data:image/jpeg;base64,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"
                />
                <Box className={classes.cardtitle}>
                  <Typography variant="h5">
                    <b>$3.00</b>/m2
                  </Typography>
                  <Typography variant="subtitle2">
                    {translate("cammerical")}
                  </Typography>
                </Box>
                <CardContent>
                  <ul className={classes.items}>
                    {listitem.residential.map((item) => (
                      <li key={item.id} className={classes.listitem}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  onClick={handleOpen}
                  style={{ backgroundColor: "black" }}
                  className={classes.orderButton}
                >
                  {translate("order")}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <ModalPopUp
        open={handleOpen}
        close={handleClose}
        opening={open}
        modal={
          <Box className={classes.modalroot}>
            <Box className={classes.modalWrapper}>
              <Googlemap height="100%" />
              <Link className={classes.continuelink} to="/serviceDetail">
                <Button className={classes.continue}>Continue</Button>
              </Link>
            </Box>
          </Box>
        }
      />
    </Box>
  );
};

export default Packages;
