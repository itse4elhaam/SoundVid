import TagNavigation from "src/components/Templates Page/TagNavigation";
import NavBar from "src/components/Home Page/header/NavBar";
import Footer from "src/components/footer";
import FilterParent from "src/components/Filter/FilterParent";
import SortDropDown from "src/components/SortDropDown";
import VideosGrid from "src/components/Home Page/VideosGrid";
import Slider, {
	SliderProps,
} from "src/components/Elements/Slider/Slider";
import ExploreMoreButton from "src/components/Home Page/ExploreMoreButton";
import Pagination from "src/components/Pagination";
import TrendingTags, {
	CategoryButtonsType,
} from "src/components/TrendingTags";

export default function page() {
	const anchorLinks: CategoryButtonsType[] = [
		{
			href: "https://www.videvo.net/stock-video-footage/1080p/",
			text: "1080p",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/nature/",
			text: "nature",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/outdoors/",
			text: "outdoors",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/people/",
			text: "people",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/summer/",
			text: "summer",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/landscape/",
			text: "landscape",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/beautiful/",
			text: "beautiful",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/sky/",
			text: "sky",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/person/",
			text: "person",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/business/",
			text: "business",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/travel/",
			text: "travel",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/scenery/",
			text: "scenery",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/scenic/",
			text: "scenic",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/day/",
			text: "day",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/office/",
			text: "office",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/outdoor/",
			text: "outdoor",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/background/",
			text: "background",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/vacation/",
			text: "vacation",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/light/",
			text: "light",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/woman/",
			text: "woman",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/beauty/",
			text: "beauty",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/man/",
			text: "man",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/tourism/",
			text: "tourism",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/urban/",
			text: "urban",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/forest/",
			text: "forest",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/aerial-view/",
			text: "aerial view",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/clouds/",
			text: "clouds",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/water/",
			text: "water",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/female/",
			text: "female",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/sun/",
			text: "sun",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/male/",
			text: "male",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/city/",
			text: "city",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/wild/",
			text: "wild",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/environment/",
			text: "environment",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/natural/",
			text: "natural",
		},
		{
			href: "https://www.videvo.net/stock-video-footage/green/",
			text: "green",
		},
	];
	const sliderProps: SliderProps[] = [
		{
			slidesPerView: 8,
			totalSlides: [
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
			],
		},
		{
			slidesPerView: 8,
			totalSlides: [
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
				{
					name: "A random one",
					title: "Country",
					imgSrc: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
				},
			],
		},
	];
	return (
		<>
			<header className="flex space-y-6">
				<div className="bg-slate-800 h-[10vh]">
					<NavBar SolidBg={true} />
				</div>
			</header>
			<main className="space-y-6 flex flex-col min-h-[80vh] h-max mx-16">
				<TagNavigation />

				<div className="flex justify-between">
					<FilterParent />
					<SortDropDown />
				</div>

				<VideosGrid type="Popular Videos" showButton={false} />
				<div className="slider-wrapper">
					<div className="flex justify-between">
						<h4 className="text-2xl font-semibold">
							Featured Collections
						</h4>

						<ExploreMoreButton
							text="see all collections"
							href="/collections"
						/>
					</div>

					<Slider {...sliderProps[0]} />
				</div>

				<VideosGrid type="Popular Videos" />
				<Pagination currentPage={1} totalPages={169} />

				<div className="my-6">
					<TrendingTags CategoryButtonsProps={anchorLinks} />
				</div>
			</main>
			<Footer />
		</>
	);
}
