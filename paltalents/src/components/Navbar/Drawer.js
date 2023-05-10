import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { Button } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { AiOutlineArrowLeft } from "react-icons/ai";
const useStyles = makeStyles({
  list: {
    width: 183,
    color: "white",
    background: "black",
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
  menuIcon: {
    color: "white",
  },
  Divider: {
    background: "black",
  },
  closeDrawer: {
    marginTop: 10,
    marginLeft: 140,
  },
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.closeDrawer}>
        <AiOutlineArrowLeft />
      </div>

      <List>
        {["Home", "Talents", "Events"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.Divider} />
      <List>
        {["Sign up", "Login"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)} title="nav-menu">
          <MenuIcon className={classes.menuIcon} />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
