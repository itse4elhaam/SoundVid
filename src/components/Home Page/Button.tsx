"use client"
import { useState } from "react";

export default function Buttons() {

	const [popularVideosToggle, setPopularVideosToggle] = useState<Boolean>(true)
	const [newVideosToggle, setNewVideosToggle] = useState<Boolean>(false)
	const [collectionsToggle, setCollectionsToggle] = useState<Boolean>(false);

	return (
		<>
			<button
				className="px-4 py-2 font-semibold rounded-2xl cursor-pointer text-blue-500 hover:bg-gray-200 active:bg-blue-500 active:text-white"
				onClick={() => setPopularVideosToggle(true)}
			>
				Popular Videos
			</button>
			<button
				className="px-3 py-2 font-semibold rounded-2xl cursor-pointer text-blue-500 hover:bg-gray-200 active:bg-blue-500 active:text-white"
				onClick={() => setNewVideosToggle(true)}
			>
				Newest Videos
			</button>
			<button
				className="px-3 py-2 font-semibold rounded-2xl cursor-pointer text-blue-500 hover:bg-gray-200 active:bg-blue-500 active:text-white"
				onClick={() => setCollectionsToggle(true)}
			>
				Collections
			</button>
		</>
	);
}
