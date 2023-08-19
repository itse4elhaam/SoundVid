'use client'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "src/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Use these two state if you want to load something on UI for "loading / error message"
  // const [loading, setLoading]= useState(false)
  // const [error, setError] = useState("")

  const router = useRouter()

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // GOOGLE SIGN IN
  const signInWithGoogle = () => { 
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
		router.push('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // FACEBOOK SIGN IN
  // SIGN IN WITH FACEBOOK WONT WORK RN BCZ WE ARE MISSING SOME
  // FACEBOOK DEVELOPER END SECRET KEYS FOR IT TO WORK ON WEBSITE
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result);
		router.push('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Check if the email is verified or not ? if email is not verified than send it remainder page
        // Else forward it to you app page
        console.log(user.emailVerified);
		router.push('/')
        // If user.emailverified is true than you need to save "const user" in your state management in case you need it.
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user;
        console.log(uid);
		router.push('/')
      } else {
        console.log("User is signed out");
      }
    });
  }, []);

  return (
    <section>
      <div className="flex h-screen">
        <div className="hidden md:w-7/12 lg:flex lg:w-3/5">
          <Image
            className="w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="mx-auto flex w-10/12 flex-col justify-center pt-4 sm:w-10/12 lg:w-2/5">
          <div className="mx-auto flex justify-start">
            <div className="w-full rounded-lg bg-white md:mt-0 md:max-w-md xl:p-0">
              <Link href="/" className="bg-slate-40 flex justify-center">
                LOGO
              </Link>
              <div className="space-y-4 p-6 sm:p-8 md:space-y-4">
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Log in
                </h1>
                  <div className="space-y-4 md:space-y-6" >
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="focus:ring-blue-600 focus:text-black block w-full rounded-lg border bg-gray-50 p-2.5  dark:border-gray-600 dark:text-white text-black dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="name@company.com"
					  value={email}
					  onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
					  value={password}
					  onChange={e => setPassword(e.target.value)}
                      className="focus:ring-blue-600 f focus:text-black  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-blue-600"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-black">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
					  onClick={login}
                      className="hover:bg-primary-700 focus:ring-primary-300 w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
					>
                      Sign in
                    </button>
                    <button className="bg-white-500 border flex w-full rounded-lg cursor-pointer items-center justify-center  px-4 py-3 text-sm font-bold text-gray-800 transition-colors duration-150 ease-in-out bg-white shadow hover:bg-gray-50" onClick={signInWithGoogle}>
                      <svg
                        id="Capa_1"
                        className="mr-3 h-7 w-7 fill-current"
                        version="1.1"
                        viewBox="0 0 150 150"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g>
                          <path
                            className="st14"
                            d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5   C115,101.8,120,90,120,76.1L120,76.1z"
                          />
                          <path
                            className="st15"
                            d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9   L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
                          />
                          <path
                            className="st12"
                            d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
                          />
                          <path
                            className="st13"
                            d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3   l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
                          />
                        </g>
                      </svg>
                      <span className="block h-6 w-1 border-l border-blue-500"></span>
                      <span className="pl-3">Sign in with Google</span>
                    </button>
                    <button className="mt-2 flex w-full rounded-lg cursor-pointer items-center justify-center  bg-blue-600 hover:bg-blue-700 transition-colors duration-150 ease-in-out px-4 py-3 text-sm font-bold text-gray-100 shadow hover:text-white"
							onClick={signInWithFacebook}
					>
                      <svg
                        viewBox="0 0 24 24"
                        className="bg- mr-3 h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                      </svg>
                      <span className="mr-1 block h-6 w-1 border-l border-indigo-500"></span>
                      <span className="pl-3">Sign in with Facebook</span>
                    </button>
                  </div>
                  <p className="text-center text-sm font-light text-black">
                    Don’t have an account yet?{" "}
                    <Link
                      href="/signup"
                      className="font-bold text-blue-600 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
              </div>
              <div className="mx-auto w-4/5 pb-2 text-center text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  ullam iure aliquam nemo consequuntur eos aut accusamus ratione
                  nobis vel quae velit voluptatem laboriosam quibusdam ea, dolor
                  repellendus accusantium ad.
                </p>
                <h1 className="">
                  Powered By{" "}
                  <span className="text-lg font-bold">True Devs</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
