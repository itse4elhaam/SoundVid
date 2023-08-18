import ExploreMoreButton from './ExploreMoreButton';

export interface VideosGridProps {
	type: "Newest Videos" | "Popular Videos" ,
	showButton? : boolean;
}
export default function VideosGrid({ showButton, type }: VideosGridProps) {
	const btnText =
		type === "Newest Videos"
			? "Explore all newest videos"
			: "Explore all popular videos";

	return (
		<section>
			<div className="m-14 grid grid-cols-2 gap-6 md:grid-cols-4">
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
				<div className="group cursor-pointer bg-gray-700 px-6 h-48">
					<div className="grid items-center h-full relative">
						<span className="name just opacity-0 transition-all duration-300 ease-in-out text-white group-hover:opacity-100 absolute top-[5%]">
							TrueDevs
						</span>
						<span className="by opacity-0 transition-all duration-300 ease-in text-white group-hover:opacity-100 absolute top-[80%]">
							By TrueDevs
						</span>
					</div>
				</div>
			</div>

			{showButton ? <ExploreMoreButton text={btnText} href="/" /> : <></>}
		</section>
	);
}
