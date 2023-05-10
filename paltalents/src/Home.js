import Trending from "./components/Trending/Trending";
import Footer from "./components/Footer";
import { SliderData } from "./components/ImagePoster/ImageData";
import { tileData } from "./components/data";
import ImagePoster from "./components/ImagePoster/ImagePoster";

function Home() {
  return (
    <div>
      <div id="Image-Poster-home" className="container mt-5 carousel">
        <ImagePoster img={SliderData} viewSlides={1} autoPlaySpeed={2} />
      </div>

      <div id="Trending-Events-home" className="container mt-5 carousel">
        <h1 className="slider_title">Trending Events</h1>
        <Trending img={tileData} viewSlides={5} />
      </div>
      <div id="Trending-Talents-home" className="container mt-5 carousel">
        <h1 className="slider_title">Trending Talents</h1>
        <Trending img={tileData} viewSlides={5} />
      </div>
      <div id="Footer-home" className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
