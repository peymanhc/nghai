import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import React from "react";

const icons = [
  {
    id: 1,
    icon: <TelegramIcon />,
  },
  {
    id: 2,
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    icon: <WhatsAppIcon />,
  },
  {
    id: 4,
    icon: <TwitterIcon />,
  },
  {
    id: 5,
    icon: <YouTubeIcon />,
  },
];

const useStyles = makeStyles((theme) => ({
  socials: {
    minHeight: 20,
    borderLeftWidth: "1px",
    borderWidth: "2px",
    border: "1px solid #ff0000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(900)]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  platform: {
    width: 200,
    display: "flex",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#ff0000",
    flexDirection: "column",
    [theme.breakpoints.down(900)]: {
      width: "100%",
    },
  },
  medias: {
    padding: "30px 20px",
    display: "flex",
    alignItems: "center",
  },
  MediaButton: {
    border: "2px solid",
    color: "black",
    padding: 5,
    margin: 5,
    [theme.breakpoints.down(900)]: {
      padding: 2,
      border: "1px solid",
    },
  },
  platformicon: {
    display: "flex",
    margin: "10px 0",
    alignItems: "center",
  },
  icon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  "@global":{
    ".MuiSvgIcon-root":{
      fontSize:25,
      [theme.breakpoints.down(900)]: {
        fontSize:18,
      }
    }
  }
}));

const SocialFooter = () => {
  const classes = useStyles();
  return (
    <div style={{ margin: "30px 0" }}>
      <Box className={classes.socials}>
        <Box className={classes.medias}>
          <Typography variant="subtitle2">
            Follow us on Socials Media
          </Typography>
          <Box style={{ marginLeft: 30 }}>
            {icons.map((item) => (
              <IconButton className={classes.MediaButton} key={item.id}>
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        <Box className={classes.platform}>
          <Box padding={2} >
            <Box className={classes.platformicon}>
              <AppleIcon className={classes.icon} />{" "}
              <Typography variant="subtitle2">Download Apple</Typography>
            </Box>
            <Box className={classes.platformicon}>
              <AndroidIcon className={classes.icon} />
              <Typography variant="subtitle2">Download Android</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SocialFooter;
