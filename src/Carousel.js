import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */ // Carousel.js

export default function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const total = photos.length;

  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  function goBack() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBack}
          style={{ display: currCardIdx === 0 ? "none" : "block" }}
        />
        <Card
          caption={photos[currCardIdx].caption}
          src={photos[currCardIdx].src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
          style={{ display: currCardIdx === total - 1 ? "none" : "block" }}
        />
      </div>
    </div>
  );
}
