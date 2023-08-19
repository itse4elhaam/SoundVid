import Link from 'next/link';
import React from 'react'

interface props {
	name: string;
	href: string;
	highlighted?: boolean;
}

export default function CategoryButton({name, href, highlighted}: props) {

	const btnColor = highlighted ? {bg: "bg-blue-500", color: "text-white" } : {bg: "bg-slate-200", color: "text-black" }; 

  return (
		<Link href={href}>
			<button
				className={`px-3 py-3 ${btnColor.bg} rounded ${btnColor.color} hover:bg-[#2683e8] hover:text-white`}
			>
				{name}
			</button>
		</Link>
  );
}
