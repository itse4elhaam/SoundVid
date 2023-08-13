import Link from "next/link";
import CategoryButton from './CategoryButton';

interface CategoryButtonsType {
	text: string;
	href: string
}

export default function TrendingTags() {

	const CategoryButtons: CategoryButtonsType[] = [
		{ text: "People", href: "/" },
		{ text: "Background", href: "/" },
		{ text: "Vfx", href: "/" },
		{ text: "Industry", href: "/" },
		{ text: "Medical", href: "/" },
		{ text: "Sports", href: "/" },
		{ text: "Nature", href: "/" },
		{ text: "Green Screen", href: "/" },
		{ text: "Overlay", href: "/" },
		{ text: "Loop", href: "/" },
		{ text: "Intro", href: "/" },
	];

	return (
		//This is the 2nd last element before footer on Homepage
		//Add following color in tailwind.config.js file: gray-250:"#e3e9ed"

		<div className="mb-16">
			<h3 className="text-4xl font-bold mb-8 items-center text-center">
				Explore Trending Categories
			</h3>
			<div className="flex flex-wrap gap-2 items-center justify-center mx-6 ">
				{CategoryButtons.map((btn, index) => (
					<CategoryButton
						key={index}
						href={btn.href}
						name={btn.text}
					/>
				))}
			</div>
		</div>
	);
}
