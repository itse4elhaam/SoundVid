"use client";

import React, { useRef, useState } from "react";
import Footer from '../../components/footer';
import Autosuggest, {
	ChangeEvent,
	SuggestionSelectedEventData,
} from "react-autosuggest";
import NavBar from "src/components/Home Page/header/NavBar";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { db } from "../../lib/firebase";

export default function UploadForm() {
	// todo: doc this code latter on
	// const [file, setFile] = useState<File | null>(null);
	const [tags, setTags] = useState<string[]>([]);
	const [categories, setCategories] = useState<string[]>([]);
	const [tagInput, setTagInput] = useState<string>("");
	const [categoryInput, setCategoryInput] = useState<string>("");
	const [fileName, setFileName] = useState<string>("")


	const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.files[0]);
		const file = event.target.files[0];
		const storage = getStorage();
		const fileExtensionForVideo = file.name.split(".").pop()
		const fileExtensionForImage = file.name.split(".").pop()

	
		// Check if the file is an image or handle error on frontEnd
		// if (!file.type.match(/^image\/(png|jpg|jpeg)$/)) {
		  
		//   return;
		// }
	
		const storageRef = ref(storage, `videos/${fileName}.${fileExtensionForVideo}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
		// Listen for state changes, errors, and completion of the upload.
		uploadTask.on(
		  'state_changed',
		  snapshot => {
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log('Upload is ' + progress + '% done');
			switch (snapshot.state) {
			  case 'paused':
				console.log('Upload is paused');
				break;
			  case 'running':
				console.log('Upload is running');
				break;
			}
		  },
		  error => {
			// A full list of error codes is available at
			// https://firebase.google.com/docs/storage/web/handle-errors
			console.log(error);
			switch (error.code) {
			  case 'storage/unauthorized':
				// User doesn't have permission to access the object
				break;
			  case 'storage/canceled':
				// User canceled the upload
				break;
			  case 'storage/unknown':
				// Unknown error occurred, inspect error.serverResponse
				break;
			}
		  },
		  () => {
			// Upload completed successfully, now we can get the download URL
			getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
				// Add a new document in collection "videos"
				await setDoc(doc(db, "videos", "randomId"), {
					category: [],
					file_name: fileName,
					file_url: downloadURL,
					tags:{
						free:true,
						premium:true,
						pro:true,
						published:true
					}
				  }).then(() => {
				  console.log("File Reference is added in db")
				})
				.catch(error => {
				  console.error('Error updating values: ', error);
				});
			  // eslint-disable-next-line no-console
			  console.log('File available at', downloadURL);
			});
		  },
		);
	  };


	// Simulated data for autocomplete
	const allTags: string[] = ["tag1", "tag2", "tag3" ];
	const allCategories: string[] = [
		"category1",
		"category2",
		"category3" 
	];

	const handleFileChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const uploadedFile = event.target.files ? event.target.files[0] : null;
		setFile(uploadedFile);
	};

	// Change the type of the event parameter to React.ChangeEvent<HTMLInputElement>
	const handleTagInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		{ newValue }: ChangeEvent
	): void => {
		setTagInput(newValue);
	};

	const handleCategoryInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		{ newValue }: ChangeEvent
	): void => {
		setCategoryInput(newValue);
	};

	const handleTagAdd = (): void => {
		if (!tags.includes(tagInput)) {
			setTags([...tags, tagInput]);
			setTagInput("");
		}
	};

	const handleCategoryAdd = (): void => {
		if (!categories.includes(categoryInput)) {
			setCategories([...categories, categoryInput]);
			setCategoryInput("");
		}
	};

	const renderSuggestion = (suggestion: string): JSX.Element => (
		<div>{suggestion}</div>
	);

	const handleTagSuggestionSelected = (
		event: React.FormEvent<HTMLInputElement>,
		{ suggestion }: SuggestionSelectedEventData<string>
	): void => {
		setTagInput(suggestion);
	};

	const handleCategorySuggestionSelected = (
		event: React.FormEvent<HTMLInputElement>,
		{ suggestion }: SuggestionSelectedEventData<string>
	): void => {
		setCategoryInput(suggestion);
	};

	const handleTagSuggestionsFetchRequested = ({
		value,
	}: {
		value: string;
	}): void => {
		// Simulate fetching suggestions (replace with your actual API call)
		const filteredTags = allTags.filter((tag) =>
			tag.toLowerCase().includes(value.toLowerCase())
		);
		setTagSuggestions(filteredTags);
	};

	const handleCategorySuggestionsFetchRequested = ({
		value,
	}: {
		value: string;
	}): void => {
		// Simulate fetching suggestions (replace with your actual API call)
		const filteredCategories = allCategories.filter((category) =>
			category.toLowerCase().includes(value.toLowerCase())
		);
		setCategorySuggestions(filteredCategories);
	};

	const [tagSuggestions, setTagSuggestions] = useState<string[]>([]);
	const [categorySuggestions, setCategorySuggestions] = useState<string[]>(
		[]
	);

	const tagInputRef = useRef<HTMLInputElement | null>(null);
	const categoryInputRef = useRef<HTMLInputElement | null>(null);

	// ... (other functions and data)

	const handleKeyPress = (
		event: React.KeyboardEvent<HTMLElement>,
		addFunction: () => void
	): void => {
		if (event.key === "Enter") {
			event.preventDefault();
			addFunction();
		}
	};
	return (
		<>
			<NavBar SolidBg={true} />
			<main className="flex justify-center items-center h-screen bg-gray-100">
				<div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
					<div className="mb-6">
						<label className="block font-semibold mb-2">
							Upload File:
						</label>
						<input
							type="file"
							className="border w-full py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
							onChange={e => handleUpload(e)}
						/>
					</div>

					<div className="mb-6">
						<label className="block font-semibold mb-2">
							Add Tags:
						</label>
						<Autosuggest
							suggestions={tagSuggestions}
							onSuggestionsFetchRequested={({ value }) =>
								handleTagSuggestionsFetchRequested({ value })
							}
							onSuggestionsClearRequested={() =>
								setTagSuggestions([])
							}
							getSuggestionValue={(suggestion) => suggestion}
							renderSuggestion={renderSuggestion}
							inputProps={{
								value: tagInput,
								onChange:
									handleTagInputChange as Autosuggest.InputProps<string>["onChange"],
								onKeyDown: (e) =>
									handleKeyPress(e, handleTagAdd),
								ref: tagInputRef,
								className:
									"w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300",
							}}
							onSuggestionSelected={handleTagSuggestionSelected}
						/>
						<button
							className="mt-2 py-1 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
							onClick={handleTagAdd}
						>
							Add Tag
						</button>
						<div className="mt-2">
							{tags.map((tag, index) => (
								<span
									key={index}
									className="inline-block border py-1 px-2 m-1 rounded bg-gray-200"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
					<div>
						<label className="block font-semibold mb-2">
							Add Categories:
						</label>
						<Autosuggest
							suggestions={categorySuggestions}
							onSuggestionsFetchRequested={({ value }) =>
								handleCategorySuggestionsFetchRequested({
									value,
								})
							}
							onSuggestionsClearRequested={() =>
								setCategorySuggestions([])
							}
							getSuggestionValue={(suggestion) => suggestion}
							renderSuggestion={renderSuggestion}
							inputProps={{
								value: categoryInput,
								onChange:
									handleCategoryInputChange as Autosuggest.InputProps<string>["onChange"],
								onKeyDown: (e) =>
									handleKeyPress(e, handleCategoryAdd),
								ref: categoryInputRef,
								className:
									"w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300",
							}}
							onSuggestionSelected={
								handleCategorySuggestionSelected
							}
						/>
						<button
							className="mt-2 py-1 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
							onClick={handleCategoryAdd}
						>
							Add Category
						</button>
						<div className="mt-2">
							{categories.map((category, index) => (
								<span
									key={index}
									className="inline-block border py-1 px-2 m-1 rounded bg-gray-200"
								>
									{category}
								</span>
							))}
						</div>
					</div>
					<div>
						<label className="block font-semibold mb-2">
							Add File Name:
						</label>
						<input
							placeholder="Enter your uplaod file name"
							onChange={e => setFileName(e.target.value)}
							className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
						/>
					</div>
					<div>
						<button
							className="mt-2 py-1 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
							// onClick={handleUpload}
						>
							Upload File
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
