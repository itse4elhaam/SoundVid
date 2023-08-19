import React, {useState} from "react";
import NavBar from "src/components/Home Page/header/NavBar";
import Slider, { SliderProps } from "src/components/Elements/Slider/Slider";
import Buttons from "src/components/Home Page/Button";
import MusicLibrary from "src/components/MusicLiabrary/MusicLibrary";
import Footer from "src/components/footer";



const sliderProps: SliderProps = {
  
  slidesPerView: 8,
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

export default function page() {

  return (
    <>
      <NavBar />
      <section className='-z-10 flex h-[40vh] items-center justify-center bg-[url("https://www.videvo.net/images/banners/sound-effects.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className="container mx-auto text-center font-bold">
          <h1 className="text-3xl text-white md:text-4xl mb-2">
            Sound Effects
          </h1>
          <p className="text-white text-md font-light ">
            Blockbuster movie-quality royalty free sound effects to bring your
            projects to life.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mt-8 text-center text-2xl font-bold">
          Featured sound effects
        </h2>
        <section className="mt-6">
          <Slider {...sliderProps} />
        </section>
      </section>

      <section className="mb-16">
      <h1 className="text-2xl font-bold ml-8 mt-10">Royalty Free Sound Effects</h1>
        <MusicLibrary />
      </section>

      <Footer />
    </>
  );
}
