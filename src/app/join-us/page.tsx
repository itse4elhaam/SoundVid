import NavBar from "src/components/Home Page/header/NavBar";
import Footer from "src/components/footer";
import JoinUsMain from '../../components/Join Us/Main';

export default function page() {

    // fix navbar z-index
	return (
		<>
				<header>

					<NavBar />
				</header>
			{/* <NavBar ShowSearchBar={true} /> */}
			<JoinUsMain />
			
			<Footer />
		</>
	);
}
