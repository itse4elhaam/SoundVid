import TrendingTags from "src/components/TrendingTags";

import Footer from "../components/footer";
import Header from "../components/Home Page/header/Header";
import About from "src/components/Home Page/About";
import BlogSection from "../components/Home Page/BlogSection";
import ShowCase from "src/components/Home Page/ShowCase";

export default function Home() {
	// TODO will have to implement global state to determine what we will render, popular videos grid or anything else
	// TODO this will come from Buttons Class as clicking them determines which grid should open




	return (
		<>
			<Header />
			<main>
<ShowCase />
				<BlogSection />
				<About />
				<TrendingTags />
			</main>
			<Footer />
		</>
	);
}
