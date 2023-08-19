import Image from "next/image";

export default function ProfileMain(){
    return (
<main className="bg-gray-100">
  <section className="mx-auto flex w-11/12 gap-4 pb-8 pt-12">
    <div className="hidden h-max w-3/12 bg-white p-3 py-9 lg:block">
      <div className="flex justify-center">
        <Image width={1000} height={1000} className="h-28 w-28 rounded-full object-cover" src="https://images.unsplash.com/photo-1692335833504-4eaa26de9991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="avatar" />
      </div>
      <p className="pt-7 text-center font-bold">
        yourname@mailprovider.com
      </p>
    </div>
    <div className="mx-auto bg-white p-6 md:w-11/12 lg:w-9/12">
      <div className="mb-8">
        <h1 className="pb-4 text-2xl font-medium md:text-3xl">
          Connect
        </h1>
        <div className="flex gap-3">
          <button className="flex w-2/4 items-center justify-center gap-1 rounded bg-blue-500 py-2 text-white hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={28} height={28} viewBox="0 0 48 48">
              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
              <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
            </svg>
            <span className="hidden md:block">
              Connect with Facebook
            </span>
          </button>
          <button className="flex w-2/4 items-center justify-center gap-1 rounded border bg-slate-100 py-2 hover:bg-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={28} height={28} viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            <span className="hidden md:block">
              Connect with Google
            </span>
          </button>
        </div>
      </div>
      <div className="mt-16 w-full">
        <h1 className="pb-4 text-2xl font-medium md:text-3xl">
          Account Data
        </h1>
        <div className="flex flex-col justify-center md:flex-row md:gap-6">
          <div className="space-y-4 md:w-2/4">
            <fieldset className="border-2 border-black">
              <legend className="ml-3">Username :</legend>
              <input className="w-full bg-transparent px-2 py-1 outline-none" type="text" id="username" />
            </fieldset>
            <fieldset className="border-2 border-black">
              <legend className="ml-3">Email :</legend>
              <input className="w-full bg-transparent px-2 py-1 outline-none" type="email" />
            </fieldset>
            <input className="w-full border-2 border-black p-2 px-2 outline-none" type="text" placeholder="Real Name " />
          </div>
          <div className="mt-8 md:mt-0 md:w-2/4">
            <p className="pb-4 text-black">
              Update your password through the button
              below You will be redirected to a new page
              and must follow the instructions.
            </p>
            <button className="rounded border-gray-400 bg-slate-200 px-4 py-2 hover:bg-orange-400">
              Set new Password
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="pb-4 text-2xl font-medium md:text-3xl">
          Notifications
        </h1>
        <div className="flex justify-between border p-2">
          <p className="pr-2">
            Receive newsletters, promotions and news from
            True Devs
          </p>
          <input className="w-8" type="checkbox" />
        </div>
      </div>
      <div className="mt-8 space-y-6">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Est voluptatem vel ut, totam quas perferendis
          sint maiores dolores? Facilis, laboriosam
          accusantium sed deserunt doloremque rem consequuntur
          magni! Possimus laboriosam pariatur repudiandae
          eveniet, corporis commodi sed.
        </p>
        <button className="rounded bg-slate-200 px-2 py-2 text-red-700 hover:bg-slate-300">
          Close my Account
        </button>
      </div>
      <div className="md:flex md:justify-end">
        <div className="mt-6 flex gap-3 md:w-2/4">
          <button className="flex w-2/4 items-center justify-center gap-1 rounded border bg-slate-100 py-2 hover:bg-slate-200">
            <span>Cancel</span>
          </button>
          <button className="flex w-2/4 items-center justify-center gap-1 rounded border bg-blue-500 py-2 text-white hover:bg-blue-600">
            <span >Save</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</main>

	);
}

