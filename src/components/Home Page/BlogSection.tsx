import Image from "next/image";
import ExploreMoreButton from "./ExploreMoreButton";

export default function BlogSection() {

	return (
		<section className="mx-auto mb-8 mt-6 w-11/12">
			<div className="mb-8 flex justify-center text-2xl font-bold md:text-3xl lg:text-4xl">
				<h2>From the Blog</h2>
			</div>
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-8">
				<div className="hover:shadow-lg rounded-lg cursor-pointer">
					<div className="aspect-w-16 aspect-h-9 bg-gray-400 h-[30vw]"></div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="line-clamp-2">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing.
							</h1>
						</div>
						<div>
							<p className="line-clamp-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Facere asperiores molestiae
								voluptates mollitia nisi consequuntur assumenda
								labore harum quisquam recusandae laboriosam,
								aspernatur nostrum id a reiciendis error tenetur
								iure quod.
							</p>
						</div>
					</div>
				</div>
				<div className="hover:shadow-lg rounded-lg cursor-pointer">
					<div className="aspect-w-16 aspect-h-9 bg-gray-400 h-[30vw]"></div>

					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="line-clamp-2">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing.
							</h1>
						</div>
						<div>
							<p className="line-clamp-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Facere asperiores molestiae
								voluptates mollitia nisi consequuntur assumenda
								labore harum quisquam recusandae laboriosam,
								aspernatur nostrum id a reiciendis error tenetur
								iure quod.
							</p>
						</div>
					</div>
				</div>
				<div className="hover:shadow-lg rounded-lg cursor-pointer">
					<div className="aspect-w-16 aspect-h-9 bg-gray-400 h-[30vw]"></div>

					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="line-clamp-2">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing.
							</h1>
						</div>
						<div>
							<p className="line-clamp-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Facere asperiores molestiae
								voluptates mollitia nisi consequuntur assumenda
								labore harum quisquam recusandae laboriosam,
								aspernatur nostrum id a reiciendis error tenetur
								iure quod.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center font-bold">
				<ExploreMoreButton text="Visit the blog for more" href="/" />
			</div>
		</section>
	);
}
