import { GridListTile, GridListTileBar } from "@material-ui/core";

import PropTypes from "prop-types";

function ImageCard(props) {
  ImageCard.propTypes = {
    tile: PropTypes.string,
    tileName: PropTypes.string,
    tileTalent: PropTypes.string,
  };

  return (
    <GridListTile className="box">
      <img className="figure" src={props.tile} alt={props.tileName} />
      <GridListTileBar
        className="caption"
        title={props.tileName}
        subtitle={<span> {props.tileTalent}</span>}
      />
    </GridListTile>
  );
}
export default ImageCard;
