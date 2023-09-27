import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import { I18nProvider, LOCALES } from "../i18n";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { ChangeLanguage } from "../Redux/Actions/Lang";
const Language = [
  {
    id: 0,
    name: "English",
    value: LOCALES.ENGLISH,
  },
  {
    id: 1,
    name: "Russian",
    value: LOCALES.RUSSION,
  },
  {
    id: 2,
    name: "فارسی",
    value: LOCALES.PERSIAN,
  },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    border: "2px solid #f44336",
    width: "50%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  box: {
    display: "flex",
    justifyContent: "center",
  },
  activelang: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "15px 30px",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  langbutton: {
    padding: "15px 30px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid transparent",
    transition: "0.3s",
    "&:hover": {
      transition: "0.3s",
      border: "1px solid #f44336",
    },
  },
  searchfield: {
    margin: "0 0 20px 0",
    height: 50,
  },
  "@global": {
    ".MuiGrid-spacing-xs-3": {
      [theme.breakpoints.down(1000)]: {
        margin: 0,
        width: "100%",
      },
    },
  },
  langtitle: {
    textDecoration: "underline",
    fontWeight: 700,
    fontSize: 17,
  },
  language: {
    fontSize: 17,
    margin: "15px 0",
  },
  close: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [keyword, setkeyword] = useState("");
  const Lang = useSelector((state) => state.Lang);
  const dispatch = useDispatch();

  const changeLang = (language) => {
    dispatch(ChangeLanguage(language));
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSearch = (e) => {
    setkeyword(e.target.value);
  };
  const re = new RegExp(keyword, "i");
  const filtered = Language.filter((entry) =>
    Object.values(entry).some((val) => typeof val === "string" && val.match(re))
  );
  return (
    <I18nProvider locale={Lang.Lang}>
      <div style={{ direction: Lang.Lang === LOCALES.PERSIAN ? "rtl" : "ltr" }}>
        <Navbar
          opening={open}
          close={handleClose}
          open={handleOpen}
          modal={
            <Box className={classes.paper}>
              <IconButton className={classes.close} onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <Typography className={classes.langtitle}>
                Language and region :
              </Typography>
              <Typography className={classes.language}>{Lang.Lang}</Typography>
              <TextField
                fullWidth
                value={keyword}
                onChange={(e) => handleSearch(e)}
                variant="outlined"
                size="small"
                placeholder="Search"
                className={classes.searchfield}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container spacing={3}>
                {filtered.map((item) => (
                  <Grid key={item} className={classes.box} item md={4} xs={12}>
                    <Button
                      className={
                        Lang.Lang === item.value
                          ? classes.activelang
                          : classes.langbutton
                      }
                      onClick={() => changeLang(item.value)}
                    >
                      {item.name}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          }
        />
        <main>{props.children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default Layout;
