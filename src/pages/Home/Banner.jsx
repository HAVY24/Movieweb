import React, { useState, useRef, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bannerData from "./bannerdata";

const Banner = () => {
  const sliderRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: !isMobile,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentSlide === i ? "bg-red-600 w-8" : "bg-gray-400 bg-opacity-50"
        }`}
      >
        {currentSlide === i && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {bannerData[i].title}
          </div>
        )}
      </div>
    ),
  };

  const openVideo = (url) => {
    setCurrentVideo(url);
    setShowVideo(true);
    sliderRef.current.slickPause();
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setShowVideo(false);
    sliderRef.current.slickPlay();
    document.body.style.overflow = "auto";
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalfIcon key="half" className="text-yellow-400" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarBorderIcon key={`empty-${i}`} className="text-yellow-400" />
      );
    }

    return stars;
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative w-full overflow-hidden shadow-xl">
      {/* Navigation Arrows */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Previous slide"
          >
            <ArrowBackIosIcon className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Next slide"
          >
            <ArrowForwardIosIcon className="text-xl" />
          </button>
        </>
      )}

      <Slider ref={sliderRef} {...settings}>
        {bannerData.map((item) => (
          <div key={item.id} className="focus:outline-none">
            <div
              className="w-full h-[500px] md:h-[700px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/40" />

              {/* Content Container */}
              <div className="relative z-20 w-full h-full container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 py-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 text-white">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-white bg-gradient-to-r from-red-600 to-red-400 py-1 px-3 text-xs md:text-sm rounded-full font-medium shadow">
                      {item.genre}
                    </span>
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-white bg-gray-700/80 py-1 px-3 text-xs md:text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
                    {item.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-white text-sm md:text-base">
                    <div className="flex items-center space-x-1">
                      {renderRatingStars(item.rating)}
                      <span className="ml-1 font-medium">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="font-medium">{item.year}</span>
                    {item.duration && (
                      <span className="font-medium">{item.duration}</span>
                    )}
                    {item.episodes && (
                      <span className="font-medium">{item.episodes}</span>
                    )}
                  </div>

                  {/* Description */}
                  <div className="hidden md:block">
                    <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                      {item.fullDescription}
                    </p>
                  </div>
                  <div className="block md:hidden">
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                      <span>Chi tiết</span>
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex items-center"
                      onClick={() => openVideo(item.videoUrl)}
                    >
                      <PlayCircleOutlineIcon className="mr-2" />
                      <span>Xem ngay</span>
                    </button>
                  </div>

                  {/* Cast */}
                  {item.cast && (
                    <div className="text-gray-300 text-sm">
                      <span className="opacity-80">Diễn viên: </span>
                      <span className="font-medium">
                        {item.cast.join(", ")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Poster Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-[250px] h-[375px] md:w-[320px] md:h-[480px] group">
                    {/* Image */}
                    <img
                      src={item.posterImage}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Fixed Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 flex items-center justify-center overflow-hidden">
                      <button
                        className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
                        onClick={() => openVideo(item.videoUrl)}
                      >
                        <PlayCircleOutlineIcon className="mr-2 text-xl" />
                        <span>Xem trailer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Đóng video"
            >
              <CloseIcon className="text-2xl" />
            </button>
            <iframe
              className="w-full h-full"
              src={currentVideo}
              title={`${bannerData[currentSlide]?.title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
