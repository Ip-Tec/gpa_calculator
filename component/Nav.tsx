"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutMe } from "./AboutMe";

export const Nav = () => {
  const [aboutMeState, setAboutMeState] = useState(false);
  const aboutMe = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const dSs = sessionStorage.getItem("data");
    const sS = JSON.parse(dSs as string);
    if (sS && sS?.length !== 0) {
      setAboutMeState(!aboutMeState);
      console.log(sS);
    }
  };
  return (
    <>
      <div className="fixed top-0 bg-gray-900 h-4 w-full justify-between max-w-sm m-auto p-2 right-0 left-0 z-50">
        <div className="flex flex-nowrap items-center mb-2 justify-between">
          <div className="w-2/6">
            <Link href="/">
              <Image
                width={60}
                priority
                height={50}
                src="/GPA_Calculator.png"
                alt="Ip GPA Calculator Logo"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <nav className="flex items-center mr-2 mx-2 w-1/2 text-center transform-cpu">
            <div className="flex w-full justify-between ">
              <Link
                href="/"
                className="w-full border-b hover:border-white hover:bg-white hover:text-black mr-4"
              >
                <p className="text-white hover:text-black ml-4 text-center w-full">
                  Home
                </p>
              </Link>
              <Link
                href="/#about"
                className="w-full border-b hover:border-white hover:bg-white hover:text-black "
              >
                <button
                  className="text-white hover:text-black ml-4 text-center w-full"
                  onClick={aboutMe}
                >
                  About me
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      {aboutMeState && (
        <div
          className="relative min-h-screen max-w-sm md:max-w-md m-auto "
          style={{ marginTop: "7rem" }}
        >
          <main className="container m-auto">
            <div className="container py-2 mb-40 z-10 rounded-md max-w-sm bg-opacity-50 text-black backdrop-blur-0">
              <AboutMe />
              {/* <button onClick={setAboutMeState(false)}>Remove About me</button> */}
            </div>
          </main>
        </div>
      )}
    </>
  );
};
