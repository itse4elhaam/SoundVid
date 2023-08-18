'use client'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "src/lib/firebase";

export default function Signin (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // Use these two state if you want to load something on UI for "loading / error message"
    // const [loading, setLoading]= useState(false)
    // const [error, setError] = useState("")
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    // GOOGLE SIGN IN
    const signInWithGoogle = () => {
      signInWithPopup(auth, googleProvider).then(result => {
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
    }

    // FACEBOOK SIGN IN
    // SIGN IN WITH FACEBOOK WONT WORK RN BCZ WE ARE MISSING SOME
    // FACEBOOK DEVELOPER END SECRET KEYS FOR IT TO WORK ON WEBSITE
    const signInWithFacebook = () => {
      signInWithPopup(auth, facebookProvider).then(result => {
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
    }



    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // Check if the email is verified or not ? if email is not verified than send it remainder page
            // Else forward it to you app page
            console.log(user.emailVerified)
            // If user.emailverified is true than you need to save "const user" in your state management in case you need it.
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful")
          }).catch((error) => {
            // An error happened.
            console.log('error', error)
          }); 
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user;
              console.log(uid)
            } else {
              console.log("User is signed out")
            }
          });
    },[])

    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <input className="bg-black text-white mx-5 my-2" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="bg-black text-white mx-5 my-2" type="text"  value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="bg-blue-400 text-white mx-5 my-2" onClick={login}>Sign In</button>
                <button className="bg-blue-400 text-white mx-5 my-2" onClick={logout}>Sign out</button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>Social Login Buttons</p>
              <button className="bg-blue-400 text-white mx-5 my-2" onClick={signInWithGoogle}>Sign in with google</button>
              <button className="bg-blue-400 text-white mx-5 my-2" onClick={signInWithFacebook}>Sign in with Facebook</button>
            </div>
        </>
    )
}