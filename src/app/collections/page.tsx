import CollectionsMain from "src/components/Collections/Main";
import NavBar from "src/components/Home Page/header/NavBar";
import Footer from "src/components/footer";


export default function page() {
	return (
		<>
			<NavBar />
            <CollectionsMain />
			<Footer />
		</>
	);
}
