import NavBar from "src/components/Home Page/header/NavBar";
import Footer from "src/components/footer";
import UploadBlogForm from "src/components/Blog/UploadBlogForm";

export default function page() {
  return (
		<>
			<NavBar />
			<header className="bg-blue-500 text-white h-[40vh] flex flex-col items-center justify-center">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold">Blog CMS</h1>
					<p className="mt-2">
						Create and manage your blog posts with ease
					</p>
				</div>
			</header>

			<section className="container mx-auto mt-8 p-4 bg-white rounded shadow-lg w-10/12">
				<h2 className="text-2xl font-bold mb-4">
					Create a New Blog Post
				</h2>
      <UploadBlogForm />
			</section>

			<section className="container mx-auto mt-8 p-4 bg-white rounded shadow-lg">
				<h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
				<ul className="space-y-2">
					<li className="flex items-center">
						<span className="text-blue-500 mr-2">📝</span>
						<a href="#" className="hover:underline">
							Introduction to Tailwind CSS
						</a>
					</li>
					<li className="flex items-center">
						<span className="text-blue-500 mr-2">📝</span>
						<a href="#" className="hover:underline">
							Getting Started with React Hooks
						</a>
					</li>
					<li className="flex items-center">
						<span className="text-blue-500 mr-2">📝</span>
						<a href="#" className="hover:underline">
							Best Practices for Responsive Web Design
						</a>
					</li>
				</ul>
			</section>

			<Footer />
		</>
  );
}
