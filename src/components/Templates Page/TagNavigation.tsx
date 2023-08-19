import CategoryButton from "../CategoryButton";
import { CategoryButtonsType } from "../TrendingTags";
import TagNavigationDropDown from "./TagNavigationDropDown";


interface props{
	showDropDown?: boolean
	CategoryButtonsProps? : CategoryButtonsType[];
}

export default function TagNavigation({showDropDown, CategoryButtonsProps}: props) {

    	const CategoryButtons: CategoryButtonsType[] = CategoryButtonsProps !== undefined ? CategoryButtonsProps : [
			{ text: "Culture", href: "/" },
			{ text: "Abstract", href: "/" },
			{ text: "City", href: "/" },
			{ text: "Fitness", href: "/" },
			{ text: "Sports", href: "/" },
			{ text: "Religion", href: "/" },
			{ text: "Science", href: "/" },
			{ text: "Space", href: "/" },
			{ text: "Transport", href: "/" },
			{ text: "Technology", href: "/" },
		];

  return (
		<div className="hidden sm:flex py-4 border-b-2 border-slate-200 place-items-center justify-center space-x-4">
			{showDropDown === false ? <CategoryButton href="/" name="All" highlighted={true} /> : <TagNavigationDropDown text="Browse Categories" />}
			<div className="border-r-2 border-slate-100 h-8"></div>
			<div className="flex flex-wrap space-x-2 items-center justify-center overflow-scroll md:overflow-auto">
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
