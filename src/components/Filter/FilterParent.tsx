"use client";
import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterSelector from "./FilterSelector";

export default function FilterParent() {
	const [filterOpen, setFilterOpen] = useState<boolean>(false);

	function handleFilterSelectorToggle(open: boolean) {
		setFilterOpen(open);
		console.log()
	}

	return (
		<div className="flex">
			<div className="w-[20vh">
				{filterOpen ? <FilterSelector /> : <></>}{" "}
			</div>
			<FilterButton handleToggle={handleFilterSelectorToggle} />
		</div>
	);
}
