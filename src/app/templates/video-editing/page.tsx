import NavBar from "src/components/Home Page/header/NavBar";
import TemplateHeroContent from "src/components/Templates Page/TemplateHeroContent";
import TemplateExplorersFlex from "src/components/Templates Page/TemplateExplorersFlex";
import Footer from "src/components/footer";
import TemplateGrid from "src/components/Templates Page/Grid"


export default function VideoEditingTemplates(){
    return (
		<>
			<header>
				<NavBar />
				<TemplateHeroContent
					heading="Video editing templates"
					punchline="Discover thousands of high-quality motion graphics templates and animations. Easy to customize video templates for logo animations, promo content, animated text, titles or transitions."
				/>
			</header>
			<main className="min-h-[100vh]">
				<TemplateExplorersFlex />

				<TemplateGrid />
			</main>
			<Footer />
		</>
	);
}