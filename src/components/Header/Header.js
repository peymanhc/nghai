import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import RegisterForm from "../Registerform/RegisterForm";
import Bgimg from '../../images/homehead.png'
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 700,
    position: "relative",
    background:
      `url(${Bgimg}) no-repeat center / cover`,
    backgroundSize: "cover",
    display: "flex",
  },
  wrapper: {
    padding: 100,
    [theme.breakpoints.down(1050)]: {
      margin: "auto",
      padding: 10,
    },
  },
  "@global": {
    ".MuiInputBase-root": {
      height: 70,
    },
    ".MuiFormLabel-root": {
      display: "flex",
      alignItem: "center",
      fontSize: 12,
      padding: 10,
    },
  },
}));
const Header = ({ intl }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default injectIntl(Header);
