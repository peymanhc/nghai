import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import translate from "../../i18n/translate";
import { injectIntl } from "react-intl";
const useStyles = makeStyles((theme) => ({
  form: {
    width: 600,
    backgroundColor: "white",
    padding: "20px 20px",
    position: "relative",
    [theme.breakpoints.down(1050)]: {
      width: "auto",
    },
  },
  input: {
    width: "100%",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: 5,
    height: 30,
    margin: "50px 0",
    fontSize: 12,
    padding: 20,
    [theme.breakpoints.down(1050)]: {
      margin: "20px 0",
    },
  },
  submit: {
    width: "100%",
    backgroundColor: "#f44336",
    color: "white",
    padding: "20px 0",
    fontWeight: "bold",
    fontSize: 10,
    "&:hover": {
      backgroundColor: "#ff0000",
    },
  },
  formControl: {
    width: "100%",
    fontSize: 12,
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
const RegisterForm = ({ intl }) => {
  const classes = useStyles();
  const [selector, setselector] = React.useState("");
  const handleChange = (event) => {
    setselector(event.target.value);
  };
  return (
    <Box className={classes.form}>
      <form>
        <InputBase
          className={classes.input}
          type="text"
          placeholder={intl.formatMessage({ id: "WhatsAppNumber" })}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            {translate("Services")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selector}
            onChange={handleChange}
            label="selector"
          >
            <MenuItem value="">
              <em>Nothing</em>
            </MenuItem>
            <MenuItem value={"test"}>test</MenuItem>
            <MenuItem value={"asd"}>test 2</MenuItem>
            <MenuItem value={"30"}>test 3</MenuItem>
          </Select>
        </FormControl>
        <InputBase
          className={classes.input}
          type="text"
          placeholder={intl.formatMessage({ id: "Name" })}
        />
        <Button className={classes.submit}>{translate("Send")}</Button>
      </form>
    </Box>
  );
};

export default injectIntl(RegisterForm);
