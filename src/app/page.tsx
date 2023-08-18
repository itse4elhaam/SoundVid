import TrendingTags, { CategoryButtonsType } from "src/components/TrendingTags";
import Footer from "src/components/footer";
import Header from "src/components/Home Page/header/Header";
import About from "src/components/Home Page/About";
import BlogSection from "src/components/Home Page/BlogSection";
import ShowCase from "src/components/Home Page/ShowCase";
import WhyUs from "src/components/Home Page/WhyUs";
import Pagination from "src/components/Pagination";

export default function Home() {




	// TODO will have to implement global state to determine what we will render, popular videos grid or anything else
	// TODO this will come from Buttons Class as clicking them determines which grid should open

	function onPageChange(page: number){
		console.log(page)
	}

	return (
		<>
			<Header />
			<main>
				<ShowCase />
				<BlogSection />
				<WhyUs />
				<About />
				<TrendingTags />
				{/* <Pagination currentPage={5} totalPages={169} /> */}
			</main>
			<Footer  />
		</>
	);
}
