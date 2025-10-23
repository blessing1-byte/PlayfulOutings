import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { slideData } from "../index";
import "../CSS/Slider.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.05)), url(${slide.image})`,
                backgroundColor: slide.bgColor,
              }}
            >
              <div className="overlay"></div>
              {/* <div className="hero-content">
                <h2>{slide.title}</h2>
                <h1>{slide.subtitle}</h1>
                <p>
                  {slide.description ||
                    "Experience the best gaming venues worldwide"}
                </p>
                <button>{slide.buttonText || "Book Now"}</button>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>
    </div>
  );
}
