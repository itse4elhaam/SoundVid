import Footer from "src/components/footer";
import NavBar from "../../components/Home Page/header/NavBar";
import BlogMain from "../../components/Blog/BlogMain";

export default function BlogPage() {
	return (
		<>
			<header>
				<NavBar />
				<section className="flex h-[40vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3JzJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60')] bg-cover bg-center">
					<div className="flex flex-col h-full w-11/12 items-center justify-center space-y-3 text-white">
						<h1 className="text-center text-4xl font-bold lg:text-5xl">
							The Company Blog
						</h1>
						<h2 className="mx-auto w-4/6 text-center text-lg">
							Latest News and Articles
						</h2>
					</div>
				</section>
			</header>
			<BlogMain />
			<Footer />
		</>
	);
}
