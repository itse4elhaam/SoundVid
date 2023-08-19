import TemplateGridLabel from "./GridLabel";

export interface LabelType {
	name: string;
	black: boolean;
}

interface GridCardProps {
    image: string;
	heading: string;
	labels: LabelType[];
}

export default function TemplateGridCard({heading, labels, image}: GridCardProps){
    return (
		<div className="flex cursor-pointer hover:scale-105 flex-col border h-72 w-full sm:w-11/12 md:w-full  rounded-lg transition-all duration-200 border-none bg-white shadow-xl">
			<div className="image-wrapper h-[60%] bg-gray-300"></div>

			<h1 className="font-semibold text-xl lg:text-2xl px-3 py-2">
				{heading}
			</h1>

			<div className="flex justify-between text-slate-600">
				<div className="tags-wrapper flex p-2 space-x-2">
					{labels.map((label, index) => (
						<TemplateGridLabel key={index} name={label.name} black={label.black}/>
							
					))}
				</div>

				<div className="flex space-x-3 items-center px-4">
					<button className="save-wrapper transition-colors duration-150 hover:text-slate-800">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="lucide lucide-copy-plus"
						>
							<line x1="15" x2="15" y1="12" y2="18" />
							<line x1="12" x2="18" y1="15" y2="15" />
							<rect
								width="14"
								height="14"
								x="8"
								y="8"
								rx="2"
								ry="2"
							/>
							<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
						</svg>{" "}
					</button>
					<button className="like-wrapper transition-colors duration-150 hover:text-slate-800">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="lucide lucide-heart"
						>
							<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
						</svg>
					</button>
					<button className="download-wrapper transition-colors duration-150 hover:text-slate-800">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="lucide lucide-download"
						>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" x2="12" y1="15" y2="3" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}