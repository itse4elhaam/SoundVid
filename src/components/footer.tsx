
// TODO: REFACTOR THE COLORS LATER ON

import Link from "next/link";

export default function Footer(){
    return(
        <footer className="bg-[#1d262d]">
    <div className="container mx-auto flex flex-col justify-center px-3 py-3 pt-6 text-[#657a89] lg:flex-row lg:space-x-1">
      <div className="space-y-2px-4 mb-6 justify-center space-y-2 text-center lg:w-2/5 lg:text-left">
        <h2 className="text-center text-xl font-bold text-white lg:text-left">About Lorem</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum id necessitatibus consequatur praesentium molestias aliquam alias, aspernatur perferendis, possimus illo animi! Et sapiente voluptatum sit, molestiae corrupti quisquam perspiciatis! Omnis, mollitia in. <br /><br />
          If you have any suggestions for the site, or would like to make a request please contact us at: <a className="text-blue-500 underline hover:no-underline" href="">support@mail.com</a> we will do our best to help.
        </p>
      </div>
      <div className="mx-auto mb-6 flex flex-col space-y-2 lg:w-2/5">
        <div className="mx-auto flex flex-col space-y-2 md:pl-3">
          <h2 className="flex justify-center text-xl font-bold text-white lg:justify-start">Quick Links</h2>
          <div className="flex gap-11 space-x-8 lg:mx-auto">
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-300"><a href=""> Video</a></li>
              <li className="hover:text-gray-300"><a href=""> Footage</a></li>
              <li className="hover:text-gray-300"><a href=""> Motion graphics</a></li>
              <li className="hover:text-gray-300"><a href=""> Video templates</a></li>
              <li className="hover:text-gray-300"><a href=""> Privacy policy</a></li>
              <li className="hover:text-gray-300"><a href=""> Terms and conditions</a></li>
              <li><a href=""> API</a></li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-300"><a href="">Browse</a></li>
              <li className="hover:text-gray-300"><a href="">Premium</a></li>
              <li className="hover:text-gray-300"><a href="">Affiliates</a></li>
              <li className="hover:text-gray-300"><a href="">Blog</a></li>
              <li className="hover:text-gray-300"><a href="">Licensing</a></li>
              <li className="hover:text-gray-300"><a href="">Contact</a></li>
              <li className="hover:text-gray-300"><a href="">Cookies Setting</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-2 lg:text-left">
        <h2 className="text-center text-xl font-bold text-white lg:text-left">Social Media</h2>
        <p className="text-center text-sm lg:text-left">For recent updates and news follow our social media feed</p>
  
        <ul className="flex justify-center gap-4 text-sm lg:justify-start lg:text-left">
          <li>
            <Link href="/">Youtube</Link>
          </li>
          <li>
            <Link href="/">Facebook</Link>
          </li>
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>
            <Link href="/">Twitter</Link>
          </li>
        </ul>
      </div>
    </div>
  
    <div className="container mx-auto flex flex-col text-center justify-center border-t py-5  lg:flex-row">
      <h1 className="text-2 xl text-[#657a89]">LOGO</h1>
      {/* <p className="text-[#657a89]""> Copyright 2058, Example Corporation </p> */}
    </div>
  </footer>
  
    )
}