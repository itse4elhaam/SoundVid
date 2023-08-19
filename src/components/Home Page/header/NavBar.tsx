"use client";

import Link from "next/link";
import DropDown, { DropDownProps } from "./DropDown";
import { useState, useEffect } from "react";
import SearchInput from "src/components/SearchInput";
import { ChevronDown } from "lucide-react";
import MobileMenu from "src/components/MobileMenu";

interface props {
  ShowSearchBar?: boolean;
  SolidBg?: boolean;
}

type defaultBgOpacityEnum = 100 | 25;

export default function NavBar({ ShowSearchBar, SolidBg }: props) {
  // update the paths later on

  const defaultBgOpacity: defaultBgOpacityEnum = SolidBg ? 100 : 25;

  const [bgOpacity, setBgOpacity] = useState(defaultBgOpacity);
  const [showMobileMenu, setShowMobileMenu] = useState("hidden");

  function toggleMobileMenu() {
    setShowMobileMenu((previousSate) =>
      previousSate === "hidden" ? "block" : "hidden"
    );
  }

  const searchDisplay = ShowSearchBar ? "block" : "hidden";

  useEffect(() => {
    function handleScroll() {
      if (SolidBg) {
        setBgOpacity(100);
        return;
      }
      if (window.scrollY > 0) {
        setBgOpacity(100);
      } else {
        setBgOpacity(25);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [SolidBg]);

  const MenuData: DropDownProps[] = [
    {
      name: "Videos",
      heading: {
        name: "All Videos",
        href: "/all-videos",
      },
      elements: [
        {
          name: "Footage",
          href: "/free-stock-videos",
        },
        {
          name: "Motion Graphics",
          href: "/free-motion-graphics",
        },
      ],
      everythingBold: false,
    },
    {
      name: "Templates",
      heading: {
        name: "All Templates",
        href: "/",
      },
      elements: [
        {
          name: "After Effect Templates",
          href: "/",
        },
        {
          name: "Premiere Pro Templates",
          href: "/",
        },
        {
          name: "DaVinci Resolve Templates",
          href: "/",
        },
        {
          name: "Final Cut Pro Templates",
          href: "/",
        },
        {
          name: "Motion Graphics Templates",
          href: "/",
        },
      ],
      everythingBold: false,
    },
    {
      name: "Audio",
      heading: {
        name: "Music",
        href: "/royalty-free/music",
      },
      elements: [
        {
          name: "Sound Effects",
          href: "/royalty-free/sound-effects",
        },
      ],
      everythingBold: true,
    },
  ];

  return (
    <nav
      className={`flex z-10 justify-between text-sm items-center py-3 px-8 fixed top-0 w-full font-semibold text-white bg-slate-800 bg-opacity-${bgOpacity}`}
    >
      <div className="logo-menu-items flex items-center space-x-4">
        <Link href="/" className="font-bold text-2xl text-gray-400">
          Logo
        </Link>

        <div className={`${searchDisplay}`}>
          <SearchInput />
        </div>

        <div className="space-x-4 items-center hidden lg:flex ">
          {MenuData.map((item, index) => (
            <DropDown key={index} {...item} />
          ))}
          <Link
            className="opacity-75 cursor-pointer text-white hover:opacity-100"
            href="/collections"
          >
            Collections
          </Link>
          <Link
            className="opacity-75 cursor-pointer text-white hover:opacity-100"
            href="/help"
          >
            Help
          </Link>
        </div>
      </div>
      <div className="register-info flex space-x-4 items-center">
        <button
          className="flex space-x-1 lg:hidden relative"
          onClick={toggleMobileMenu}
        >
          <span>Menu</span>
          <ChevronDown />
        </button>

        <button
          type="button"
          className="cursor-pointer border-2 border-white h-fit px-4 py-2 rounded-2xl opacity-90 hover:opacity-100"
        >
          <Link href="/join-us">Join Vivedo</Link>
        </button>
        <Link
          className="cursor-pointer opacity-90 hover:opacity-100"
          href="/login"
        >
          Log in
        </Link>
      </div>
      <div
        className={`z-20 ${showMobileMenu} absolute inset-0 bg-white w-screen h-screen`}
      >
        <MobileMenu closeMenu={toggleMobileMenu} />
      </div>
    </nav>
  );
}
