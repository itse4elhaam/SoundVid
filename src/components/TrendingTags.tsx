export default function TrendingTags() {
	return (
		//This is the 2nd last element before footer on Homepage
		//Add following color in tailwind.config.js file: gray250:"#e3e9ed"

		<div className="mb-16">
			<h3 className="text-4xl font-bold mb-8 items-center text-center">
				Explore Trending Categories
			</h3>
			<div className="flex flex-wrap gap-2 items-center justify-center mx-6 ">
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					People
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Background
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Vfx
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Industry
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Medical
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Sports
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Nature
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Green Screen
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Overlay
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Loop
				</a>
				<a
					className="px-3 py-3 bg-gray250 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Intro
				</a>
			</div>
		</div>
	);
}
