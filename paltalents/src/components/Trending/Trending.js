import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trending.css";
import PropTypes from "prop-types";
import "../CardWrapper.css";
import { GridList, makeStyles } from "@material-ui/core";
import ImageCard from "../ImageCard";

const useStyle = makeStyles({
  root: {
    marginTop: "5px",
  },
  gridList: {
    width: "100%",
    height: "100%",
    overflowY: "hidden",
  },
});
function Trending(props) {
  Trending.propTypes = {
    img: PropTypes.arrayOf,
    viewSlides: PropTypes.number,
  };
  const classes = useStyle();
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: props.viewSlides,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const adjustSettings = () => {
    for (var i = 0; i < 3; i++) {
      settings.responsive[i].settings.slidesToShow = props.img.length;
    }
  };
  return (
    <div className={classes.root}>
      {props.img.length < props.viewSlides
        ? ((settings.slidesToShow = props.img.length), adjustSettings())
        : []}
      <Slider {...settings}>
        {props.img.map((tile) => (
          <div className="card-wrapper" key={tile.id}>
            <GridList cellHeight={184} className={classes.gridList}>
              <ImageCard
                tile={tile.img}
                tileName={tile.name}
                tileTalent={tile.talent}
              />
            </GridList>
          </div>
        ))}
      </Slider>
      <br />
      <br />
    </div>
  );
}

export default Trending;
