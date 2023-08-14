"use client";

import Image from "next/image";
import SubscriptionToggle, { ToggleValueType } from "./Toggle";
import { useState } from "react";
import { FAQAccordion } from './FAQ';

export default function JoinUsMain() {
	const [litePlanOpacity, setLitePlanOpacity] = useState("opacity-30");
	const [litePlanButtonText, setLitePlanButtonText] = useState(
		"Not available in yearly"
	);

	function onToggleHandler(value: ToggleValueType) {
		if (value === "Monthly") {
			setLitePlanOpacity("opacity-100");
			setLitePlanButtonText("Select Plan");
		} else {
			setLitePlanOpacity("opacity-30");
			setLitePlanButtonText("Not available in yearly");
		}
	}

	// todo: refactor this code to stay sane
	return (
		<main>
			<section className="relative bg-[url('https://images.unsplash.com/photo-1651600442386-4513156ca95a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpZGVvJTIwZWRpdGluZyUyMHNldHVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60')] bg-cover bg-center bg-no-repeat">
				<div className="absolute inset-0 backdrop-blur-md"></div>
				<div className="relative z-10 mx-auto flex w-11/12 justify-center pb-10 pt-8 sm:pt-12 md:w-5/6">
					<div className="flex flex-col space-y-8">
						<h1 className="text-center text-3xl font-bold text-white sm:text-4xl">
							Premium stock content, only cheaper.
						</h1>
						<div className="flex justify-center">
							<p className="w-4/5 text-center text-white sm:text-xl">
								The same content, from the same artists, with
								the same royalty-free licensing {"you'll"} find
								on other agencies... So why pay more?
							</p>
						</div>
						<div className="flex justify-center">
							<a
								className="w-max rounded-md bg-amber-500 px-3 py-3 font-bold text-white hover:bg-amber-600 sm:text-lg"
								href="#"
							>
								Get Started
							</a>
						</div>
						<div className="flex justify-center">
							<ul className="hidden justify-between sm:flex sm:w-4/6">
								<li className="flex items-center text-white">
									<svg
										className="mr-2 h-6 w-6 "
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M20 6L9 17l-5-5"
										></path>
									</svg>
									<p>Monthly or annual payments</p>
								</li>
								<li className="flex items-center text-white">
									<svg
										className="mr-2 h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M20 6L9 17l-5-5"
										></path>
									</svg>
									<p>Money-back guarantee</p>
								</li>
								<li className="flex items-center text-white">
									<svg
										className="mr-2 h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M20 6L9 17l-5-5"
										></path>
									</svg>
									<p>Cancel anytime</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-blue-500">
				<div className="mx-auto flex justify-center pb-10 pt-8 sm:pt-12 md:w-4/5">
					<ul className="flex flex-col gap-10 font-bold text-white sm:flex-row md:space-x-32">
						<li>
							<p className="text-center text-3xl">1.5M+</p>
							<p className="text-center">Stock Media Assests</p>
						</li>
						<li>
							<p className="text-center text-3xl">1.3M+</p>
							<p className="text-center">Monthly Downloads</p>
						</li>
						<li>
							<p className="text-center text-3xl">650,000+</p>
							<p className="text-center">Users</p>
						</li>
					</ul>
				</div>
			</section>
			<section className="bg-slate-200">
				<div className="mx-auto w-5/6 p-8 sm:w-2/5 md:w-2/5">
					<div>
						<Image
							src="https://www.videvo.net/images/trustpilot.png"
							width={500}
							height={500}
							alt="ratings"
						/>
					</div>
				</div>
			</section>
			<div className="mx-auto mt-10 flex w-5/6 justify-center text-2xl font-bold md:w-4/5 md:text-4xl lg:w-5/6">
				<h1 className="">Why choose Videvo?</h1>
			</div>
			<section className="flex flex-row justify-center pb-16 pt-8">
				<div className="grid w-5/6 grid-cols-1 gap-5 sm:grid-cols-2 md:w-4/5 lg:w-5/6 lg:grid-cols-3">
					<div className="flex flex-col items-center rounded-xl border bg-white p-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#3478f7"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-cog"
						>
							<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
							<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
							<path d="M12 2v2" />
							<path d="M12 22v-2" />
							<path d="m17 20.66-1-1.73" />
							<path d="M11 10.27 7 3.34" />
							<path d="m20.66 17-1.73-1" />
							<path d="m3.34 7 1.73 1" />
							<path d="M14 12h8" />
							<path d="M2 12h2" />
							<path d="m20.66 7-1.73 1" />
							<path d="m3.34 17 1.73-1" />
							<path d="m17 3.34-1 1.73" />
							<path d="m11 13.73-4 6.93" />
						</svg>
						<h2 className="mt-4 text-center font-bold group-hover:text-white">
							Flexible subscription options
						</h2>
						<p className="text-center text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Consequatur est id sapiente sequi, optio
							tempore officia repellendus laudantium minus
							maiores.
						</p>
					</div>
					<div className="flex flex-col items-center rounded-xl border bg-white p-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#3478f7"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-scroll-text"
						>
							<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
							<path d="M19 17V5a2 2 0 0 0-2-2H4" />
							<path d="M15 8h-5" />
							<path d="M15 12h-5" />
						</svg>
						<h2 className="mt-4 font-bold group-hover:text-white">
							Simple licensing
						</h2>
						<p className="text-center text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Consequatur est id sapiente sequi, optio
							tempore officia repellendus laudantium minus
							maiores.
						</p>
					</div>
					<div className="flex flex-col items-center rounded-xl border bg-white p-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#3478f7"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-heart-handshake"
						>
							<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
							<path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
							<path d="m18 15-2-2" />
							<path d="m15 18-2-2" />
						</svg>
						<h2 className="mt-4 font-bold group-hover:text-white">
							{"We're"} fair to our artists
						</h2>
						<p className="text-center text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Consequatur est id sapiente sequi, optio
							tempore officia repellendus laudantium minus
							maiores.
						</p>
					</div>
					<div className="flex flex-col items-center rounded-xl border bg-white p-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#3478f7"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-shield-check"
						>
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
							<path d="m9 12 2 2 4-4" />
						</svg>
						<h2 className="mt-4 font-bold group-hover:text-white">
							{"We're"} safe
						</h2>
						<p className="text-center text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Consequatur est id sapiente sequi, optio
							tempore officia repellendus laudantium minus
							maiores.
						</p>
					</div>
					<div className="flex flex-col items-center rounded-xl border bg-white p-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#3478f7"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-smile"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M8 14s1.5 2 4 2 4-2 4-2" />
							<line x1="9" x2="9.01" y1="9" y2="9" />
							<line x1="15" x2="15.01" y1="9" y2="9" />
						</svg>
						<h2 className="mt-4 font-bold group-hover:text-white">
							Our customer support rocks!
						</h2>
						<p className="text-center text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Consequatur est id sapiente sequi, optio
							tempore officia repellendus laudantium minus
							maiores.
						</p>
					</div>
					<div className="flex flex-col items-center rounded-xl border bg-white p-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#3478f7"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-circle-dollar-sign"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
							<path d="M12 18V6" />
						</svg>
						<h2 className="mt-4 font-bold group-hover:text-white">
							Money-back guarantee
						</h2>
						<p className="text-center text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Consequatur est id sapiente sequi, optio
							tempore officia repellendus laudantium minus
							maiores.
						</p>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto flex w-11/12 flex-col justify-center pb-10 pt-8 sm:pt-12">
					<div className="mx-auto flex flex-col space-y-4">
						<h1 className="text-center text-2xl font-bold md:text-4xl">
							Plans and Pricing
						</h1>
						<h2 className="text-center">
							Enjoy{" "}
							<span className="font-bold">
								unlimited downloads
							</span>{" "}
							on yearly plans
						</h2>
						<div className="flex justify-between items-center gap-8">
							<p className="w-2/6 text-right sm:w-max">
								<span className="text-lg font-bold">
									Yearly
								</span>
								<br />
								Unlimited downloads
							</p>
							<SubscriptionToggle
								onToggleHandler={onToggleHandler}
							/>
							<p className="w-2/6 text-left sm:w-max">
								<span className="text-lg font-bold">
									Monthly
								</span>
								<br />
								Download limits apply
							</p>
						</div>
					</div>
					<div className=":grid-cols-2 grid justify-items-center gap-3 pt-8 md:grid-cols-2 lg:grid-cols-3 grid-auto-rows">
						<div
							className={`w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-2xl sm:p-8 ${litePlanOpacity}`}
						>
							<div className="flex flex-col justify-between">
								<div className="mb-2 flex justify-center">
									<Image
										src="https://www.videvo.net/images/videvo-lite.svg"
										alt=""
										width={300}
										height={300}
									/>
								</div>
								<h5 className="font-small mb-4 text-center text-gray-600">
									Premium Videos
								</h5>

								<ul role="list" className="my-7 space-y-5">
									<li className="flex items-center space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											{" "}
											Premium video downloads{" "}
										</span>
									</li>
									<li className="flex space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											5 Premium downloads/month
										</span>
									</li>
									<li className="flex space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											Royalty-free licensing{" "}
										</span>
									</li>
								</ul>
							</div>
							<div className="space-y-3">
								<div className="flex items-baseline justify-center text-black">
									<span className="text-3xl font-semibold">
										$
									</span>
									<span className="text-5xl font-extrabold tracking-tight">
										49
									</span>
									<span className="ml-1 text-xl font-normal text-black">
										/month
									</span>
								</div>

								<button
									type="button"
									className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-5 text-center text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
								>
									{litePlanButtonText}
								</button>
							</div>
						</div>
						<div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-2xl sm:p-8">
							<div className="flex flex-col justify-between">
								<div className="mb-2 flex justify-center">
									<Image
										src="https://www.videvo.net/images/videvo-plus.svg"
										alt=""
										width={300}
										height={300}
									/>
								</div>
								<h5 className="font-small mb-4 text-center text-gray-600">
									Premium Videos
								</h5>

								<ul role="list" className="my-7 space-y-5">
									<li className="flex items-center space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											{" "}
											Premium video downloads{" "}
										</span>
									</li>
									<li className="flex space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											5 Premium downloads/month
										</span>
									</li>
									<li className="flex space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											Royalty-free licensing{" "}
										</span>
									</li>
								</ul>
							</div>
							<div className="space-y-3">
								<div className="flex items-baseline justify-center text-black">
									<span className="text-3xl font-semibold">
										$
									</span>
									<span className="text-5xl font-extrabold tracking-tight">
										49
									</span>
									<span className="ml-1 text-xl font-normal text-black">
										/month
									</span>
								</div>

								<button
									type="button"
									className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-5 text-center text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
								>
									Select plan
								</button>
							</div>
						</div>
						<div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-2xl sm:p-8">
							<div className="flex flex-col justify-between">
								<div className="mb-2 flex justify-center">
									<Image
										src="https://www.videvo.net/images/videvo-pro.svg"
										alt=""
										width={300}
										height={300}
									/>
								</div>
								<h5 className="font-small mb-4 text-center text-gray-600">
									Premium Videos
								</h5>

								<ul role="list" className="my-7 space-y-5">
									<li className="flex items-center space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											{" "}
											Premium video downloads{" "}
										</span>
									</li>
									<li className="flex space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											5 Premium downloads/month
										</span>
									</li>
									<li className="flex space-x-3">
										<svg
											className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
										</svg>
										<span className="text-base font-normal leading-tight text-black">
											Royalty-free licensing{" "}
										</span>
									</li>
								</ul>
							</div>
							<div className="space-y-3 justify-end">
								<div className="flex items-baseline justify-center text-black">
									<span className="text-3xl font-semibold">
										$
									</span>
									<span className="text-5xl font-extrabold tracking-tight">
										49
									</span>
									<span className="ml-1 text-xl font-normal text-black">
										/month
									</span>
								</div>

								<button
									type="button"
									className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-5 text-center text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
								>
									Select plan
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-8">
						<ul className="justify-between sm:flex sm:w-4/6">
							<li className="flex items-center text-black">
								<svg
									className="mr-2 h-7 w-7  bg-green-500 p-2 rounded-full text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M20 6L9 17l-5-5"
									></path>
								</svg>
								<p>Monthly or annual payments</p>
							</li>
							<li className="flex items-center text-black">
								<svg
									className="mr-2 h-7 w-7  bg-green-500 p-2 rounded-full text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M20 6L9 17l-5-5"
									></path>
								</svg>
								<p>Money-back guarantee</p>
							</li>
							<li className="flex items-center text-black">
								<svg
									className="mr-2 h-7 w-7  bg-green-500 p-2 rounded-full text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M20 6L9 17l-5-5"
									></path>
								</svg>
								<p>Cancel anytime</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="FAQ grid place-items-center my-24 space-y-8 py-24 bg-slate-100">
				<h1 className="text-2xl lg:text-4xl font-bold">Frequently asked questions</h1>
				<FAQAccordion />
			</section>
		</main>
	);
}
