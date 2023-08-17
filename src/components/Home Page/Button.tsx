import { useEffect, useState } from "react";
import { ShowCaseGridType } from "./ShowCase";

interface Props {
	gridChangeHandler: (grid: ShowCaseGridType) => void;
}

const buttonStyles = {
	active: "px-4 py-2 font-semibold rounded-2xl cursor-pointer bg-blue-500 text-white",
	default: "px-3 py-2 font-semibold rounded-2xl cursor-pointer text-blue-500 hover:bg-gray-200 active:bg-blue-500 active:text-white",
};


export default function Buttons({ gridChangeHandler }: Props) {
	const [grid, setGrid] = useState<ShowCaseGridType>("Popular Videos");

	useEffect(() => {
		gridChangeHandler(grid);
	}, [grid, gridChangeHandler]);

	const handleButtonClick = (selectedGrid: ShowCaseGridType) => {
		setGrid(selectedGrid);
	};

	return (
		<>
			<button
				type="button"
				className={grid === "Popular Videos" ? buttonStyles.active : buttonStyles.default}
				onClick={() => handleButtonClick("Popular Videos")}
			>
				Popular Videos
			</button>
			<button
				type="button"
				className={grid === "Newest Videos" ? buttonStyles.active : buttonStyles.default}
				onClick={() => handleButtonClick("Newest Videos")}
			>
				Newest Videos
			</button>
			<button
				type="button"
				className={grid === "Collections" ? buttonStyles.active : buttonStyles.default}
				onClick={() => handleButtonClick("Collections")}
			>
				Collections
			</button>
		</>
	);
}
