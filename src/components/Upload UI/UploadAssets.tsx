"use client";
import React, { useState } from "react";
import { AutoComplete, AutoCompleteProps } from "src/components/AutoComplete";
import { Upload, X } from "lucide-react";
import { Button } from "src/components/ui/button";
import { ButtonProps } from "../../components/ui/button";
export default function UploadAssets() {
  	const [fileName, setFileName] = useState<string>("");

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

	function handleFileChange() {
		console.log("file");
	}

  return (
			<form className="max-w-md w-full bg-white p-8 rounded-lg">
				<div className="mb-6">
					<label className="block font-semibold mb-2">
						Upload File:
					</label>
					<input
						type="file"
						className="border w-full py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
						onChange={handleFileChange}
					/>
				</div>
				<div className="mb-6">
					<label className="block font-semibold mb-2">
						File Name:
					</label>
					<input
						type="text"
						className="border w-full py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
						onChange={(e) => setFileName(e.target.value)}
						value={fileName}
					/>
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

				<Button className="my-4" type="submit">
					<Upload className="mr-2 h-4 w-4" /> Upload
				</Button>
			</form>
  );
}
