import Trending from "./components/Trending/Trending";
import Footer from "./components/Footer";
import { SliderData } from "./components/ImagePoster/ImageData";
import ImagePoster from "./components/ImagePoster/ImagePoster";
import { tileData } from "./components/data";

function PalestineTalent() {
  return (
    <div>
      <div className="container mt-5 carousel">
        <ImagePoster img={SliderData} viewSlides={1} autoPlaySpeed={2} />
      </div>

      <div id="Trending-Events" className="container mt-5 carousel">
        <h1 className="slider_title">Trending Events</h1>
        <Trending img={tileData} viewSlides={5} />
      </div>
      <div id="Trending-Talents" className="container mt-5 carousel">
        <h1 className="slider_title">Trending Talents</h1>
        <Trending img={tileData} viewSlides={5} />
      </div>
      <div id="Footer" className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default PalestineTalent;
