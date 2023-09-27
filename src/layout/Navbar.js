import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import translate from "../i18n/translate";
import Logo from "../images/Logo.png";
import LanguageIcon from "@material-ui/icons/Language";
import ModalPopUp from "../components/Modal/Modal";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";
import InfoIcon from "@material-ui/icons/Info";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BookIcon from "@material-ui/icons/Book";
import ContactsIcon from "@material-ui/icons/Contacts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { FetchProfile } from "../Redux/Actions/Profile";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { doLogOut } from "../Redux/Actions/Login";
const navbarItems = [
  {
    id: 1,
    name: translate("Home"),
    icon: <HomeIcon />,
    link: "/",
  },
  {
    id: 2,
    name: translate("Features"),
    icon: <FeaturedVideoIcon />,
    link: "/Features",
  },
  {
    id: 3,
    name: translate("AboutUS"),
    icon: <InfoIcon />,
    link: "/aboutUs",
  },
  {
    id: 4,
    name: translate("Services"),
    icon: <WorkOutlineIcon />,
    link: "/Services",
  },
  {
    id: 5,
    name: translate("Blog"),
    icon: <BookIcon />,
    link: "/Blog",
  },
  {
    id: 6,
    name: translate("Contacts"),
    icon: <ContactsIcon />,
    link: "/ContactUs",
  },
  {
    id: 6,
    name: translate("Login"),
    icon: <ExitToAppIcon />,
    link: "/Login",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 99,
    position: "sticky",
    top: 0,
  },
  wrapper: {
    height: 100,
    backgroundColor: "#fafafa",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  links: {
    display: "flex",
    width: "100%",
    fontFamily: "Arial",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    margin: 10,
    padding: 10,
    color: "rgba(0,0,0,0.8)",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: 600,
  },
  activeLink: {
    margin: 10,
    padding: 10,
    color: "rgba(0,0,0,0.8)",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: 600,
    borderBottom: "2px solid red",
  },
  divider: {
    width: "100%",
    height: 5,
    backgroundColor: "#f44336",
  },
  call: {
    border: "1px solid",
    fontWeight: 600,
    fontSize: 11,
    justifyContent: "space-between",
    padding: "12px 16px",
    borderRadius: 40,
    width: 250,
    [theme.breakpoints.down(1050)]: {
      display: "none",
    },
  },
  "@global": {
    ".MuiToolbar-regular": {
      minHeight: 100,
    },
    ".MuiDrawer-paper": {
      width: 250,
    },
  },
  lang: {
    color: "black",
    cursor: "pointer",
  },
  menu: {
    display: "none",
  },
  [theme.breakpoints.down(1050)]: {
    links: { display: "none" },
    call: { display: "none" },
    nav: { display: "flex", justifyContent: "space-between" },
    menu: { display: "block" },
  },
  profile: {
    display: "flex",
    padding: 10,
    minWidth: 250,
    justifyContent: "space-between",
    border: "1px solid black",
    borderRadius: 30,
  },
  profileicon: {
    fontSize: 35,
  },
  dropdownItem: {
    display: "flex",
    width: 200,
    height: 50,
    justifyContent: "space-between",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const Profile = useSelector((state) => state.Profile);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    dispatch(FetchProfile());
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [menu, setMenu] = React.useState(null);

  const handleClickMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };
  const HandleLogOut = () => {
    dispatch(doLogOut());
  };

  return (
    <div className={classes.root}>
      <Box className={classes.divider} />
      <AppBar className={classes.wrapper} position="static">
        <Toolbar className={classes.nav}>
          <Link to="/" variant="h6" className={classes.title}>
            <img width={100} alt="ngh" src={Logo} />
          </Link>
          <Box>
            <IconButton type="button" onClick={props.open}>
              <LanguageIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
          <Box className={classes.menu}>
            <IconButton type="button" onClick={handleDrawerOpen}>
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
          <Box className={classes.links}>
            <nav>
              {navbarItems.map((item) => (
                <NavLink
                  exact
                  key={item.id}
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </Box>
          {Profile?.data === null ? (
            <Button className={classes.call}>
              <PhoneInTalkIcon />
              +971 4 5847475
            </Button>
          ) : (
            <>
              {" "}
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                className={classes.profile}
                onClick={handleClickMenu}
              >
                <AccountCircleIcon className={classes.profileicon} />
                <Box display="flex" flexDirection="column" textAlign="left">
                  <Typography style={{ fontWeight: 700, fontSize: 13 }}>
                    {Profile?.data?.data[0]?.name}
                  </Typography>
                </Box>
                <ArrowDropDownIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={menu}
                keepMounted
                open={Boolean(menu)}
                onClose={handleCloseMenu}
              >
                <a target="_blank" style={{color:"black", textDecoration:"none"}} href="https://ngh.ae/superadmin/dashboard">
                  <MenuItem
                    className={classes.dropdownItem}
                    onClick={handleCloseMenu}
                  >
                    <SupervisorAccountIcon />
                    Profile
                  </MenuItem>
                </a>
                <MenuItem
                  className={classes.dropdownItem}
                  onClick={HandleLogOut}
                >
                  <ExitToAppIcon />
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
        <Box>
          <ModalPopUp
            open={props.open}
            close={props.close}
            opening={props.opening}
            modal={props.modal}
          />
          <DrawerMenu open={open} close={handleDrawerClose} />
        </Box>
      </AppBar>
    </div>
  );
}
const DrawerMenu = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box className={classes.drawerHeader}>
        <IconButton onClick={props.close}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navbarItems.map((item, i) => (
          <Link
            onClick={props.close}
            style={{ textDecoration: "none", color: "#757575" }}
            to={item.link}
          >
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};
export default Navbar;
