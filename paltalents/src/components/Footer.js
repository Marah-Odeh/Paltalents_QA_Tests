import React from "react";
import { makeStyles } from "@material-ui/core";
import { Instagram } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
// this is the styling for the grid component which is the root component for the footer and the content inside it
const footerStyle = makeStyles({
  root: {
    height: "18vh",
    position: "sticky",
    userSelect: "none",
    fontSize: "13px",
    width: "maxWidth",
    background: "linear-gradient(360deg,rgba(0,0,0,8),rgba(30,30,30,8))",
    color: "white",
  },
  socials: {
    fontSize: 15,
    paddingBottom: "10px",
  },
  facebookIcon: {
    userSelect: "none",
    background: "linear-gradient(45deg,#0080FF,#0069D2)",
  },
  instagramIcon: {
    borderRadius: "16px",
    userSelect: "none",
    background:
      "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  },
  cols: {
    paddingBottom: "15px",
  },
});

// It creates the home page footer
function Footer() {
  const useStyle = footerStyle();
  return (
    <Grid
      className={useStyle.root}
      justify="space-evenly"
      direction="row"
      container
      spacing={3}
    >
      <Grid
        id="col-1"
        item
        className={useStyle.cols}
        direction="column"
        xs={4}
        sm={4}
        container
        justify="space-evenly"
      >
        <Grid id="about-us" item>
          About us
        </Grid>
        <Grid id="FAQs" item>
          FAQs
        </Grid>
        <Grid id="Contact-us" item>
          Contact us
        </Grid>
      </Grid>
      <Grid
        id="col-2"
        item
        className={useStyle.cols}
        direction="column"
        xs={4}
        sm={4}
        container
        justify="space-evenly"
      >
        <Grid id="Privacy-policy" item>
          Privacy Policy
        </Grid>
        <Grid id="Terms-of-service" item>
          Terms of Service
        </Grid>
        <Grid id="Customer-support" item>
          Customer Support
        </Grid>
      </Grid>
      <Grid
        id="col-3"
        item
        direction="column"
        xs={4}
        sm={4}
        container
        justify="space-evenly"
      >
        <Grid item className={useStyle.socials}>
          Social
        </Grid>
        <Grid direction="row" container justify="center">
          <Grid id="facebook" item xs={3} sm={2} md={1}>
            <Facebook className={useStyle.facebookIcon} />
          </Grid>
          <Grid id="instagram" item xs={3} sm={1} md={1}>
            <Instagram className={useStyle.instagramIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
