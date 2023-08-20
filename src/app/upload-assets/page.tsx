
import UploadTabs  from "src/components/Upload UI/UploadTabs";
import Footer from "../../components/footer";
import NavBar from "src/components/Home Page/header/NavBar";


export default function UploadForm() {

	return (
		<>
			<NavBar SolidBg={true} />
			<main className="min-h-[100vh] grid place-content-center my-16">
				<UploadTabs />
			</main>
			<Footer />
		</>
	);
}
