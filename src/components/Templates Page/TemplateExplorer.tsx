import Image from "next/image";
import Link from "next/link";

// add image here to afterwards

export interface TagsType {
	name: string;
	href: string;
}

export interface TemplateExplorerType {
	image: string;
	heading: string;
	punchline: string;
	tags: TagsType[];
}

export default function TemplateExplorer({
	image,
	heading,
	punchline,
	tags,
}: TemplateExplorerType) {
	// Todo: Change the Button to use explore more button
	// todo: change the tags to use reusable trending tags button

	return (
		<section className="mx-auto w-11/12">
			<div className="flex grid-cols-2 flex-col gap-6 lg:grid">
				<div className="mt-4 flex flex-col rounded-lg bg-slate-700 sm:flex-row lg:flex-col">
					<div className="sm:w-7/12 lg:w-full">
						<Image
							className="h-full w-full rounded-lg object-cover object-center"
							src={image}
							alt=""
							width={1000}
							height={1000}
						/>
					</div>
					<div className="space-y-2 p-6">
						<div className="group flex items-center space-x-2">
							<button className="text-lg font-semibold text-white md:text-xl">
								{heading}
							</button>
							<span className="go-icon font-bold text-white transition-transform duration-150 ease-in-out group-hover:translate-x-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="lucide lucide-chevron-right"
								>
									<path d="m9 18 6-6-6-6" />
								</svg>
							</span>
						</div>
						<p className="text-sm text-gray-400">{punchline}</p>
						<div className="flex flex-wrap justify-start gap-2">
							{tags.map((tag, index) => (
								<Link
									key={index}
									className="rounded bg-slate-500 px-2 py-2 text-white hover:bg-slate-50 hover:text-black"
									href={tag.href}
								>
									{tag.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
