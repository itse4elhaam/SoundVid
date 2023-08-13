"use client"
import VideosGrid, { VideosGridProps } from "src/components/Home Page/VideosGrid";
import Buttons from "src/components/Home Page/Button";
import { useState } from "react";
import CollectionsGrid from "./CollectionsGrid";

export type ShowCaseGridType = "Popular Videos" | "Newest Videos" | "Collections";

export default function ShowCase() {

    const [grid, setGrid] = useState<ShowCaseGridType>("Popular Videos")


    function SetShowCaseGridHandler(ShowCaseGrid : ShowCaseGridType){
        setGrid(ShowCaseGrid);
        console.log(grid)
    }

	return (
		<>
			<div className="flex justify-center my-4 space-x-6">
				<Buttons gridChangeHandler={SetShowCaseGridHandler} />
			</div>

			{(grid === "Newest Videos" || grid === "Popular Videos") ? (
				<VideosGrid type={grid} />
			) : (
				<CollectionsGrid />
			)}
		</>
	);
}
