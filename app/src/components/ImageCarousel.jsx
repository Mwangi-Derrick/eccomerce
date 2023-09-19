import React, { useEffect,useRef,useState } from "react";
import slide1 from "../assets/slides/jumia1.jpg";
import slide2 from "../assets/slides/jumia2.gif";
import slide3 from "../assets/slides/jumia3.png";
import slide4 from "../assets/slides/jumia4.jpg";
import slide5 from "../assets/slides/jumia5.png";
import slide6 from "../assets/slides/jumia6.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "../styles/Carousel.css";

function ImageCarousel() {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [currentIndex, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex + slides.length - 1) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  let [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const [rightSlideButton, setRightSlideButton] = useState(false);
  const [leftSlideButton, setLeftSlideButton] = useState(false);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  const handelSlideButtonAppearance = (e) => {
    if (leftButtonRef.current && leftButtonRef.current.contains(e.target))
    { setLeftSlideButton(true); }
    else if (rightButtonRef.current && rightButtonRef.current.contains(e.target))
    { setRightSlideButton(true); }
    else { 
      setLeftSlideButton(false);
      setRightSlideButton(false);
    }
  }
  useEffect(() => {
    document.addEventListener('mouseover', handelSlideButtonAppearance)
    return(()=>{document.removeEventListener('mouseleave',handelSlideButtonAppearance)})
  },[])
  return (
    <div className= 'carousel-container'>
       <div className="left-button" ref={leftButtonRef}>
          <button style={{display: leftSlideButton ? 'block':'none'}} onClick={prevSlide}>
            <ChevronLeftIcon />
          </button>
        </div>
      <div className={ viewportWidth >=768 ? 'desktop-carousel':'mobile-carousel'}>
        {slides.map((slide, index) => {
          if (viewportWidth >= 768) {
            return (
              <div
                className={currentIndex === index ? "active-slide" : "inactive-slide"}
                key={index}
              >
                <img src={slide} alt={slide} />
              </div>
            );
          }
           else {
            return (
              <div className="mobile-slide" key={index}>
                <img src={slide} alt={slide} />
              </div>
            );
          }
        })}
      </div>
      <div className="dot-container">
        {slides.map((item, i) =>
        {
          return (<span onClick={() =>
          { setIndex(i) }}
            style={{ backgroundColor: currentIndex === i ? "orange" : "#818185" }} className="dot"></span>)
        })}
      </div>
      <div className="right-button" ref={rightButtonRef}>
          <button style={{display: rightSlideButton ? 'block':'none'}} onClick={nextSlide}>
            <ChevronRightIcon />
          </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
