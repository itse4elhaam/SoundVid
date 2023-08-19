import Link from "next/link";
import SearchInput from "src/components/SearchInput";

export default function HeaderContent() {
	return (
		<>
			<div className="container relative mx-auto flex flex-col items-center h-full justify-center px-8">
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
				<SearchInput navbarHeight={false} />

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
