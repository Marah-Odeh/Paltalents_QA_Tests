import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImagePoster.css";
import PropTypes from "prop-types";

function ImagePoster(props) {
  ImagePoster.propTypes = {
    img: PropTypes.arrayOf,
    autoPlaySpeed: PropTypes.number,
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
    fade: true,
    autoplaySpeed: props.autoPlaySpeed * 1000,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div id="Image-Poster">
      <Slider {...settings}>
        {props.img.map((img, index) => (
          <div className="card-wrapper-Poster" key={index}>
            <div className="Poster-card">
              <div className="card-image">
                <img src={img.Image} alt={img.alt} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImagePoster;
