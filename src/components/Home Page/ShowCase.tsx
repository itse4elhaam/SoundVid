"use client"
import VideosGrid, { VideosGridProps } from "src/components/Home Page/VideosGrid";
import Buttons from "src/components/Home Page/Button";
import { useState } from "react";
import CollectionsGrid from "./CollectionsGrid";

// export type ShowCaseGridType = "Popular Videos" | "Newest Videos" | "Collections";

const buttonText = ["Popular Videos", "Newest Videos", "Collections"]

export default function ShowCase() {

    const [currentButtonText, setCurrentButtonText] = useState<string>(buttonText[0])
	const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);


    function SetShowCaseGridHandler(clickedButtonText: string, index: number) {
        setCurrentButtonText(clickedButtonText);
        setActiveButtonIndex(index);
    }


    

	return (
		<>
			<div className="flex justify-center my-4 space-x-6">
				{/* <Buttons
				
				 /> */}

				 {
					buttonText.map((ele, index) => (
						<Buttons
						key={index}
						type={index === activeButtonIndex ? "ACTIVE" : "DEFAULT"}
                        onClick={() => SetShowCaseGridHandler(ele, index)}
						>
							 {ele}
						</Buttons>
					))
				 }
				 
			</div>

			{(currentButtonText === "Newest Videos" || currentButtonText === "Popular Videos") ? (
				<VideosGrid type={currentButtonText} />
			) : (
				<CollectionsGrid ShowExploreButton={true} />
			)}
		</>
	);
}
