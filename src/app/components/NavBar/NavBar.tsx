"use client";

import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="font-lato">
      <div className="flex align-middle justify-between md:hidden mt-2">
        <Image src={logo} alt="Our Bradford logo" className="ml-2" />
        <Menu
          className="mt-auto mb-auto mr-2"
          fontSize="large"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </div>
      <div className="hidden md:flex align-middle md:mt-2 md:ml-2">
        <Image src={logo} alt="Our Bradford logo" />
        <nav className="hidden  md:flex  font-bold text-lg md:text-xl text-center self-center ml-auto mr-4 gap-8">
          <Link href={"/about-us"}>About</Link>
          <Link href={""}>Impact</Link>
          <Link href={""}>News</Link>
          <Link href={""}>Partner</Link>
          <Link href={""}>Contact</Link>
        </nav>
      </div>
      <span className="w-full h-1 border-b-1 flex mt-2 border-gray-300"></span>
      {toggleMenu && (
        <>
          <nav
            className={`
    flex flex-col pl-2 pt-2 font-bold text-lg gap-1 md:hidden origin-top
    transform transition-transform duration-500 ease-in-out
    ${toggleMenu ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
          >
            <Link href={"/about-us"}>About</Link>
            <Link href={""}>Impact</Link>
            <Link href={""}>News</Link>
            <Link href={""}>Partner</Link>
            <Link href={""}>Contact</Link>
          </nav>
          <span className="w-full h-1 border-b-1 flex mt-2 border-gray-300 md:hidden"></span>
        </>
      )}
    </header>
  );
};
