"use client";
import VideosGrid from "src/components/Home Page/VideosGrid";
import Buttons from "src/components/Home Page/Button";
import { useState } from "react";
import CollectionsGrid from "./CollectionsGrid";

const buttonText = ["Popular Videos", "Newest Videos", "Collections"];

export default function ShowCase() {
  const [currentButtonText, setCurrentButtonText] = useState<string>(
    buttonText[0]
  );
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

  function SetShowCaseGridHandler(clickedButtonText: string, index: number) {
    setCurrentButtonText(clickedButtonText);
    setActiveButtonIndex(index);
  }

  return (
    <>
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

      {currentButtonText === "Newest Videos" ||
      currentButtonText === "Popular Videos" ? (
        <VideosGrid type={currentButtonText} />
      ) : (
        <CollectionsGrid ShowExploreButton={true} />
      )}
    </>
  );
}
