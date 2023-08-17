"use client"
import VideosGrid, { VideosGridProps } from "src/components/Home Page/VideosGrid";
import Buttons from "src/components/Home Page/Button";
import { useState } from "react";
import CollectionsGrid from "./CollectionsGrid";

// export type ShowCaseGridType = "Popular Videos" | "Newest Videos" | "Collections";



const buttonText = ["Popular Videos", "Newest Videos", "Collections"]

export default function ShowCase() {

    const [grid, setGrid] = useState<string>(buttonText[0])


    function SetShowCaseGridHandler(ShowCaseGrid : string){
        setGrid(ShowCaseGrid);
    }

	return (
		<>
			<div className="flex justify-center my-4 space-x-6">
				<Buttons gridChangeHandler={SetShowCaseGridHandler} />
			</div>

			{(grid === "Newest Videos" || grid === "Popular Videos") ? (
				<VideosGrid type={grid} />
			) : (
				<CollectionsGrid ShowExploreButton={true} />
			)}
		</>
	);
}
