import Link from "next/link";

export default function TrendingTags() {
	return (
		//This is the 2nd last element before footer on Homepage
		//Add following color in tailwind.config.js file: gray-250:"#e3e9ed"

		<div className="mb-16">
			<h3 className="text-4xl font-bold mb-8 items-center text-center">
				Explore Trending Categories
			</h3>
			<div className="flex flex-wrap gap-2 items-center justify-center mx-6 ">
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					People
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Background
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>1
					Vfx
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Industry
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Medical
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Sports
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Nature
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Green Screen
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Overlay
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Loop
				</Link>
				<Link
					className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white"
					href=""
				>
					Intro
				</Link>
			</div>
		</div>
	);
}
