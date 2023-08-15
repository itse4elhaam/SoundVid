"use client"
import { useState } from "react";

interface props {
	currentPage: number;
	totalPages: number;
	// onPageChange: (pages: number) => void;
}

export default function Pagination({ currentPage, totalPages } : props) {

	const [pagesToShow, setPagesToShow] = useState(8);

	const getPageNumbers = () => {
		const halfPagesToShow = Math.floor(pagesToShow / 2);
		let startPage = Math.max(1, currentPage - halfPagesToShow);
		let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

		if (endPage - startPage + 1 < pagesToShow) {
			startPage = Math.max(1, endPage - pagesToShow + 1);
		}

		return Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i
		);
	};

    function HandlePageChange(page: number){
        console.log(page)
    }

	const pageNumbers = getPageNumbers();

	return (
		<div className="flex items-center justify-center space-x-2 my-10">
			<button
				onClick={() => HandlePageChange(1)}
				className={`px-2 py-1 rounded-md ${
					currentPage === 1
						? "bg-gray-300 cursor-not-allowed"
						: "bg-gray-200 hover:bg-gray-300 cursor-pointer"
				}`}
				disabled={currentPage === 1}
			>
				First
			</button>
			<button
				onClick={() => HandlePageChange(currentPage - 1)}
				className={`px-2 py-1 rounded-md ${
					currentPage === 1
						? "bg-gray-300 cursor-not-allowed"
						: "bg-gray-200 hover:bg-gray-300 cursor-pointer"
				}`}
				disabled={currentPage === 1}
			>
				Previous
			</button>
			{pageNumbers.map((page) => (
				<button
					key={page}
					onClick={() => HandlePageChange(page)}
					className={`px-2 py-1 rounded-md ${
						currentPage === page
							? "bg-blue-500 text-white"
							: "bg-gray-200 hover:bg-gray-300 cursor-pointer"
					}`}
				>
					{page}
				</button>
			))}
			{totalPages > pagesToShow &&
				pageNumbers[pageNumbers.length - 1] < totalPages && (
					<span className="px-2 py-1">...</span>
				)}
			{totalPages > pagesToShow && (
				<button
					onClick={() => HandlePageChange(totalPages)}
					className={`px-2 py-1 rounded-md ${
						currentPage === totalPages
							? "bg-gray-300 cursor-not-allowed"
							: "bg-gray-200 hover:bg-gray-300 cursor-pointer"
					}`}
					disabled={currentPage === totalPages}
				>
					Last
				</button>
			)}
			<button
				onClick={() => HandlePageChange(currentPage + 1)}
				className={`px-2 py-1 rounded-md ${
					currentPage === totalPages
						? "bg-gray-300 cursor-not-allowed"
						: "bg-gray-200 hover:bg-gray-300 cursor-pointer"
				}`}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
			<span className="px-2 py-1">
				Page {currentPage} of {totalPages}
			</span>
		</div>
	);
};

