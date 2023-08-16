import TemplateExplorer, { TemplateExplorerType } from "./TemplateExplorer";

export default function TemplateExplorersFlex() {
	const TemplateExplorerData: TemplateExplorerType[] = [
		{
			image: "https://images.unsplash.com/photo-1691604768829-ad1da34d688d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
			heading: "After Effect Templates",
			punchline:
				"Fully-customizable motion graphics and animation templates for Adobe After Effects.",
			tags: [
				{
					name: "animations",
					href: "/",
				},
				{
					name: "outros",
					href: "/",
				},
				{
					name: "social media",
					href: "/",
				},
				{
					name: "intros",
					href: "/",
				},
				{
					name: "overlays",
					href: "/",
				},
				{
					name: "other",
					href: "/",
				},
				{
					name: "typography",
					href: "/",
				},
			],
		},
		{
			image: "https://images.unsplash.com/photo-1691604768829-ad1da34d688d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
			heading: "Premier Pro Templates",
			punchline:
				"High-impact video editing templates and presets for Adobe Premiere Pro.",
			tags: [
				{
					name: "animations",
					href: "/",
				},
				{
					name: "infographics",
					href: "/",
				},
				{
					name: "social media",
					href: "/",
				},
				{
					name: "intros",
					href: "/",
				},
				{
					name: "lower thirds",
					href: "/",
				},
				{
					name: "Logo Stings",
					href: "/",
				},
				{
					name: "title",
					href: "/",
				},
			],
		},
	];

	return (
		<section className="mx-auto w-11/12">
			<div className="lex grid-cols-2 flex-col gap-6 lg:grid">
				{TemplateExplorerData.map((item, index) => (
					<TemplateExplorer key={index} {...item} />
				))}
			</div>
		</section>
	);
}
