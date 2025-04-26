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
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: !isMobile,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-1">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          currentSlide === i
            ? "bg-red-600 w-4 md:w-6"
            : "bg-gray-400 bg-opacity-50"
        }`}
      />
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
      stars.push(
        <StarIcon
          key={`full-${i}`}
          className="text-yellow-400 text-sm md:text-base"
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <StarHalfIcon
          key="half"
          className="text-yellow-400 text-sm md:text-base"
        />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarBorderIcon
          key={`empty-${i}`}
          className="text-yellow-400 text-sm md:text-base"
        />
      );
    }
    return stars;
  };

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  return (
    <div className="relative w-full overflow-hidden shadow-xl">
      {/* Navigation Arrows - Hidden on mobile */}
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
              className="w-full h-[300px] sm:h-[400px] md:h-[600px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              {/* Gradient Overlay - Adjusted for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content Container - Stacked vertically on mobile */}
              <div className="relative z-20 w-full h-full container mx-auto px-3 sm:px-4 md:px-6 flex flex-col items-center justify-end md:justify-between md:flex-row gap-3 sm:gap-4 md:gap-8 pb-4 md:py-10">
                {/* Text Content - Full width on mobile */}
                <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col items-center md:items-start text-center md:text-left space-y-2 sm:space-y-3 md:space-y-4 text-white px-2 sm:px-4">
                  {/* Tags - Single row with overflow */}
                  <div className="w-full flex flex-nowrap justify-center md:justify-start gap-1 sm:gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    <span className="flex-shrink-0 bg-gradient-to-r from-red-600 to-red-400 py-1 px-2 text-xs rounded-full font-medium shadow">
                      {item.genre}
                    </span>
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="flex-shrink-0 bg-gray-700/80 py-1 px-2 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title - Adjusted size for mobile */}
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg px-2">
                    {item.title}
                  </h2>

                  {/* Meta Info - Compact layout */}
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-1 text-xs sm:text-sm">
                    <div className="flex items-center space-x-0.5">
                      {renderRatingStars(item.rating)}
                      <span className="ml-0.5 font-medium">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                    <span>•</span>
                    <span className="font-medium">{item.year}</span>
                    {item.duration && (
                      <>
                        <span>•</span>
                        <span className="font-medium">{item.duration}</span>
                      </>
                    )}
                    {item.episodes && (
                      <>
                        <span>•</span>
                        <span className="font-medium">{item.episodes}</span>
                      </>
                    )}
                  </div>

                  {/* Description - Limited lines on mobile */}
                  <div className="w-full max-w-xs sm:max-w-md md:max-w-lg">
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {isMobile ? item.shortDescription : item.fullDescription}
                    </p>
                  </div>

                  {/* Buttons - Smaller on mobile */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-1 sm:mt-0">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-1 px-3 sm:py-1.5 sm:px-4 rounded-full transition-all hover:translate-y-[-1px] text-xs sm:text-sm">
                      Chi tiết
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-3 sm:py-1.5 sm:px-4 rounded-full transition-all hover:translate-y-[-1px] flex items-center text-xs sm:text-sm"
                      onClick={() => openVideo(item.videoUrl)}
                    >
                      <PlayCircleOutlineIcon className="mr-1 text-sm" />
                      Xem ngay
                    </button>
                  </div>

                  {/* Cast - Only show first 2 on mobile */}
                  {item.cast && (
                    <div className="text-gray-300 text-xs sm:text-sm w-full truncate text-center md:text-left">
                      <span className="opacity-80">Diễn viên: </span>
                      <span className="font-medium">
                        {item.cast.slice(0, isMobile ? 2 : 3).join(", ")}
                        {item.cast.length > (isMobile ? 2 : 3) ? "..." : ""}
                      </span>
                    </div>
                  )}
                </div>

                {/* Poster - Smaller and centered on mobile */}
                {!isMobile && (
                  <div className="hidden md:flex w-[150px] h-[225px] sm:w-[180px] sm:h-[270px] md:w-[220px] md:h-[330px] lg:w-[280px] lg:h-[420px] justify-center relative z-30">
                    <div className="relative w-full h-full group">
                      <img
                        src={item.posterImage}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg md:rounded-xl shadow-lg transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-lg md:rounded-xl transition-all duration-300 flex items-center justify-center">
                        <button
                          onClick={() => openVideo(item.videoUrl)}
                          className="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-2 sm:py-1.5 sm:px-3 rounded-full transform hover:scale-105 transition-all duration-300 flex items-center text-xs sm:text-sm"
                        >
                          <PlayCircleOutlineIcon className="mr-1 text-xs sm:text-sm" />
                          Trailer
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Video Modal - Smaller on mobile */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={closeVideo}
              className="absolute top-1 right-1 sm:top-2 sm:right-2 z-50 bg-black/50 text-white p-1 sm:p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <CloseIcon className="text-lg sm:text-xl" />
            </button>
            <iframe
              className="w-full h-full"
              src={currentVideo}
              title="Trailer"
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
