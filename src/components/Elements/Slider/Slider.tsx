"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Slider() {
  return (
    <div
    className='px-6'
    >
      <Swiper
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={8}
        spaceBetween={12}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        breakpoints={{
          380: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./country-music.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
