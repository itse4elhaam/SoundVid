

export default function ContactUs(){
    return(
        <main className="bg-zinc-50">
  <section className="flex h-[40vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1572040917409-60ca0cfcc2df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60')] bg-cover bg-center">
    <div className="flex h-full w-11/12 flex-col items-center justify-center space-y-3 text-white">
      <h1 className="text-center text-4xl font-bold lg:text-5xl">Hey there 👋</h1>
      <h2 className="mx-auto w-4/6 text-center text-lg">Got a question about our service? Or just want to chat? {"We're"} here to help.</h2>
    </div>
  </section>
  <section className="mt-8 bg-zinc-50">
    <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:gap-14 lg:px-8">
      <div className="mx-auto md:w-4/5 lg:w-2/4">
        <div className="rounded-lg bg-white p-8 shadow-lg md:col-span-3 lg:p-12">
          <div className="flex flex-col items-center justify-center pb-5">
            <h1 className="text-center text-2xl font-bold lg:text-left">Lets Talk</h1>
            <p className="pt-3 text-center lg:text-left">Leave us a message and our team will aim to respond within 24 hours.</p>
          </div>
          <form action="" className="space-y-4">
            <div className="grid gap-4">
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input className="w-full rounded-lg bg-gray-100 p-3 text-sm" placeholder="Email address" type="email" id="email" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <label className="sr-only" htmlFor="email">Subject</label>
                <input className="w-full rounded-lg bg-gray-100 p-3 text-sm" placeholder="Subject" type="text" id="Subject" />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea className="w-full rounded-lg bg-gray-100 p-3 text-sm" placeholder="Message" rows={8} id="message"></textarea>
            </div>

            <div className="mt-4 flex justify-end">
              <button type="submit" className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white sm:w-auto">Send Enquiry</button>
            </div>
          </form>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-left">Popular Help topics</h1>
        <p className="pt-3 text-center lg:text-left">Hmmm… maybe the answer is here somewhere? Could be worth a shot.</p>
        <ul className="space-y-2 pt-4 text-center text-lg font-bold text-sky-500 lg:text-left">
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
          <li className="hover:underline">Lorem ipsum Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="mt-8 bg-zinc-50 pb-24">
    <div className="mx-auto w-5/6 md:pb-4">
      <h1 className="text-center text-2xl font-bold md:text-4xl">Want To Know More?</h1>
      <p className="= pb-3 pt-3 text-center">Grab a coffee, and {"let's"} go down the rabbit hole.</p>
    </div>
    <div className="mx-auto grid w-5/6 grid-cols-1 gap-5 md:grid-cols-3">
      <a href="" className="group flex flex-col items-center justify-center space-y-3 rounded-xl border bg-white p-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#54b9f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text">
          <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path d="M15 8h-5" />
          <path d="M15 12h-5" />
        </svg>
        <div>
          <h1 className="pb-1 text-center text-lg font-bold">Full Terms and Conditions</h1>
          <p className="text-center">The nuts and bolts.</p>
        </div>
      </a>
      <a href="" className="group flex flex-col items-center justify-center space-y-3 rounded-xl border bg-white p-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#54b9f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
        <div>
          <h1 className="pb-1 text-center text-lg font-bold">Full Help Documentation</h1>
          <p className="text-center">The nuts and bolts.</p>
        </div>
      </a>
      <a href="" className="group flex flex-col items-center justify-center space-y-3 rounded-xl border bg-white p-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#54b9f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <div>
          <h1 className="pb-1 text-center text-lg font-bold">Privacy Policy</h1>
          <p className="text-center">How we handle your data.</p>
        </div>
      </a>
    </div>
  </section>
</main>
    )
}