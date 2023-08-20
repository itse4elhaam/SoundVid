"use client";
import React, { useEffect, useState } from "react";
import { AutoComplete, AutoCompleteProps } from "src/components/AutoComplete";
import { Upload, X } from "lucide-react";
import { Button } from "src/components/ui/button";
import { ButtonProps } from "../../components/ui/button";
import { collection, addDoc, doc,  getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db } from "src/lib/firebase";

type Categories = 
	{
		id: string,
		value: string
	}


export default function UploadAssets({location}: {location :string}) {
  	const [fileName, setFileName] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true)
	const [selectedItems, setSelectedItems] = useState<Array<Categories> | []>([]);
	const [file, setFile] = useState<File | null>(null)

	// function addSelectedItems(value: string) {
	// 	setSelectedItems((prevState) => [...prevState, value]);
	// }

	function removeItem(value: string) {
		setSelectedItems((prevItems) =>
			prevItems.filter((item) => item.value !== value)
		);
	}

	// const AutoCompleteData: AutoCompleteProps = {
	// 	selectedItemsProp: selectedItems,
	// 	handleSelection: addSelectedItems,
	// 	name: "category",
	// 	options: [
	// 		{
	// 			value: "summer",
	// 		},
	// 		{
	// 			value: "women's day",
	// 		},
	// 		{
	// 			value: "resolutions",
	// 		},
	// 	],
	// };

	function handleFileChange() {
		console.log("file");
	}


	const handleUpload = async () => {
		console.log(file);
		const storage = getStorage();
		const fileExtension = file.name.split(".").pop()

		// if (!file.type.match(/^image\/(png|jpg|jpeg)$/)) {
		  
		//   return;
		// }
	
		const storageRef = ref(storage, `${location}/${fileName}.${fileExtension}`);
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
				// Add a new document with a generated id.
				const selectedItemsValues = selectedItems.map((item) => item.id)
				const docRef = await addDoc(collection(db, location), {
					category: selectedItems,
					file_name: fileName,
					file_url: downloadURL,
					tags:{
						free:true,
						premium:true,
						pro:true,
						published:true
					}
				  })
				  console.log("File added in db",docRef.id)
				  selectedItemsValues.forEach(async (id) => {
					  const uPDocRef = doc(db, 'categories', id);
					  await updateDoc(uPDocRef, {
						file_id: arrayUnion(docRef.id),
					  })
				  })
				  console.log("Categories Updated")
				// await setDoc(doc(db, "videos", "randomId"), {
				// 	category: selectedItems,
				// 	file_name: fileName,
				// 	file_url: downloadURL,
				// 	tags:{
				// 		free:true,
				// 		premium:true,
				// 		pro:true,
				// 		published:true
				// 	}
				//   }).then(() => {
				//   console.log("File Reference is added in db")
				// })
				// .catch(error => {
				//   console.error('Error updating values: ', error);
				// });
			  // eslint-disable-next-line no-console
			  console.log('File available at', downloadURL);
			});
		  },
		);
	  };

	const fetchCategories = async () => {
		setLoading(true)
		const querySnapshot = await getDocs(collection(db, "categories"));
		querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		setSelectedItems((prev) => [...prev, { id: doc.id, value: doc.data().category }])
		});
		setLoading(false)
	}

	console.log(file)

	useEffect(() => {
		fetchCategories()
	},[])


  return (
			<div className="max-w-md w-full bg-white p-8 rounded-lg">
				<div className="mb-6">
					<label className="block font-semibold mb-2">
						Upload File:
					</label>
					<input
						type="file"
						className="border w-full py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
						onChange={(event: React.FormEvent<HTMLInputElement>) => setFile(event.target.files[0])}
					/>
				</div>
				<div className="mb-6">
					<label className="block font-semibold mb-2">
						File Name:
					</label>
					<input
						type="text"
						className="border w-full py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
						onChange={(event: React.FormEvent<HTMLInputElement>) => setFileName(event.target.value)}
						value={fileName}
					/>
				</div>

				{/* <AutoComplete {...AutoCompleteData} /> */}

				{loading ? <p>Loading...</p>:
				<div className="flex flex-wrap">
					{selectedItems &&
						selectedItems.map((item) => (
							<span
								key={item?.id}
								className="badge bg-slate-400 text-white py-1 px-2 rounded-xl my-4 space-x-6 justify-center flex flex-wrap"
							>
								<span className="text-xs">{item?.value}</span>{" "}
								<Button
									variant={"outline"}
									type="reset"
									className="p-0 w-fit h-fit bg-transparent"
									onClick={() => removeItem(item?.value)}
								>
									<X className="h-4 w-4" />
								</Button>
							</span>
						))}
				</div>}


				<Button className="my-4" type="submit" onClick={handleUpload}>
					<Upload className="mr-2 h-4 w-4" /> Upload
				</Button>
			</div>
  );
}
