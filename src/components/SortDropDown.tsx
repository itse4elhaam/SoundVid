"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const sortTypes = [{ sortType: "Popular" }, { sortType: "Newest" }];

export default function SortDropDown() {
	const [selected, setSelected] = useState(sortTypes[0]);

	return (
		<div className="w-max h-full flex place-content-center items-center space-x-4 font-semibold">
			<h6 className="font-semibold text-gray-500">Sort</h6>
			<Listbox value={selected} onChange={setSelected}>
				<div className="relative mt-1">
					<Listbox.Button className="w-max h-full cursor-pointer py-2 pl-3 pr-10 sm:text-sm border rounded-lg">
						<span className="relative text-black truncate block">
							{selected.sortType}
						</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronDownIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute mt-1 max-h-60 min-h-[5rem] w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{sortTypes.map((item, index) => (
								<Listbox.Option
									key={index}
									className={({ active }) =>
										`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
											active
												? "bg-blue-100 text-blue-900"
												: "text-gray-900"
										}`
									}
									value={item}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected
														? "font-medium"
														: "font-normal"
												}`}
											>
												{item.sortType}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
													<CheckIcon
														className="h-5 w-5"
														aria-hidden="true"
													/>
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
