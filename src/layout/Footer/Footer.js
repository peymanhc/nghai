import React from "react";
import Grid from "@material-ui/core/Grid";
import SocialFooter from "./SocialFooter";
import { Box, makeStyles, Typography } from "@material-ui/core";
import translate from "../../i18n/translate";
const listitem = {
  quickitem: [
    {
      id: 1,
      name: translate("Home"),
      link: "/",
    },
    {
      id: 2,
      name: translate("Features"),
      link: "/Features",
    },
    {
      id: 3,
      name: translate("AboutUS"),
      link: "/aboutUs",
    },
    {
      id: 4,
      name: translate("Blog"),
      link: "/Blog",
    },
    {
      id: 5,
      name: translate("Contacts"),
      link: "/Contactus",
    },
  ],
  services: [
    {
      id: 1,
      name: translate("Residential"),
    },
    {
      id: 2,
      name: translate("cammerical"),
    },
    {
      id: 3,
      name: translate("premium"),
    },
    {
      id: 4,
      name: translate("CleaningFAQ"),
    },
    {
      id: 5,
      name: translate("OurProcess"),
    },
  ],
  Contact: [
    {
      id: 1,
      name: translate("address"),
    },
    {
      id: 2,
      name: `phone: +971 5 56664656`,
    },
  ],
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95%",
    marginTop: 100,
    margin: "20px auto",
  },
  wrapper: {
    [theme.breakpoints.down(1200)]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  subtext: {
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
  },
  footerItems: {
    fontSize: 12,
    fontWeight: 400,
    color: "rgba(0,0,0,0.7)",
    margin: "0 -20px",
    listStyle: "none",
  },
  listitem: {
    margin: "10px -35px",
    cursor: "pointer",
    width:"60%",
    textTransform: "capitalize",
    display: "flex",
    " &::before": {
      content: "'●'",
      color: "red",
      fontSize: "15px",
      fontWeight: "bold",
      width: "1em",
      margin: "0 1em",
      display: "inline-block",
    },
  },
  footerhead: {
    [theme.breakpoints.down(1200)]: {
      textAlign: "center",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SocialFooter />
      <Box width="100%">
        <Grid className={classes.wrapper} container spacing={3}>
          <Grid className={classes.footerhead} item sm={12} lg={3}>
            <Typography>Peymanhc</Typography>
            <small className={classes.subtext}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content
            </small>
          </Grid>
          <Grid item xs={12} sm={3} lg={1}>
            <Typography variant="subtitle2">Quick Links</Typography>
            <ul className={classes.footerItems}>
              {listitem.quickitem.map((item) => (
                <li key={item.id} className={classes.listitem}>
                  {item.name}
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={3} lg={1}>
            <Typography variant="subtitle2">Services</Typography>
            <ul className={classes.footerItems}>
              {listitem.services.map((item) => (
                <li key={item.id} className={classes.listitem}>
                  {item.name}
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={3} lg={1}>
            <Typography variant="subtitle2">Contact Info</Typography>
            <ul className={classes.footerItems}>
              {listitem.Contact.map((item) => (
                <li key={item.id} className={classes.listitem}>
                  {item.name}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
