import Link from 'next/link';

export default function HelpPageHeader() {
  return (
		<header className="flex justify-end px-4 py-6">
			<nav className="space-x-8">
				<Link className="font-bold hover:text-sky-500" href={"/"}>
					Home
				</Link>
				<Link
					className="rounded border border-neutral-400 p-2 font-bold text-sky-500 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
					href={"/"}
				>
					Contact
				</Link>
			</nav>
		</header>
  );
}
