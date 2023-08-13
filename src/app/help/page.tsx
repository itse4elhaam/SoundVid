import Link from "next/link";

export default function HelpPage() {
	return (
		<main>
			<div className="flex justify-center bg-neutral-500 py-20">
				<div className="align-center flex flex-col justify-center space-y-6 text-center md:w-3/6">
					<h1 className="text-4xl font-bold text-white">
						Got a Question?
					</h1>
					<div className="flex justify-between rounded-3xl bg-white">
						<input
							className="flex-1 bg-transparent px-4 py-3 text-sm text-zinc-500 outline-none sm:text-base"
							type="text"
							placeholder="Search the Knowledge Base"
						/>
						<button className="rounded-r-3xl bg-orange-500 text-sm px-5 sm:text-base font-bold text-white outline-none">
							Search
						</button>
					</div>
				</div>
			</div>
			<section className="flex justify-center bg-zinc-100 pb-16 pt-8">
				<div className="grid w-5/6 grid-cols-1 gap-5 sm:grid-cols-2 md:w-4/5 lg:w-2/3 lg:grid-cols-3">
					<Link
						href={"/"}
						className="group flex flex-col items-center justify-end rounded-xl border bg-white pb-8 hover:bg-sky-500"
					>
						<h2 className="pt-20 text-xl font-bold text-sky-500 md:text-2xl group-hover:text-white">
							FAQS
						</h2>
						<p className="font-bold text-neutral-300">9 Articles</p>
					</Link>
					<Link
						href={"/"}
						className="group flex flex-col items-center justify-end rounded-xl border bg-white pb-6 hover:bg-sky-500"
					>
						<h2 className="pt-20 text-xl font-bold text-sky-500 group-hover:text-white md:text-2xl ">
							Licensing
						</h2>
						<p className="font-bold text-neutral-300">8 Articles</p>
					</Link>
					<Link
						href={"/"}
						className="group flex flex-col items-center justify-end rounded-xl border bg-white pb-6 hover:bg-sky-500"
					>
						<h2 className="pt-20 text-xl font-bold text-sky-500 group-hover:text-white md:text-2xl ">
							Accounts
						</h2>
						<p className="font-bold text-neutral-300">6 Articles</p>
					</Link>
					<Link
						href={"/"}
						className="group flex flex-col items-center justify-end rounded-xl border bg-white pb-6 hover:bg-sky-500"
					>
						<h2 className="pt-20 text-xl font-bold text-sky-500 group-hover:text-white md:text-2xl ">
							Billing
						</h2>
						<p className="font-bold text-neutral-300">5 Articles</p>
					</Link>
					<Link
						href={"/"}
						className="group flex flex-col items-center justify-end rounded-xl border bg-white pb-6 hover:bg-sky-500"
					>
						<h2 className="pt-20 text-xl font-bold text-sky-500 group-hover:text-white md:text-2xl">
							Downloading
						</h2>
						<p className="font-bold text-neutral-300">7 Articles</p>
					</Link>
					<Link
						href={"/"}
						className="group flex flex-col items-center justify-end rounded-xl border bg-white pb-6 hover:bg-sky-500"
					>
						<h2 className="pt-20 text-xl font-bold text-sky-500 group-hover:text-white md:text-2xl">
							Premium
						</h2>
						<p className="font-bold text-neutral-300">8 Articles</p>
					</Link>
				</div>
			</section>
			<section className="flex  justify-center bg-zinc-100 pb-8">
				<div className="grid w-5/6 grid-cols-1 gap-5 md:w-4/5 lg:w-2/3  sm:grid-cols-2 ">
					<div className=" group flex flex-col items-center font-bold text-xl md:text-2xl sm:col-span-2">
						<h1>Most Popular Articles</h1>
					</div>

					<ul className="space-y-2  mx-auto text-sky-500">
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum dolor sit amet.
							</Link>
						</li>
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum dolor sit.
							</Link>
						</li>
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum dolor sit amet consectetur.
							</Link>
						</li>
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum dolor sit.
							</Link>
						</li>
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum, dolor sit amet{" "}
							</Link>
						</li>
					</ul>

					<ul className="space-y-2 mx-auto  text-sky-500">
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum dolor sit amet.
							</Link>
						</li>
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum dolor sit.
							</Link>
						</li>
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum dolor sit amet .
							</Link>
						</li>
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum dolor sit.
							</Link>
						</li>
						<li>
							<Link className="hover:underline" href={"/"}>
								Lorem ipsum, dolor sit amet consectet.
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
