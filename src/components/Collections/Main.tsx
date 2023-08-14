import CollectionsGrid from '../Home Page/CollectionsGrid';
export default function CollectionsMain(){

    return (
		<main>
			<section className="-z-10 flex h-[40vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1651600442386-4513156ca95a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpZGVvJTIwZWRpdGluZyUyMHNldHVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60')] bg-cover bg-center bg-no-repeat">
				<div className="container mx-auto text-center font-bold">
					<h1 className="text-3xl text-white md:text-4xl">
						Collections
					</h1>
				</div>
			</section>
			<section>
				<div>
					<h1 className="mt-8 text-center text-2xl font-bold md:text-3xl">
						Newest Collections
					</h1>
				</div>

				<CollectionsGrid />


			</section>
			<div className="w-screen grid place-items-center mb-6">
				<button className="bg-sky-500 transition-all duration-200 text-white font-semibold py-2 px-6 rounded-full hover:bg-sky-400 active:scale-95">
					Load More
				</button>
			</div>
		</main>
	);

}