
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYJxv7--6VO-opcgn3Z3cDRxkeAySyMoM",
  authDomain: "videvo-project.firebaseapp.com",
  projectId: "videvo-project",
  storageBucket: "videvo-project.appspot.com",
  messagingSenderId: "455480580348",
  appId: "1:455480580348:web:12010bc9f49526c9785f79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);