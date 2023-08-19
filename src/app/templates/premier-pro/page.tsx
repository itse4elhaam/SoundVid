import NavBar from "src/components/Home Page/header/NavBar";
import TemplateHeroContent from "src/components/Templates Page/TemplateHeroContent";
import TemplateExplorersFlex from "src/components/Templates Page/TemplateExplorersFlex";
import Footer from "src/components/footer";
import TemplateGrid, {
	GridDataObjArray,
} from "src/components/Templates Page/Grid";
import TagNavigation from "src/components/Templates Page/TagNavigation";
import { CategoryButtonsType } from "src/components/TrendingTags";
import Pagination from "src/components/Pagination";

export default function Page() {

  const Tags: CategoryButtonsType[] = [
		{ text: "Animations", href: "/" },
		{ text: "Infographics", href: "/" },
		{ text: "Social Media", href: "/" },
		{ text: "Overlays", href: "/" },
		{ text: "Logo Stings", href: "/" },
		{ text: "Lower Thirds", href: "/" },
		{ text: "Titles", href: "/" },
		{ text: "Topography", href: "/" },
  ];

  	const AfterEffectsGridData: GridDataObjArray = {
		heading: "Premier Pro Templates",
		btnText: "More Premier Pro Templates",
		showCountOnly: true,
		count: 141,
		GridData: [
			{
				image: "image-url-1",
				heading: "Item 1",
				labels: [
					{ name: "AB", black: true },
					{ name: "BD", black: false },
				],
			},
			{
				image: "image-url-2",
				heading: "Item 2",
				labels: [
					{ name: "CG", black: true },
					{ name: "DF", black: true },
				],
			},
			{
				image: "image-url-3",
				heading: "Item 3",
				labels: [
					{ name: "TY", black: false },
					{ name: "KL", black: false },
				],
			},
			{
				image: "image-url-4",
				heading: "Item 4",
				labels: [
					{ name: "SK", black: true },
					{ name: "GY", black: true },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-5",
				heading: "Item 5",
				labels: [
					{ name: "CG", black: false },
					{ name: "CT", black: false },
				],
			},
			{
				image: "image-url-20",
				heading: "Item 20",
				labels: [
					{ name: "XY", black: false },
					{ name: "CJ", black: true },
				],
			},
		],
	};

  return (
		<>
			<header>
				<NavBar />
				<TemplateHeroContent
					heading="Premier Pro templates"
					punchline=" "
				/>
			</header>
			<main className="min-h-[100vh] my-8">
				<TagNavigation
					CategoryButtonsProps={Tags}
					showDropDown={false}
				/>
				<TemplateGrid {...AfterEffectsGridData} />
        <Pagination currentPage={1} totalPages={169} />
				<TemplateExplorersFlex />
			</main>

			<Footer />
		</>
  );
}
  