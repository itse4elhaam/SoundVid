'use client'
import { useEffect, useState } from "react";
import { app } from "../../../lib/firebase"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { db} from "../../../lib/firebase";
import { doc, setDoc  } from "firebase/firestore";


export default function TestPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // Use these two state if you want to load something on UI for "loading / error message"
    // const [loading, setLoading]= useState(false)
    // const [error, setError] = useState("")
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    // TODO: NEED TO ADD LOGIC TO CHECK userCredential.user.uid from database first before adding 
    // BEFORE ADDING IT UP INSIDE THE DATABASE

    // GOOGLE SIGN IN
    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then(async userCredential => {
            if (userCredential.user) {
                // Also we need to add the data of the user which tried to register in your database so we can keep track of our things
                await addUsertoDb(userCredential.user.uid, userCredential.user.email)
              }
            //   REDIRECT TO HOME PAGE LOGIN
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({"errorCode": errorCode, "errorMessage": errorMessage})
        })
      }
  
      // FACEBOOK SIGN IN
      // SIGN IN WITH FACEBOOK WONT WORK RN BCZ WE ARE MISSING SOME
      // FACEBOOK DEVELOPER END SECRET KEYS FOR IT TO WORK ON WEBSITE
      const signUpWithFacebook = () => {
        signInWithPopup(auth, facebookProvider).then(async userCredential => {
            if (userCredential.user) {
                // Also we need to add the data of the user which tried to register in your database so we can keep track of our things
                await addUsertoDb(userCredential.user.uid, userCredential.user.email)
              }
            //   REDIRECT TO HOME PAGE LOGIN
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({"errorCode": errorCode, "errorMessage": errorMessage})
        })
      }


    // USER SIGN UP / REGISTRATION FUNCTION
    const createUser = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // User sign in automatically and you can get it's detail by using console.log(userCredential.user)
            // After signup we need to reroute the user by using "next/useRouter" to some other page which will show 
            //  "check your email address for email verification" also there would be another page to go back or push back to login page
            if (userCredential.user) {
                // Send verification email
                sendEmailVerification(userCredential.user);
                console.log('Verification email sent');
                // Also we need to add the data of the user which tried to register in your database so we can keep track of our things
                await addUsertoDb(userCredential.user.uid, userCredential.user.email)
              }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({"errorCode": errorCode, "errorMessage": errorMessage})
        });
    }

    const addUsertoDb = async (uid, email) => {
        // Default user data of newly created user in firebaseDB (firestore)
        const data = {
            uid: uid,
            role: "user",
            subscription: {
                free: true,
                premium: false,
                pro: false
            },
            email: email

        }
        // Add a new document in collection "users" with ID 'uid'
        const userRef = doc(db, 'users', uid);
        await setDoc(userRef, data);
    }

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            console.log(user)
        }else {
            console.log("user is logged out")
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              console.log(uid)
            } else {
              console.log("error")
            }
          });
    },[])

    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <input className="bg-black text-white mx-5 my-2" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="bg-black text-white mx-5 my-2" type="text"  value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="bg-blue-400 text-white mx-5 my-2" onClick={createUser}>Sign Up</button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>Social Login Buttons</p>
              <button className="bg-blue-400 text-white mx-5 my-2" onClick={signUpWithGoogle}>Sign up with google</button>
              <button className="bg-blue-400 text-white mx-5 my-2" onClick={signUpWithFacebook}>Sign up with Facebook</button>
            </div>
        </>
    )
}