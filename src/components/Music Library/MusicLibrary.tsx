import React from 'react'

export default function MusicLibrary() {
  return (
    <>
    <section className="mx-auto w-full px-8 space-y-4 pt-8">
    {/* <h1 className="text-lg font-bold">Royalty Free Music</h1> */}
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 hover:bg-slate-300 rounded justify-center p-4 ">
        <div className="flex lg:w-2/6">
            <div className="flex space-x-1">
                <div className="h-[60px] w-[150px]">
                    <img className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1691855408946-6709f6c1b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="" />
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-slate-700">Lorem ipsum.</p>
                    <p className="text-sm font-bold text-slate-400">Lorem ipsum dolor.</p>
                    <p className="line-clamp-1 text-xs text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi
                        quis doloremque nemo aliquid, aut ipsum debitis cumque vel praesentium.</p>
                </div>
            </div>
        </div>
        <div className="flex space-x-1 lg:w-3/6">
            <div className="p h-[70px] w-5/6"><img className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1691855408946-6709f6c1b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    alt="" /></div>
            <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-slate-400">01:15</p>
                <p className="text-sm font-bold text-slate-400">120 BPM</p>
            </div>
        </div>
        <div className="flex items-center lg:w-2/6">
            <div className="flex w-full justify-between p-2 lg:space-x-6">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-info">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg></a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-bookmark-plus">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        <line x1="12" x2="12" y1="7" y2="13" />
                        <line x1="15" x2="9" y1="10" y2="10" />
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-heart">
                        <path
                            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </a>
                <p className="font-bold text-gray-500">Free</p>
                <div className="space-x-9  ">
                    <a className="flex  items-center  space-x-2 rounded-lg bg-blue-400 px-4 py-1 font-bold text-white"
                        href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-download">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        <p>Download</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 hover:bg-slate-300 rounded justify-center p-4 ">
        <div className="flex lg:w-2/6">
            <div className="flex space-x-1">
                <div className="h-[60px] w-[150px]">
                    <img className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1691855408946-6709f6c1b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="" />
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-slate-700">Lorem ipsum.</p>
                    <p className="text-sm font-bold text-slate-400">Lorem ipsum dolor.</p>
                    <p className="line-clamp-1 text-xs text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi
                        quis doloremque nemo aliquid, aut ipsum debitis cumque vel praesentium.</p>
                </div>
            </div>
        </div>
        <div className="flex space-x-1 lg:w-3/6">
            <div className="p h-[70px] w-5/6"><img className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1691855408946-6709f6c1b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    alt="" /></div>
            <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-slate-400">01:15</p>
                <p className="text-sm font-bold text-slate-400">120 BPM</p>
            </div>
        </div>
        <div className="flex items-center lg:w-2/6">
            <div className="flex w-full justify-between p-2 lg:space-x-6">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-info">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg></a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-bookmark-plus">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        <line x1="12" x2="12" y1="7" y2="13" />
                        <line x1="15" x2="9" y1="10" y2="10" />
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-heart">
                        <path
                            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </a>
                <p className="font-bold text-gray-500">Free</p>
                <div className="space-x-9  ">
                    <a className="flex  items-center  space-x-2 rounded-lg bg-blue-400 px-4 py-1 font-bold text-white"
                        href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-download">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        <p>Download</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 hover:bg-slate-300 rounded justify-center p-4 ">
        <div className="flex lg:w-2/6">
            <div className="flex space-x-1">
                <div className="h-[60px] w-[150px]">
                    <img className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1691855408946-6709f6c1b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="" />
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-slate-700">Lorem ipsum.</p>
                    <p className="text-sm font-bold text-slate-400">Lorem ipsum dolor.</p>
                    <p className="line-clamp-1 text-xs text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi
                        quis doloremque nemo aliquid, aut ipsum debitis cumque vel praesentium.</p>
                </div>
            </div>
        </div>
        <div className="flex space-x-1 lg:w-3/6">
            <div className="p h-[70px] w-5/6"><img className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1691855408946-6709f6c1b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    alt="" /></div>
            <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-slate-400">01:15</p>
                <p className="text-sm font-bold text-slate-400">120 BPM</p>
            </div>
        </div>
        <div className="flex items-center lg:w-2/6">
            <div className="flex w-full justify-between p-2 lg:space-x-6">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-info">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg></a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-bookmark-plus">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        <line x1="12" x2="12" y1="7" y2="13" />
                        <line x1="15" x2="9" y1="10" y2="10" />
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#7f7f7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-heart">
                        <path
                            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </a>
                <p className="font-bold text-gray-500">Free</p>
                <div className="space-x-9  ">
                    <a className="flex  items-center  space-x-2 rounded-lg bg-blue-400 px-4 py-1 font-bold text-white"
                        href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-download">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        <p>Download</p>
                    </a>
                </div>
            </div>
        </div>
        </div>

</section>

    </>
  )
}
