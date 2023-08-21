"use client";
import React, { useState } from "react";
import Buttons from "./Button";
import Slider, { SliderProps } from "src/components/Elements/Slider/Slider";

const buttonText = ["Music Tracks", "Newest Effects"];

const sliderProps: SliderProps = {
  height: 170,
  slidesPerView: 4,
  breakpoints: {
    380: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  totalSlides: [
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "A random one",
      title: "Water",
      imgSrc:
        "https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ],
};

export default function MusicAndSound() {
  const [currentButtonText, setCurrentButtonText] = useState<string>(
    buttonText[0]
  );
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

  function SetShowCaseGridHandler(clickedButtonText: string, index: number) {
    setCurrentButtonText(clickedButtonText);
    setActiveButtonIndex(index);
  }

  return (
    <section>
      <div className="mb-8 flex justify-center text-2xl font-bold md:text-3xl lg:text-4xl">
        <h2>Royalty-free music and sound effects</h2>
      </div>
      <div className="flex gap-3 flex-col sm:flex-row justify-center items-center my-6">
        {buttonText.map((ele, index) => (
          <Buttons
            key={index}
            type={index === activeButtonIndex ? "ACTIVE" : "DEFAULT"}
            onClick={() => SetShowCaseGridHandler(ele, index)}
          >
            {ele}
          </Buttons>
        ))}
      </div>
      <Slider {...sliderProps} />
    </section>
  );
}
