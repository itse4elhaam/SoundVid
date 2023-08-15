"use client";
import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterSelector from "./FilterSelector";

export default function FilterParent() {
	const [filterOpen, setFilterOpen] = useState<boolean>(false);

	function handleFilterSelectorToggle(open: boolean) {
		setFilterOpen(open);
	}

	return (
		<div className="flex">
			{filterOpen ? <FilterSelector /> : <></>}{" "}
			<FilterButton handleToggle={handleFilterSelectorToggle} />
		</div>
	);
}
