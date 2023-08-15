"use client"
import { useState } from "react";

interface props {
    handleToggle: (open: boolean) => void;
}

export default function FilterButton({handleToggle} : props) {

    const [filterOpen, setFilterOpen] = useState<boolean>(false)

    function handleClick(){
          setFilterOpen((filterState) => !filterState);
          handleToggle(filterOpen)
    }
    

  return (
		<button
			className="rounded flex justify-between bg-blue-500 text-white group"
			onClick={handleClick}
		>
			<span className="left-icon bg-blue-400 p-2 transition-transform duration-200 ease-out group-active:-translate-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-chevron-left transition-transform duration-200 ease-out group-hover:-translate-x-[2px]"
				>
					<path d="m15 18-6-6 6-6" />
				</svg>
			</span>
			<div className="core-wrapper flex space-x-1 items-center p-2">
				<span className="filters-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-sliders-horizontal"
					>
						<line x1="21" x2="14" y1="4" y2="4" />
						<line x1="10" x2="3" y1="4" y2="4" />
						<line x1="21" x2="12" y1="12" y2="12" />
						<line x1="8" x2="3" y1="12" y2="12" />
						<line x1="21" x2="16" y1="20" y2="20" />
						<line x1="12" x2="3" y1="20" y2="20" />
						<line x1="14" x2="14" y1="2" y2="6" />
						<line x1="8" x2="8" y1="10" y2="14" />
						<line x1="16" x2="16" y1="18" y2="22" />
					</svg>
				</span>
				<span className="text">Filters</span>
			</div>
		</button>
  );
}
