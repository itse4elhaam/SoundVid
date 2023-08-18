import {
	Accordion as ShadAccordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "src/components/ui/accordion";

interface props{
    closeMenu : () => void
}

export default function MobileMenu({closeMenu} : props) {


    // todo make the accordion re usable
	return (
		<div className="mx-auto absolute w-screen h-screen">
			<div className="flex items-center justify-between border-b-2 border-b-slate-300 p-4 text-black z-30">
				<h1 className="text-xl font-bold">Menu</h1>
				<button type="button" onClick={closeMenu}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={30}
						height={30}
						viewBox="0 0 24 24"
						fill="none"
						stroke="black"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-x"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
			</div>
			<div className="mt-4 flex flex-col space-y-3 px-8">
				<ShadAccordion
					type="single"
					collapsible
					className="w-full text-black flex flex-col space-y-3"
				>
					<AccordionItem value="item-1" className="border-0">
						<AccordionTrigger className="flex items-center space-x-2 py-2 text-gray-900">
							<div className="flex space-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-heart"
								>
									<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
								</svg>
								<span className="text-medium font-bold">
									My Favourite
								</span>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul className="flex flex-col pl-6 space-y-4">
								<li className=" rounded p-1 hover:bg-gray-300">
									All Videos
								</li>
								<li className=" rounded p-1 hover:bg-gray-300">
									Footage
								</li>
								<li className=" rounded p-1 hover:bg-gray-300">
									Motion Graphics
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2" className="border-0">
						<AccordionTrigger className="flex items-center space-x-2 py-2 text-gray-900">
							<div className="flex space-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-newspaper"
								>
									<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
									<path d="M18 14h-8" />
									<path d="M15 18h-5" />
									<path d="M10 6h8v4h-8V6Z" />
								</svg>
								<span className="text-medium font-bold">
									Templates
								</span>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul className="flex flex-col pl-6 space-y-4">
								<li className=" rounded p-1 hover:bg-gray-300">
									All Templates
								</li>
								<li className=" rounded p-1 hover:bg-gray-300">
									After Effects Templates
								</li>
								<li className=" rounded p-1 hover:bg-gray-300">
									Premiere Pro Templates
								</li>
								<li className=" rounded p-1 hover:bg-gray-300">
									DaVinci Resolve Templates
								</li>
								<li className=" rounded p-1 hover:bg-gray-300">
									Final Cut Pro Templates
								</li>
								<li className=" rounded p-1 hover:bg-gray-300">
									Motion Graphics Templates
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</ShadAccordion>
				<div className="flex items-center rounded p-1 hover:bg-gray-300">
					<a
						className="flex items-center space-x-2 py-2 text-gray-900"
						href=""
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-volume-2"
						>
							<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
							<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
							<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
						</svg>
						<span className="text-medium font-bold">Music</span>
					</a>
				</div>
				<div className="flex items-center rounded p-1 hover:bg-gray-300">
					<a
						className="flex items-center space-x-2 py-2 text-gray-900"
						href=""
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-activity"
						>
							<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
						</svg>
						<span className="text-medium font-bold">
							Sound Effects
						</span>
					</a>
				</div>
				<div className="flex items-center rounded p-1 hover:bg-gray-300">
					<a
						className="flex items-center space-x-2 py-2 text-gray-900"
						href=""
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-plus-square"
						>
							<rect width={18} height={18} x={3} y={3} rx={2} />
							<path d="M8 12h8" />
							<path d="M12 8v8" />
						</svg>
						<span className="text-medium font-bold">
							Collections
						</span>
					</a>
				</div>
				<div className="flex items-center justify-between rounded p-1 hover:bg-gray-300">
					<a
						className="flex items-center space-x-2 py-2 text-gray-900"
						href=""
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-help-circle"
						>
							<circle cx={12} cy={12} r={10} />
							<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
							<path d="M12 17h.01" />
						</svg>
						<span className="text-medium font-bold">Help</span>
					</a>
				</div>
			</div>
			<div className="pt-4">
				<a
					className="bg-gray-150 mx-auto flex w-11/12 items-center justify-center rounded-lg bg-blue-500 px-2 py-3 font-bold text-white"
					href=""
				>
					Join Website{" "}
				</a>
			</div>
			<div className="pt-4">
				<a
					className="bg-gray-150 mx-auto flex w-11/12 items-center justify-center rounded-lg bg-gray-300 px-2 py-3 font-bold text-gray-900 hover:bg-gray-400"
					href=""
				>
					Login{" "}
				</a>
			</div>
		</div>
	);
}
