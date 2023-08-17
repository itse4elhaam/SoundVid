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
	imgSrc: string;
}

export interface SliderProps {
	slidesPerView?: number;
	totalSlides: slide[];
}

export default function Slider({ slidesPerView, totalSlides }: SliderProps) {

	return (
		<>
			<div className="px-6">
				<Swiper
					cssMode={true}
					navigation={true}
					// pagination={true}
					mousewheel={true}
					keyboard={true}
					slidesPerView={
						slidesPerView !== undefined ? slidesPerView : 8
					}
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
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 20,
						},
						1280: {
							slidesPerView: 8,
							spaceBetween: 20,
						},
					}}
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
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
