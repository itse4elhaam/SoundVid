import Image from "next/image";
import ExploreMoreButton from "./ExploreMoreButton";

interface props{
    ShowExploreButton: boolean;
}

export default function CollectionsGrid({ ShowExploreButton }: props) {
	return (
		<>
			<div className="mx-auto mt-8 grid w-5/6 grid-cols-1 gap-5 sm:grid-cols-2 md:w-4/5 lg:w-5/6 lg:grid-cols-3">
				<a className="rounded-lg hover:shadow-lg" href="">
					<div className="aspect-w-1 aspect-h-1 ">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</a>
				<a className="rounded-lg hover:shadow-lg" href="#">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</a>
				<a className="rounded-lg hover:shadow-lg" href="#">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</a>
				<div className="rounded-lg hover:shadow-lg">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							height={500}
							width={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg hover:shadow-lg">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg hover:shadow-lg">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg hover:shadow-lg">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg hover:shadow-lg">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg hover:shadow-lg">
					<div className="aspect-w-1 aspect-h-1">
						<Image
							className="rounded-lg object-cover"
							src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
							alt="blog-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="p-8">
						<div className="mb-2 text-xl font-semibold text-gray-900">
							<h1 className="text-center text-zinc-800">
								Lorem, ipsum.
							</h1>
						</div>
						<div>
							<p className="text-center text-gray-500">
								88 video Clips
							</p>
						</div>
					</div>
				</div>
			</div>
			{ShowExploreButton ? <ExploreMoreButton
				text="Explore all collections"
				href="/collections"
			/> : <></>}
		</>
	);
}
