import Link from 'next/link';
import React from 'react'

interface props {
    name: string
    href: string
}

export default function CategoryButton({name, href}: props) {
  return (
		<Link href={href}>
			<button className="px-3 py-3 bg-slate-200 rounded text-black hover:bg-[#2683e8] hover:text-white">
				{name}
			</button>
		</Link>
  );
}
