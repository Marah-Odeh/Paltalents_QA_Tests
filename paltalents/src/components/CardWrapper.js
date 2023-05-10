import React from "react";
import { Grid, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./CardWrapper.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageCard from "./ImageCard";
import { PropTypes } from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "85px",
    backgroundColor: theme.palette.background.paper,
  },

  gridList: {
    width: "auto",
    height: "100%",
    padding: "40px",
    paddingLeft: "0",
    overflow: "hidden",
    [theme.breakpoints.up("1300")]: {
      width: "66vw",
    },
  },
}));

function CardWrapper(props) {
  CardWrapper.propTypes = {
    title: PropTypes.string,
    images: PropTypes.arrayOf,
  };

  // Create a variable to detect when min width is 1024px using useMediaQuery hook
  const matches1 = useMediaQuery("(min-width:1024px)");
  // Create a variable to detect when max width is 700px using useMediaQuery hook
  const matches2 = useMediaQuery("(max-width:650px)");
  // Create a variable to show a number of columns according to matches1 and matches2
  const numberOfColumns = matches1 ? 3 : matches2 ? 1 : 2;

  const classes = useStyles();

  return (
    <div id="parent" className="parent">
      <Grid container id="grid" className="grid">
        <div style={{ marginLeft: " 30px" }}>
          <GridList
            spacing={33}
            cellHeight={200}
            className={classes.gridList}
            cols={numberOfColumns}
          >
            <GridListTile style={{ height: "auto" }} cols={numberOfColumns}>
              <h1 className="h1">
                {props.title
                  ? "Discover Palestinian Artists in Your Region"
                  : "Discover Upcoming Events"}
              </h1>
            </GridListTile>
            {/* Map grid tiles with their images and their tilebar which contains their caption */}
            {props.images.map((tile) => (
              <div key={tile.id}>
                <ImageCard
                  tile={tile.img}
                  tileName={tile.name}
                  tileTalent={tile.talent}
                />
              </div>
            ))}
          </GridList>
        </div>
      </Grid>
    </div>
  );
}

export default CardWrapper;
