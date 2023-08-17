"use client"

import React, { useState } from "react";
import Slider, { SliderProps } from "src/components/Elements/Slider/Slider";
import NavBar from "src/components/Home Page/header/NavBar";
import Buttons from "src/components/Home Page/Button";
import MusicLibrary from "src/components/MusicLiabrary/MusicLibrary";
import Footer from "src/components/footer";

export type ShowCaseGridType =
  | "Popular Videos"
  | "Newest Videos"
  | "Collections";

export default function page() {
  const [grid, setGrid] = useState<ShowCaseGridType>("Popular Videos");

  function SetShowCaseGridHandler(ShowCaseGrid: ShowCaseGridType) {
    setGrid(ShowCaseGrid);
  }

  const sliderProps: SliderProps[] = [
    {
      slidesPerView: 8,
      totalSlides: [
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
      ],
    },
    {
      slidesPerView: 8,
      totalSlides: [
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "A random one",
          title: "Country",
          imgSrc:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
      ],
    },
  ];

  return (
    <>
      <NavBar />
      <section className='-z-10 flex h-[40vh] items-center justify-center bg-[url("../../public/music.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className="container mx-auto text-center font-bold">
          <h1 className="text-3xl text-white md:text-4xl">
            Royalty Free Music
          </h1>
        </div>
      </section>
      <section>
        <h2 className="mt-8 text-center text-2xl font-bold md:text-3xl">
          Browse genres
        </h2>
        <section className="mt-6">
          <Slider {...sliderProps[0]} />
        </section>
      </section>

      <section>
        <h2 className="mt-8 text-center text-2xl font-bold md:text-3xl">
          Browse moods
        </h2>
        <section className="mt-6">
          <Slider {...sliderProps[1]} />
        </section>
      </section>

      <section className="flex justify-center my-10 space-x-6">
        <Buttons gridChangeHandler={SetShowCaseGridHandler} />
      </section>

      <section className="mb-16">
        <h1 className="text-2xl font-bold ml-8 mt-10">Royalty Free Music</h1>
        <MusicLibrary />
      </section>
      <Footer />
    </>
  );
}

page;
