import React from "react";
import Slider from "src/components/Elements/Slider/Slider";
import NavBar from "src/components/Home Page/header/NavBar";

export default function page() {
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
          <Slider />
        </section>
      </section>
    </>
  );
}

page;
