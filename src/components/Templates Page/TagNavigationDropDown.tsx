"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface props {
	text: string;
}

export default function TagNavigationDropDown({ text }: props) {
	const menuItems = [
		"Culture",
		"Abstract",
		"City",
		"Fitness",
		"Sports",
		"Religion",
		"Science",
		"Space",
		"Transport",
		"Technology",
		"Entertainment",
		"Food",
		"Family",
		"Holiday",
		"Military",
		"Green  Screen",
		"Business",
		"Animated Backgrounds",
		"People",
		"Nature",
		"Medical",
		"Animals",
		"Industry",
		"VFX",
	];

	return (
		<div className="w-56 text-right">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center rounded-md bg-slate-800 px-4 py-4 text-sm font-medium text-white focus:outline-none hover:bg-slate-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						{text}
						<ChevronDownIcon
							className="ml-2 -mr-1 h-5 w-5 text-sky-200 hover:text-sky-100"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 grid grid-cols-5 grid-rows-5">
							{menuItems.map((item, index) => (
								<Menu.Item key={index}>
									{({ active }) => (
										<button
											className={`${
												active
													? "bg-sky-500 text-white"
													: "text-gray-900"
											} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
										>
											{item}
										</button>
									)}
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
