// import TrendingTags from "src/components/TrendingTags";
import PopularVideosGrid from "src/components/Home Page/PopularVideosGrid";
import Buttons from "../components/Home Page/Button";
import Footer from '../components/footer'
import Header from '../components/Home Page/header/Header'

export default function Home() {

	// TODO will have to implement global state to determine what we will render, popular videos grid or anything else
	// TODO this will come from Buttons Class as clicking them determines which grid should open 
	return (
		<>
			<Header /> 
			<main>
				<div className="flex justify-center my-4 space-x-6">
					<Buttons />
				</div>
				<PopularVideosGrid />
			</main>
			<Footer />
		</>
	);
}
