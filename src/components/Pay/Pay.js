import {
  Box,
  Button,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  wrapper: {
    padding: "20px 20px 0px 20px",
  },
  subtitle: {
    fontSize: 12,
    margin: "0 30px",
    color: "rgba(0,0,0,0.6)",
  },
  cardsubtitle: {
    fontSize: 13,
    color: "rgba(0,0,0,0.6)",
  },
  paymentcard: {
    margin: "50px 0",
    width: "100%",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: 5,
  },
  textfield: {
    border: "none",
  },
  fieldInput: {
    border: "none",
    borderRadius: 10,
    color: "rgba(0,0,0,0.7)",
    fontSize: 15,
    height: 50,
    padding: 0,
  },
  sendbox: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  send: {
    padding: "5px 30px",
    backgroundColor: "#f00000",
    borderRadius: 10,
    fontSize: 14,
    textTransform: "lowercase",
    color: "white",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  "@global": {
    ".MuiTypography-body1": {
      fontSize: 20,
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));
const Pay = () => {
  const classes = useStyles();
  const [value, setValue] = useState("pay1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box className={classes.root}>
      <FormControl className={classes.root} component="fieldset">
        <Box className={classes.wrapper}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              className={classes.label}
              value="pay1"
              control={<Radio />}
              label="pay with credite /debit card"
            />
            <Box>
              <Typography className={classes.subtitle} variant="subtitle1">
                AED when you pay online
              </Typography>
              <Typography className={classes.subtitle} variant="subtitle1">
                learn more
              </Typography>
            </Box>
            <Box className={classes.paymentcard}>
              <Box className={classes.wrapper}>
                <Typography className={classes.cardsubtitle} variant="body2">
                  card number
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="0000-0000-0000-0000"
                  multiline
                  size="small"
                  InputProps={{ className: classes.fieldInput }}
                  className={classes.textfield}
                  fullWidth
                  margin="dense"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Box>
              <Box display="flex" justifyContent="space-around">
                <Box width="100%">
                  <Box className={classes.wrapper}>
                    <Typography
                      className={classes.cardsubtitle}
                      variant="body2"
                    >
                      expiry date
                    </Typography>
                    <TextField
                      id="date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={classes.textfield}
                      InputProps={{ className: classes.fieldInput }}
                      fullWidth
                      margin="dense"
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </Box>
                <Box width="100%">
                  <Box className={classes.wrapper}>
                    <Typography
                      className={classes.cardsubtitle}
                      variant="body2"
                    >
                      security card
                    </Typography>
                    <TextField
                      id="outlined-multiline-static"
                      placeholder="1234"
                      multiline
                      size="small"
                      InputProps={{ className: classes.fieldInput }}
                      className={classes.textfield}
                      fullWidth
                      margin="dense"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <FormControlLabel
              value="pay2"
              control={<Radio />}
              label="pay with Cash(+6 AED)"
            />
          </RadioGroup>
        </Box>
      </FormControl>
      <Box className={classes.sendbox}>
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <Button className={classes.send}>next</Button>
      </Box>
    </Box>
  );
};

export default Pay;
