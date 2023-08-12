import Link from "next/link";

export default function HeaderContent() {
	return (
		<>
			<div className="z-1 container relative mx-auto flex flex-col items-center h-full justify-center px-8">
				<h1 className="text-shadow mb-4 text-center text-4xl font-bold text-white lg:text-5xl 2xl:text-6xl">
					Free stock video footage
				</h1>
				<p className="text-shadow mb-6 text-center text-lg font-bold leading-tight text-white lg:leading-normal">
					1 million+
					<Link
						href="https://www.videvo.net/free-stock-footage/"
						className="underline hover:no-underline"
					>
						Stock Footage Clips
					</Link>
					,
					<Link
						href="https://www.videvo.net/free-motion-graphics/"
						className="underline hover:no-underline"
					>
						Motion graphics
					</Link>
					,
					<Link
						href="https://www.videvo.net/premiere-pro-templates/"
						className="underline hover:no-underline"
					>
						Premiere Pro templates
					</Link>
					,
					<Link
						href="https://www.videvo.net/after-effects-templates/"
						className="underline hover:no-underline"
					>
						After Effects templates
					</Link>
					,
					<Link
						href="https://www.videvo.net/royalty-free-music/"
						className="underline hover:no-underline"
					>
						Royalty free music
					</Link>{" "}
					&amp;
					<Link
						href="https://www.videvo.net/royalty-free-sound-effects/"
						className="underline hover:no-underline"
					>
						Sound effects
					</Link>
					, all at your fingertips.
				</p>
				<div className="w-full max-w-2xl">
					<form
						action="/search"
						className="bg-white h-14 relative flex flex-1 rounded max-w-full"
					>
						<button
							type="submit"
							className="w-14 h-14 absolute top-0 right-0 flex items-center justify-center rounded text-gray-900"
						>
							<svg
								className="fill-current h-4 w-4"
								viewBox="0 0 18 18"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M17.7173 16.4393L12.9552 11.6773C13.9077 10.4527 14.4759 8.91502 14.4759 7.24698C14.4759 3.26096 11.233 0.0180664 7.24698 0.0180664C3.26096 0.0180664 0.0180664 3.26096 0.0180664 7.24698C0.0180664 11.233 3.26096 14.4759 7.24698 14.4759C8.91502 14.4759 10.4527 13.9077 11.6773 12.9552L16.4393 17.7172C16.6158 17.8937 16.8471 17.9819 17.0783 17.9819C17.3096 17.9819 17.5408 17.8937 17.7173 17.7173C18.0701 17.3644 18.0701 16.7922 17.7173 16.4393ZM1.8253 7.24698C1.8253 4.25746 4.25746 1.8253 7.24698 1.8253C10.2365 1.8253 12.6687 4.25746 12.6687 7.24698C12.6687 10.2365 10.2365 12.6687 7.24698 12.6687C4.25746 12.6687 1.8253 10.2365 1.8253 7.24698Z"
								></path>
							</svg>
						</button>
						<input
							id="searchInput"
							type="search"
							className="h-full min-w-0 flex-1 appearance-none rounded-tr rounded-br bg-transparent pl-4 pr-10 text-gray-800 placeholder-gray-600 hover:bg-white focus:bg-white focus:outline-none"
							placeholder="Search..."
							name="q"
						/>
						<input type="hidden" name="mode" />
					</form>
				</div>

				<div className="flex space-x-4 text-white py-8">
					<Link href="/" className="underline hover:no-underline">
						All Videos
					</Link>
					<Link href="/" className="underline hover:no-underline">
						Popular Videos
					</Link>
					<Link href="/" className="underline hover:no-underline">
						Newest Videos
					</Link>
				</div>
			</div>
		</>
	);
}
