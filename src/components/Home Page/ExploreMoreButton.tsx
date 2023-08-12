
interface props {
    text: string;
}

export default function ExploreMoreButton({text}: props) {

    // replace svg with chevron icon later on
  return (
			<div className="flex space-x-2 items-center group my-4 justify-center cursor-pointer">
				<button className="font-semibold text-blue-500 text-lg">
					{text}
				</button>
				<span className="go-icon font-bold text-blue-500 transition-transform duration-150 ease-in-out group-hover:translate-x-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-chevron-right"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</span>
			</div>
  );
}
