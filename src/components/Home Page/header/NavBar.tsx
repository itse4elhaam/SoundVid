"use client";

import Link from "next/link";
import DropDown, { DropDownProps } from "./DropDown";
import { useState, useEffect } from "react";
import SearchInput from "src/components/SearchInput";

interface props{
	ShowSearchBar?: boolean;
}

export default function NavBar({ShowSearchBar}: props) {
	// update the paths later on

	const [bgOpacity, setbgOpacity] = useState(25);

	const searchDisplay = ShowSearchBar ? "block" : "hidden"

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 0) {
				setbgOpacity(100);
			} else {
				setbgOpacity(25);
			}
		}

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	const MenuData: DropDownProps[] = [
		{
			name: "Videos",
			heading: {
				name: "All Videos",
				href: "/",
			},
			elements: [
				{
					name: "Footage",
					href: "/",
				},
				{
					name: "Motion Graphics",
					href: "/",
				},
			],
			everythingBold: false,
		},
		{
			name: "Templates",
			heading: {
				name: "All Templates",
				href: "/",
			},
			elements: [
				{
					name: "After Effect Templates",
					href: "/",
				},
				{
					name: "Premiere Pro Templates",
					href: "/",
				},
				{
					name: "DaVinci Resolve Templates",
					href: "/",
				},
				{
					name: "Final Cut Pro Templates",
					href: "/",
				},
				{
					name: "Motion Graphics Templates",
					href: "/",
				},
			],
			everythingBold: false,
		},
		{
			name: "Audio",
			heading: {
				name: "Music",
				href: "/",
			},
			elements: [
				{
					name: "Sound Effects",
					href: "/",
				},
			],
			everythingBold: true,
		},
	];

	return (
		<nav
			className={`flex z-10 justify-between text-sm items-center py-3 px-8 fixed top-0 w-full font-semibold text-white bg-slate-800 bg-opacity-${bgOpacity}`}
		>
			<div className="logo-menu-items flex items-center space-x-4">
				<div className="font-bold text-2xl text-gray-400">Logo</div>

				<div className={`${searchDisplay}`}>
					<SearchInput />
				</div>

				<div className="space-x-4 items-center hidden md:flex ">
					{MenuData.map((item, index) => (
						<DropDown key={index} {...item} />
					))}
					<Link
						className="opacity-75 cursor-pointer text-white hover:opacity-100"
						href="/"
					>
						Collections
					</Link>
					<Link
						className="opacity-75 cursor-pointer text-white hover:opacity-100"
						href="/help"
					>
						Help
					</Link>
				</div>
			</div>
			<div className="register-info flex space-x-4 items-center">
				<button
					type="button"
					className="cursor-pointer border-2 border-white h-fit px-4 py-2 rounded-2xl opacity-90 hover:opacity-100"
				>
					Join Vivedo
				</button>
				<Link
					className="cursor-pointer opacity-90 hover:opacity-100"
					href="/"
				>
					Log in
				</Link>
			</div>
		</nav>
	);
}
