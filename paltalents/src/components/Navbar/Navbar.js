import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { GoSignOut } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import "./AccountMenu.css";
import Avatar from "react-avatar";
import { BsCalendar } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { useContext } from "react";
import {
  browserName,
  browserVersion,
  isChrome,
  isEdge,
  isIOS,
  isMobileSafari,
  isSafari,
} from "react-device-detect";

import NavDrawer from "./NavDrawer";

const navbarstyle = makeStyles((props) => ({
  navbar: {
    width: "100%",
    background: "#000000",
    color: "white",
    position: props.navPosStyle,
  },
}));
const iconbuttonstyle = makeStyles((theme) => ({
  tabs: {
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    marginRight: "1.5vw",
    marginLeft: "1.5vw",
    width: "5vw",
    fontSize: 15,
    "&:hover": {
      background: "grey",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.5vw",
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2vw",
      fontSize: 13,
    },
  },
  home: {
    textTransform: "none",
    marginRight: "1.5vw",
    marginLeft: "2vw",
    height: "5vh",
    fontSize: 15,
    width: "5vw",
    fontWeight: 500,
    color: "white",
    "&:hover": {
      background: "grey",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.5vw",
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1.0vw",
      fontSize: 13,
    },
  },
  Palestine: {
    textTransform: "none",
    marginRight: "1.75vw",
    marginLeft: "1.25vw",
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    width: "20vw",
    height: "6vh",
    fontStyle: "italic",
    fontFamily: "Sanserif",
    boxShadow: 1,
    "&:click": {
      backgroundColor: "rgb(128,128,128)",
    },
    "&:hover": {
      backgroundColor: "grey",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
      width: "20vw",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "1.25vw",
      fontSize: 14,
      width: "18vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      marginRight: "3vw",
      width: "30vw",
    },
  },
  signupstyle: {
    textTransform: "none",
    marginLeft: "44vw",
    marginRight: "0.5vw",
    color: "white",
    fontSize: 13,
    fontWeight: 500,
    width: "9vw",
    height: "5vh",
    "&:hover": {
      background: "grey",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "1.5vw",
      marginLeft: "31.75vw",
      width: "9vw",
      fontSize: 13,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "1.5vw",
      marginLeft: "14vw",
      width: "9vw",
      fontSize: 12,
    },
  },
  loginstyle: {
    textTransform: "none",
    margin: " 1vh  1.25vw",
    color: "white",
    height: "5vh",
    fontSize: 13,
    fontweight: 500,
    "&:hover": {
      background: "rgba(255, 26, 150, 1)",
    },
    background: "rgba(255, 26, 117, 1)",
    [theme.breakpoints.down("md")]: {
      marginRight: "1vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      marginRight: "2vw",
    },
  },
  Account: {
    marginLeft: "55vw",
    textTransform: "none",
    borderRadius: "20px",
    color: "white",
    fontweight: 500,
    width: "2.5vw",
    fontSize: 22,
    borderColor: "black",
    background: "rgba(128, 128, 128, 0)",
    [theme.breakpoints.down("md")]: {
      marginRight: "1vw",
      fontSize: 20,
      marginLeft: "45vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "3vw",
      fontSize: 20,
      marginRight: "2vw",
      marginLeft: "22vw",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "37vw",
      width: "3vw",
      fontSize: 20,
      marginRight: 0,
    },
  },
}));

function Navbar(props) {
  Navbar.propTypes = {
    isAuth: PropTypes.bool,
  };
  const context = useContext(props.isAuth);
  console.log(context);
  const theme = useTheme();
  var navPosStyle = "";
  if (isIOS || isSafari || isMobileSafari) {
    navPosStyle = "-webkit-sticky";
    console.log(`${browserName} ${browserVersion}`);
  } else if (isChrome || isEdge) {
    navPosStyle = "sticky";
  } else {
    navPosStyle = "fixed";
  }
  const navstyle = navbarstyle(navPosStyle);
  const iconbtnstyle = iconbuttonstyle(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="container">
      <AppBar id="navbar" className={navstyle.navbar}>
        <Toolbar>
          {isMobile ? (
            <>
              <NavDrawer
                isAuth={props.isAuth}
                className={iconbtnstyle.navDrawer}
              />

              <Button
                id="Palestine-button-xs"
                className={iconbtnstyle.Palestine}
                component={Link}
                to={"/"}
              >
                Palestine Talent
              </Button>
            </>
          ) : isSmall ? (
            <>
              <Button
                id="Palestine-button-sm"
                className={iconbtnstyle.Palestine}
                component={Link}
                to={"/"}
              >
                Palestine Talent
              </Button>
              <Button
                id="home-button-sm"
                className={iconbtnstyle.home}
                component={Link}
                to={"/Home"}
              >
                Home
              </Button>
              <Button
                id="Talents-button-sm"
                className={iconbtnstyle.tabs}
                component={Link}
                to={"/Talents"}
              >
                Talents
              </Button>
              <Button
                id="Events-button-sm"
                className={iconbtnstyle.tabs}
                component={Link}
                to={"/Events"}
              >
                Events
              </Button>
              {props.isAuth ? (
                <></>
              ) : (
                <>
                  <Button
                    id="signup-button-sm"
                    className={iconbtnstyle.signupstyle}
                    component={Link}
                    to={"/Signup"}
                  >
                    Sign up
                  </Button>
                  <Button
                    id="login-button-sm"
                    className={iconbtnstyle.loginstyle}
                    component={Link}
                    to={"../login"}
                  >
                    Login
                  </Button>
                </>
              )}
            </>
          ) : isMedium ? (
            <>
              <Button
                id="Palestine-button-md"
                className={iconbtnstyle.Palestine}
                component={Link}
                to={"/"}
              >
                Palestine Talent
              </Button>
              <Button
                id="home-button-md"
                className={iconbtnstyle.home}
                component={Link}
                to={"/Home"}
              >
                Home
              </Button>
              <Button
                id="Talents-button-md"
                className={iconbtnstyle.tabs}
                component={Link}
                to={"/Talents"}
              >
                Talents
              </Button>
              <Button
                id="Events-button-md"
                className={iconbtnstyle.tabs}
                component={Link}
                to={"/Events"}
              >
                Events
              </Button>
              {props.isAuth ? (
                <></>
              ) : (
                <>
                  <Button
                    id="signup-button-md"
                    className={iconbtnstyle.signupstyle}
                    component={Link}
                    to={"/Signup"}
                  >
                    Sign up
                  </Button>
                  <Button
                    id="login-button-md"
                    className={iconbtnstyle.loginstyle}
                    component={Link}
                    to={"../login"}
                  >
                    Login
                  </Button>
                </>
              )}
            </>
          ) : (
            <>
              <Button
                id="Palestine-button-lg"
                className={iconbtnstyle.Palestine}
                component={Link}
                to={"/"}
              >
                Palestine Talent
              </Button>
              <Button
                id="home-button-lg"
                className={iconbtnstyle.home}
                component={Link}
                to={"/Home"}
              >
                Home
              </Button>
              <Button
                id="Talents-button-lg"
                className={iconbtnstyle.tabs}
                component={Link}
                to={"/Talents"}
              >
                Talents
              </Button>
              <Button
                id="Events-button-lg"
                className={iconbtnstyle.tabs}
                component={Link}
                to={"/Events"}
              >
                Events
              </Button>
              {props.isAuth ? (
                <></>
              ) : (
                <>
                  <Button
                    id="signup-button-lg"
                    className={iconbtnstyle.signupstyle}
                    component={Link}
                    to={"/Signup"}
                  >
                    Sign up
                  </Button>
                  <Button
                    id="login-button-lg"
                    className={iconbtnstyle.loginstyle}
                    component={Link}
                    to={"../login"}
                  >
                    Login
                  </Button>
                </>
              )}
            </>
          )}
          {props.isAuth ? (
            <Menu
              className="Account-Menu"
              menuButton={
                <MenuButton id="Account-Menu" className={iconbtnstyle.Account}>
                  <Avatar
                    className="Avatar-Button"
                    name=" "
                    src="https://graph.facebook.com/100008343750912/picture?width=1024&height=1024"
                    size="38"
                    round="20px"
                  />
                </MenuButton>
              }
            >
              <MenuItem id="my-profile-avatar-button">
                <Avatar
                  className="menu-item"
                  size="32"
                  round="20px"
                  name=" "
                  email=" "
                  title=" "
                  src="https://scontent.fjrs17-1.fna.fbcdn.net/v/t1.6435-9/60276155_10217641439881663_8820128552549613568_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0K6VDyjXIGUAX_oMRH6&_nc_ht=scontent.fjrs17-1.fna&oh=7f9daf33a308793d7db1888e077bbe95&oe=60F938F1"
                />
              </MenuItem>
              <MenuItem className="menu-item" id="Edit-profile-button">
                <FiEdit style={{ marginRight: "10px" }} />
                Edit Profile
              </MenuItem>
              <MenuItem className="menu-item" id="My-calendar-button">
                <BsCalendar style={{ marginRight: "10px" }} /> My Calendar
              </MenuItem>
              <MenuItem className="menu-item" id="My-Offers/Requests-button">
                <MdLocalOffer style={{ marginRight: "10px" }} /> My
                Offers/Requests
              </MenuItem>
              <MenuItem className="menu-item" id="Log-out-button">
                <GoSignOut style={{ marginRight: "10px" }} />
                <div>Log out</div>
              </MenuItem>
            </Menu>
          ) : (
            []
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
