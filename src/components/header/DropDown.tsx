import Link from "next/link";

interface element {
    name: string;
    href: string
}

export interface DropDownProps {
	name: string;
	heading: element;
	elements: element[];
	everythingBold: boolean;
}

export default function DropDown({ name, heading, elements, everythingBold }: DropDownProps) {


	const weight = everythingBold ? "font-semibold" : "font-normal";

	return (
		<>
			<div className="flex flex-col space-y-10 relative text-white font-semibold">
					<button type="button" className="peer group px-5 py-2 opacity-75 hover:opacity-100 flex">
						<div>{name}</div>
						<div className="svg-wrapper">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-chevron-down transition-transform duration-75 group-hover:rotate-180"
							>
								<path d="m6 9 6 6 6-6" />
							</svg>
						</div>
					</button>

					<div className="hidden bg-white text-black peer-hover:flex hover:flex min-w-max flex-col drop-shadow-lg -top-1 absolute rounded-lg ">
						<strong className="px-5 py-3 hover:bg-gray-200 rounded-lg">
							<Link href={heading.href}>{heading.name}</Link>
						</strong>
						{elements.map((element, index) => (
							<Link
								key={index}
								href={element.href}
								className={`${weight} px-5 py-3 hover:bg-gray-200 `}
							>
								{element.name}
							</Link>
						))}
					</div>
			</div>
		</>
	);
}
