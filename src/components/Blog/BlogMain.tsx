import Image from "next/image";

// todo: needs extreme refactor later on
export default function BlogMain() {
	return (
		<main className=" bg-slate-100 my-6">
			<section className="mx-auto   pt-10 lg:flex w-full lg:justify-center lg:gap-5  ">
				<aside className="w-full lg:w-3/12 flex lg:flex-col  ">
					<div className="flex-col mx-auto w-11/12 items-center justify-center  bg-white  px-2 py-8 mb-8">
						<div className="flex gap-2 p-4 justify-center">
							<input
								className="w-11/12 rounded-md border-2 h-10 text-sm p-2"
								type="text"
								placeholder="Search blog.."
							/>
							<button className="rounded-md bg-blue-500 px-4 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="#fefefe"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-search"
								>
									<circle cx={11} cy={11} r={8} />
									<path d="m21 21-4.3-4.3" />
								</svg>
								<path d="m21 21-4.3-4.3"></path>
							</button>
						</div>
						<div className="flex  px-4 justify-center">
							<select
								className="w-full p-2 h-10 rounded-md"
								name="blog type"
								id="blog-type"
							>
								<option value="">Select Category </option>
								<option value="">Select Category </option>
								<option value="">Select Category </option>
								<option value="">Select Category </option>
								<option value="">Select Category </option>
								<option value="">Select Category </option>
							</select>
						</div>
					</div>
					<div className=" hidden lg:flex flex-col mx-auto w-11/12 items-center justify-center  bg-white  px-4 py-8 space-y-4">
						<div className=" font-bold text-xl w-full pb-2">
							<p>Latest Posts</p>
						</div>
						<div className="shadow-lg rounded-lg">
							<div className="aspect-w-16 aspect-h-9">
								<Image
									width={1000}
									height={1000}
									className="object-cover "
									src="https://www.videvo.net/blog/wp-content/uploads/2023/08/lossy-lossless-audio.jpg"
									alt="blog-img"
								/>
								<div className="p-8">
									<div className="mb-2 text-base font-semibold text-gray-900">
										<h1 className="line-clamp-2">
											Lorem ipsum dolor sit amet,
											consectetur adipisicing.
										</h1>
									</div>
								</div>
							</div>
						</div>
						<div className="shadow-lg ">
							<div className="aspect-w-16 aspect-h-9">
								<Image
									width={1000}
									height={1000}
									className="object-cover rounded-lg"
									src="https://www.videvo.net/blog/wp-content/uploads/2023/08/lossy-lossless-audio.jpg"
									alt="blog-img"
								/>
								<div className="p-8">
									<div className="mb-2 text-base font-semibold text-gray-900">
										<h1 className="line-clamp-2">
											Lorem ipsum dolor sit amet,
											consectetur adipisicing.
										</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</aside>
				{/* main blog posts */}
				<div className="w-11/12 lg:w-8/12 mx-auto lg:mx-0 lg:order-[-1]">
					<div className="space-y-8">
						<div className=" bg-white shadow-lg  flex flex-col sm:flex-row ">
							<div className=" ">
								<Image
									width={1000}
									height={1000}
									className="object-cover w-full sm:h-full   rounded-lg  "
									src="https://images.unsplash.com/photo-1692229218960-8ed454bead96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
									alt="blog-img"
								/>
							</div>
							<div className="p-8">
								<p className="pb-2 font-bold text-gray-600">
									Video Tutorial{" "}
								</p>
								<div className="mb-2 text-xl font-semibold text-gray-900">
									<h1 className="line-clamp-2">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing.
									</h1>
								</div>
								<div>
									<p className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Facere asperiores
										molestiae voluptates mollitia nisi
										consequuntur assumenda labore harum
										quisquam recusandae laboriosam,
										aspernatur nostrum id a reiciendis error
										tenetur iure quod.
									</p>
								</div>
							</div>
						</div>
						<div className=" bg-white shadow-lg  flex flex-col sm:flex-row ">
							<div className=" ">
								<Image
									width={1000}
									height={1000}
									className="object-cover w-full sm:h-full   rounded-lg  "
									src="https://images.unsplash.com/photo-1692229218960-8ed454bead96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
									alt="blog-img"
								/>
							</div>
							<div className="p-8">
								<p className="pb-2 font-bold text-gray-600">
									Video Tutorial{" "}
								</p>
								<div className="mb-2 text-xl font-semibold text-gray-900">
									<h1 className="line-clamp-2">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing.
									</h1>
								</div>
								<div>
									<p className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Facere asperiores
										molestiae voluptates mollitia nisi
										consequuntur assumenda labore harum
										quisquam recusandae laboriosam,
										aspernatur nostrum id a reiciendis error
										tenetur iure quod.
									</p>
								</div>
							</div>
						</div>
						<div className=" bg-white shadow-lg  flex flex-col sm:flex-row ">
							<div className=" ">
								<Image
									width={1000}
									height={1000}
									className="object-cover w-full sm:h-full   rounded-lg  "
									src="https://images.unsplash.com/photo-1692229218960-8ed454bead96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
									alt="blog-img"
								/>
							</div>
							<div className="p-8">
								<p className="pb-2 font-bold text-gray-600">
									Video Tutorial{" "}
								</p>
								<div className="mb-2 text-xl font-semibold text-gray-900">
									<h1 className="line-clamp-2">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing.
									</h1>
								</div>
								<div>
									<p className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Facere asperiores
										molestiae voluptates mollitia nisi
										consequuntur assumenda labore harum
										quisquam recusandae laboriosam,
										aspernatur nostrum id a reiciendis error
										tenetur iure quod.
									</p>
								</div>
							</div>
						</div>
						<div className=" bg-white shadow-lg  flex flex-col sm:flex-row ">
							<div className=" ">
								<Image
									width={1000}
									height={1000}
									className="object-cover w-full sm:h-full   rounded-lg  "
									src="https://images.unsplash.com/photo-1692229218960-8ed454bead96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
									alt="blog-img"
								/>
							</div>
							<div className="p-8">
								<p className="pb-2 font-bold text-gray-600">
									Video Tutorial{" "}
								</p>
								<div className="mb-2 text-xl font-semibold text-gray-900">
									<h1 className="line-clamp-2">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing.
									</h1>
								</div>
								<div>
									<p className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Facere asperiores
										molestiae voluptates mollitia nisi
										consequuntur assumenda labore harum
										quisquam recusandae laboriosam,
										aspernatur nostrum id a reiciendis error
										tenetur iure quod.
									</p>
								</div>
							</div>
						</div>
						<div className=" bg-white shadow-lg  flex flex-col sm:flex-row ">
							<div className=" ">
								<Image
									width={1000}
									height={1000}
									className="object-cover w-full sm:h-full   rounded-lg  "
									src="https://images.unsplash.com/photo-1692229218960-8ed454bead96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
									alt="blog-img"
								/>
							</div>
							<div className="p-8">
								<p className="pb-2 font-bold text-gray-600">
									Video Tutorial{" "}
								</p>
								<div className="mb-2 text-xl font-semibold text-gray-900">
									<h1 className="line-clamp-2">
										Lorem ipsum dolor sit amet, consectetur
										adipisicing.
									</h1>
								</div>
								<div>
									<p className="line-clamp-4">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Facere asperiores
										molestiae voluptates mollitia nisi
										consequuntur assumenda labore harum
										quisquam recusandae laboriosam,
										aspernatur nostrum id a reiciendis error
										tenetur iure quod.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
