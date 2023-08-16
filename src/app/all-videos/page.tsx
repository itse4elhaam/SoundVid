import TagNavigation from 'src/components/Templates Page/TagNavigation';
import NavBar from 'src/components/Home Page/header/NavBar';
import Footer from 'src/components/footer';
import FilterParent from 'src/components/Filter/FilterParent';

export default function page() {
  return (
		<>
			<header className="flex space-y-6">
				<div className="bg-slate-800 h-[10vh]">
					<NavBar SolidBg={true} />
				</div>
			</header>
			<main className="space-y-6 flex flex-col h-[80vh] mx-16">
				<TagNavigation />

                <FilterParent />
			</main>

			<Footer />
		</>
  );
}
