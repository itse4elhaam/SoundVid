import React from 'react'
import { Accordion } from '../Accordian';

export default function WhyUs() {
  return (
		<div className="grid place-items-center mx-10">
			<h2 className="text-2xl font-bold mb-9 md:text-3xl lg:text-4xl">
				Why Us
			</h2>

			<Accordion />
		</div>
  );
}
