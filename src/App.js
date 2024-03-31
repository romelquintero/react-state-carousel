import "./App.css";
import Carousel from "./Carousel";
import photos from "./photos.js";

function App() {
  //check photos
  const carouselPhotos = photos;
  const carouselTitle = "Shells from far-away beaches";

  return (
    <div className="App">
      <Carousel photos={carouselPhotos} title={carouselTitle} />
    </div>
  );
}

export default App;
