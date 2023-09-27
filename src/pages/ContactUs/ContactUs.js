import React, { useEffect } from "react";
import header from "../../images/O-1.png";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Tels from "../../components/Tels/Tels";
import Googlemap from "../../components/Googlemap/Googlemap";
const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: 600,
    objectFit: "cover",
  },
  titleBox: {
    margin: "50px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  title1: {
    width: "55%",
    marginRight: 5,
    height: 45,
    fontSize: 25,
    fontWeight: 800,
    backgroundColor: "#f20023",
    alignItems: "center",
    justifyContent: "end",
    display: "flex",
    color: "white",
  },
  title2: {
    width: "100%",
    height: 50,
    fontSize: 25,
    fontWeight: 600,
    alignItems: "center",
    justifyContent: "start",
    display: "flex",
    color: "black",
  },
  messageusbox: {
    width: "100%",
    minHeight: 100,
    margin: "50px 0",

    backgroundColor: "#e5e5e5",
    color: "black",
    textAlign: "center",
    float: "inline-end",
  },
  message: {
    padding: 20,
  },
  messagehead: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 700,
    width: "100%",
    "&:before": {
      content: "''",
      display: "block",
      width: "50%",
      position: "absolute",
      marginTop: 30,
      borderBottom: "2px solid #b81e1e",
    },
  },
  subtext: {
    marginTop: 30,
    maxWidth: 500,
    fontSize: 11,
    color: "rgba(0,0,0,0.7)",
    display: "block",
    margin: "auto",
  },
  textboxes: {
    maxWidth: 900,
    margin: "auto",
  },
  textarea: {
    width: "100%",
    height: "200px !important",
  },
  sendbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  send: {
    margin: "20px 0",
    padding: "10px 30px",
    backgroundColor: "#f00000",
    borderRadius: 10,
    boxShadow: "1px 1px 1px 2px rgba(0,0,0,0.2)",
    color: "white",
    fontSize: 13,
    width: 200,
    height: 55,
    textTransform: "lowercase",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  headimg: {
    position: "relative",
    background: `url(${header}) center / cover`,
    width: "100%",
    height: 600,
    backgroundSize: "cover",
  },
  headbox: {
    width: "100%",
    height: 600,
    background: "rgba(0,0,0,0.4)",
  },
  text: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 700,
    padding: "0px 150px",
    color: "white",
    [theme.breakpoints.down(700)]: {
      padding: "0px 20px",
    },
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 100,
  },
  red: {
    backgroundColor: "#f44336",
    height: 40,
    fontSize: 30,
    fontWeight: 700,
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
}));

const ContactUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.headimg}>
        <Box className={classes.headbox}>
          <Box className={classes.text}>
            <Box className={classes.title}>
              Contac
              <Typography className={classes.red}>
                t <b style={{ color: "black", margin: "0 10px" }}>Us</b>
              </Typography>
            </Box>
            <Typography className={classes.subtitle}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.titleBox}>
        <Box className={classes.title2}>
          <Typography className={classes.title1}>stay in touch </Typography>
          with us
        </Box>
      </Box>
      <Tels />
      <Box className={classes.messageusbox}>
        <Box className={classes.message}>
          <Typography className={classes.messagehead} variant="h4">
            Message Us
          </Typography>
          <Typography className={classes.subtext} variant="overline">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in
          </Typography>
        </Box>
      </Box>
      <Box className={classes.textboxes}>
        <Box padding={1}>
          <TextField
            id="outlined-full-width"
            style={{ margin: "8px 0" }}
            label="Name"
            placeholder="Name"
            fullWidth
            margin="none"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            style={{ margin: "8px 0" }}
            label="Last Name"
            placeholder="Last Name"
            fullWidth
            margin="none"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            style={{ margin: "8px 0" }}
            label="Email"
            placeholder="Email"
            helperText="Your Currect Email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="Comment"
            style={{ margin: "8px 0" }}
            placeholder="Send us your Comment"
            multiline
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            rows={5}
            variant="outlined"
          />
          <Box className={classes.sendbox}>
            <Button className={classes.send}>send Email</Button>
          </Box>
        </Box>
      </Box>
      <Googlemap height={500} />
    </Box>
  );
};

export default ContactUs;
