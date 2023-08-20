"use client";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

interface slide {
  name: string;
  title: string;
  imgSrc: string;
}

export interface SliderProps {
  slidesPerView?: number;
  totalSlides: slide[];
  height: number;
  breakpoints: {};
}

export default function Slider({
  slidesPerView,
  totalSlides,
  height,
  breakpoints,
}: SliderProps) {
  return (
    <>
      <div className="px-6">
        <Swiper
          cssMode={true}
          navigation={true}
          // pagination={true}
          mousewheel={true}
          height={height}
          keyboard={true}
          slidesPerView={slidesPerView !== undefined ? slidesPerView : 8}
          spaceBetween={12}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          breakpoints={breakpoints}
          className="mySwiper"
        >
          {totalSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.imgSrc}
                alt={slide.name}
                width={100}
                height={100}
              />
              <div className="slide-title">{slide.title}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
