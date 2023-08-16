interface TemplateHeroContentProps {
	image?: string;
	heading: string;
	punchline: string;
}

export default function TemplateHeroContent({
	image,
	heading,
	punchline,
}: TemplateHeroContentProps) {
	// todo: resolve this later on

	console.log(image)

	return (
		<section className="flex h-[40vh] items-end bg-[url('https://images.unsplash.com/photo-1651600442386-4513156ca95a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpZGVvJTIwZWRpdGluZyUyMHNldHVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60')] bg-cover bg-center bg-no-repeat p-4">
			<div className="m-6 space-y-1">
				<div className="group flex items-center space-x-2">
					<button className="text-lg font-semibold text-white">
						All templates
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
				<h1 className="text-3xl font-bold text-white">{heading}</h1>
				<p className="line-clamp-2 text-gray-400 sm:line-clamp-none lg:text-lg">
					{punchline}
				</p>
			</div>
		</section>
	);
}
