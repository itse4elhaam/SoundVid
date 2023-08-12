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
				<div>
					<button className="peer px-5 py-2 opacity-75 hover:opacity-100">
						{name}
					</button>

					<div className="hidden bg-white text-black peer-hover:flex hover:flex min-w-max flex-col drop-shadow-lg top-8 absolute rounded-lg ">
						<strong className="px-5 py-3 hover:bg-gray-200">
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
			</div>
		</>
	);
}
