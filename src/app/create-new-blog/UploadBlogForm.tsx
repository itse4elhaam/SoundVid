"use client"
import { useState } from "react";
import RichTextEditor from "src/components/Blog/RichTextEditor";
import { AutoComplete, AutoCompleteProps } from "src/components/AutoComplete";
import { Button } from "src/components/ui/button";
import { PenSquare, X } from "lucide-react";

export default function UploadBlogForm() {

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

	function addSelectedItems(value: string) {
		setSelectedItems((prevState) => [...prevState, value]);
	}
	function removeItem(value: string) {
		setSelectedItems((prevItems) =>
			prevItems.filter((item) => item !== value)
		);
	}

	const AutoCompleteData: AutoCompleteProps = {
		selectedItemsProp: selectedItems,
		handleSelection: addSelectedItems,
		name: "category",
		options: [
			{
				value: "summer",
			},
			{
				value: "women's day",
			},
			{
				value: "resolutions",
			},
		],
	};

  return (
		<form className="space-y-4">
			<div className="mb-6">
				<label className="block font-semibold mb-2">Image:</label>
				<input
					type="file"
					className="border w-full py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
				/>
			</div>
			<div>
				<label htmlFor="title" className="block font-bold">
					Title
				</label>
				<input
					type="text"
					id="title"
					name="title"
					className="w-full px-4 py-2 border rounded"
				/>
			</div>
			<div>
				<label htmlFor="content" className="block font-bold">
					Content
				</label>
				<RichTextEditor />
			</div>
			<AutoComplete {...AutoCompleteData} />
			<div className="flex flex-wrap">
				{selectedItems &&
					selectedItems.map((item, index) => (
						<span
							key={index}
							className="badge bg-slate-400 text-white py-1 px-2 rounded-xl my-4 space-x-6 justify-center flex flex-wrap"
						>
							<span className="text-xs">{item}</span>{" "}
							<Button
								variant={"outline"}
								type="reset"
								className="p-0 w-fit h-fit bg-transparent"
								onClick={() => removeItem(item)}
							>
								<X className="h-4 w-4" />
							</Button>
						</span>
					))}
			</div>

			<div>
				<Button className="my-4" type="submit">
					<PenSquare className="mr-2 h-4 w-4" /> Create Blog
				</Button>
			</div>
		</form>
  );
}
