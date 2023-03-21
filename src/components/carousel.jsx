import { useEffect } from "react";
import Slide from "react-reveal/Slide";
/* eslint-disable react/style-prop-object */
import TypeWrite from "./TypeWrite";

const Carousel = () => {
  useEffect(() => {
    // select the carousel and its inner container
    const carousel = document.querySelector(".carousel");
    const carouselInner = carousel.querySelector(".carousel-inner");

    // select the carousel indicators
    const indicators = document.querySelectorAll(".carousel-indicator");

    // set the initial active slide to the first one
    let activeSlideIndex = 0;
    indicators[activeSlideIndex].classList.add("active");

    // define a function to change the active slide
    function changeSlide() {
      // remove the active class from the current slide and indicator
      carouselInner
        .querySelector(".carousel-item.active")
        .classList.remove("active");
      indicators[activeSlideIndex].classList.remove("active");

      // set the active slide to the next one, wrapping around to the start if necessary
      activeSlideIndex = (activeSlideIndex + 1) % carouselInner.children.length;

      // add the active class to the new slide and indicator
      carouselInner.children[activeSlideIndex].classList.add("active");
      indicators[activeSlideIndex].classList.add("active");
    }

    // call the changeSlide function every 5 seconds
    setInterval(changeSlide, 10000);
  }, []);
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <Slide right>
          <div
            className="carousel-item active"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/J2fpQL9/Screenshot-2023-03-20-at-23-08-04.png')",
            }}
          >
            <div className="carousel-caption">
              <h5>#FASHION-DAY</h5>
              <h2>
                <TypeWrite text={"80% OFF"}/>
              </h2>
              <h6>Discover fashion that suits your style.</h6>
              <button>Check this out</button>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/J2fpQL9/Screenshot-2023-03-20-at-23-08-04.png')",
            }}
          >
            <div className="carousel-caption">
              <h5>#FASHION DAY</h5>
              <h2> <TypeWrite text={"50% OFF"}/></h2>
              <h6>Discover fashion that suits your style.</h6>
              <button>Check this out</button>
            </div>
          </div>
        </Slide>
      </div>
      <div className="carousel-indicators">
        <span className="carousel-indicator active"></span>
        <span className="carousel-indicator"></span>
      </div>
    </div>
  );
};
export default Carousel;
