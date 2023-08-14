import {
	Accordion as ShadAccordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "src/components/ui/accordion";

export function FAQAccordion() {
	return (
		<ShadAccordion type="single" collapsible className="w-2/5">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it
					if you prefer.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it
					if you prefer.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it
					if you prefer.
				</AccordionContent>
			</AccordionItem>
		</ShadAccordion>
	);
}
