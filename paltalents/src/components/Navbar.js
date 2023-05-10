import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useMediaQuery, useTheme } from "@material-ui/core";

import NavDrawer from "./Navbar/Drawer";
const navbarstyle = makeStyles({
  navbar: {
    width: "100%",
    background: "#000000",
    color: "white",

    position: "fixed",
  },
});
const iconbuttonstyle = makeStyles({
  tabs: {
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    marginRight: "0.5vw",
    width: "10vw",
    "&:hover": {
      background: "grey",
    },
  },
  home: {
    textTransform: "none",
    marginRight: "2vw",
    marginLeft: "2vw",
    fontSize: 16,
    fontWeight: 500,
    color: "white",
    "&:hover": {
      background: "grey",
    },
  },
  Palestine: {
    textTransform: "none",
    marginRight: "0.5vw",
    marginLeft: "1vw",
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    width: "24vw",
    height: "7vh",
    fontStyle: "italic",
    fontFamily: "Avenir-Book",
    boxShadow: 1,
    "&:click": {
      backgroundColor: "rgb(128,128,128)",
    },
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  signupstyle: {
    textTransform: "none",
    margin: " 1vh 0.5vw",
    marginLeft: "45vw",
    color: "white",
    fontWeight: 500,
    width: "14vw",

    "&:hover": {
      background: "grey",
    },
  },
  loginstyle: {
    textTransform: "none",
    margin: " 1vh  1vw",
    color: "white",
    fontweight: 500,
    "&:hover": {
      background: "grey",
    },
  },
  PalestineMedium: {
    textTransform: "none",
    marginRight: "0.5vw",
    marginLeft: "1vw",
    color: "white",
    fontSize: 14,
    fontWeight: 500,
    width: "25vw",
    height: "7vh",
    fontStyle: "italic",
    fontFamily: "Avenir-Book",
    boxShadow: 1,
    "&:click": {
      backgroundColor: "rgb(128,128,128)",
    },
    "&:hover": {
      backgroundColor: "grey",
    },
  },

  mediumSizeTabs: {
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    marginLeft: "1.5vw",
    fontSize: 14,
    width: "11vw",
    "&:hover": {
      background: "grey",
    },
  },
  PalestineSmall: {
    textTransform: "none",
    marginRight: "0.5vw",
    marginLeft: "0.5vw",
    color: "white",
    fontSize: 13,
    fontWeight: 500,
    width: "23vw",
    height: "7vh",
    fontStyle: "italic",
    fontFamily: "Avenir-Book",
    boxShadow: 1,
    "&:click": {
      backgroundColor: "rgb(128,128,128)",
    },
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  smallSizeTabs: {
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    marginLeft: "2.75vw",
    fontSize: 13,

    "&:hover": {
      background: "grey",
    },
  },
  mediumSizeSignup: {
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    marginRight: "1.5vw",
    marginLeft: "32vw",
    width: "18vw",
    fontSize: 12,
    "&:hover": {
      background: "grey",
    },
  },
  mediumSizeLogin: {
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    marginRight: "1vh",
    fontSize: 12,
    "&:hover": {
      background: "grey",
    },
  },
  smallSizeSignup: {
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    marginRight: "3vw",
    marginLeft: "19vw",
    width: "10vh",
    fontSize: 11,
    "&:hover": {
      background: "grey",
    },
  },
  smallSizeLogin: {
    textTransform: "none",
    fontWeight: 500,
    color: "white",
    fontSize: 11,
    marginRight: "2vw",
    "&:hover": {
      background: "grey",
    },
  },
});

function Navbar() {
  const navstyle = navbarstyle();
  const theme = useTheme();
  const iconbtnstyle = iconbuttonstyle();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="container">
      <AppBar className={navstyle.navbar}>
        <Toolbar>
          {isMobile ? (
            <>
              <NavDrawer className={iconbtnstyle.navDrawer} />

              <Button
                className={iconbtnstyle.Palestine}
                style={{ fontSize: 16 }}
              >
                Palestine Talent
              </Button>
            </>
          ) : isSmall ? (
            <>
              <Button
                className={iconbtnstyle.PalestineSmall}
                style={{ fontSize: 17 }}
              >
                Palestine Talent
              </Button>
              <Button className={iconbtnstyle.smallSizeTabs}>Home</Button>
              <Button className={iconbtnstyle.smallSizeTabs}>Talents</Button>
              <Button className={iconbtnstyle.smallSizeTabs}>Events</Button>
              <Button className={iconbtnstyle.smallSizeSignup}>Sign up</Button>
              <Button className={iconbtnstyle.smallSizeLogin}>Login</Button>
            </>
          ) : isMedium ? (
            <>
              <Button
                className={iconbtnstyle.PalestineMedium}
                style={{ fontSize: 18 }}
              >
                Palestine Talent
              </Button>
              <Button className={iconbtnstyle.mediumSizeTabs}>Home</Button>
              <Button className={iconbtnstyle.mediumSizeTabs}>Talents</Button>
              <Button className={iconbtnstyle.mediumSizeTabs}>Events</Button>
              <Button className={iconbtnstyle.mediumSizeSignup}>Sign up</Button>
              <Button
                className={iconbtnstyle.loginstyle}
                component={Link}
                to={"/login"}
              >
                Login{" "}
              </Button>
            </>
          ) : (
            <>
              <Button className={iconbtnstyle.Palestine}>
                Palestine Talent
              </Button>

              <Button className={iconbtnstyle.home}>Home</Button>
              <Button
                className={iconbtnstyle.tabs}
                component={Link}
                to={"/Talents"}
              >
                Talents{" "}
              </Button>
              <Button
                className={iconbtnstyle.tabs}
                component={Link}
                to={"/Events"}
              >
                Events
              </Button>
              <Button className={iconbtnstyle.signupstyle}>Sign up</Button>
              <Button
                className={iconbtnstyle.loginstyle}
                component={Link}
                to={"/login"}
              >
                Login{" "}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
