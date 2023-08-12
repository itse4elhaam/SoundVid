import Link from "next/link";
import DropDown, { DropDownProps } from "./DropDown";

export default function NavBar() {
	// update the paths later on

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
		<nav className="flex justify-between items-center py-3 px-8 font-semibold text-white bg-black bg-opacity-25">
			<div className="logo-menu-items flex items-center space-x-4">
				<div className="font-bold text-2xl text-gray-400">Logo</div>

				<div className="flex space-x-4 items-center ">
					{MenuData.map((item, index) => (
						<DropDown key={index} {...item} />
					))}
					<div className="flex space-x-4">
						<Link
							className="opacity-75 text-white hover:opacity-100"
							href="/"
						>
							Collections
						</Link>
						<Link
							className="opacity-75 text-white hover:opacity-100"
							href="/"
						>
							Help
						</Link>
					</div>
				</div>
			</div>
			<div className="register-info flex space-x-4 items-center">
				<button className="border-2 border-white h-fit px-4 py-2 rounded-2xl">
					Join Vivedo
				</button>
				<Link href="/">Log in</Link>
			</div>
		</nav>
	);
}
