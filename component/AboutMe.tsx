import React from "react";
import XIxon from "@/icon/x";
import Image from "next/image";
import Slider from "react-slick";
import WhatsappIcon from "@/icon/whatsapp";
import LinkedInIcon from "@/icon/linkedin";

export const AboutMe = () => {
  return (
    <>
      <div
        id="about"
        className="block sm:flex flex-col md:flex-row items-center md:items-start justify-center p-4 bg-white rounded-md shadow-md"
      >
        <div className="w-full md:w-1/2 mb-4 mr-2 md:mb-0">
          <div className="image-container w-full">
            <img
              src="/me.jpg"
              alt="Pic of Innocent Peter"
              className="w-full h-auto rounded-md image-zoom"
            />
            <span
              className="bg-black block relative bg-opacity-80 h-2 w-full z-50 text-white p-2 text-center"
              style={{ padding: "0 1rem", width: "100%" }}
            >
              Innocent Peter
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:ml-4">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="mb-4">My name is Innocent Peter (Ip)</p>
          <p className="mb-4">
            I'm a full-stack JavaScript developer with experience in TypeScript,
            Python, and PHP.
          </p>
          <p className="mb-4">
            I specialize in using Nuxt.js for Vue.js, Next.js for React, Djongo
            for Python, and Laravel for PHP.
          </p>
          <p className="mb-4">
            I'm passionate about creating robust and scalable web applications.
          </p>
        </div>
      </div>

      <p className="w-full text-center p-2 text-2xl">Connect with me</p>
      <div className="flex mt-2  md:flex-row items-center sm:flex    md:items-start justify-center p-4 bg-white rounded-md shadow-md">
        <a
          href="https://www.linkedin.com/in/peter-innocent?utm_source=share&utm_campaign=share_via&utm_content=profile"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 mb-2 md:mb-0 zoomIn"
        >
          <LinkedInIcon width="3rem" height="3rem" />
        </a>

        <a
          href="https://wa.me/+2349033798890"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 mb-2 md:mb-0 zoomIn"
        >
          <WhatsappIcon width="3rem" height="3rem" />
        </a>

        <a
          href="https://twitter.com/innocenpeter?s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="zoomIn"
        >
          <XIxon width="3rem" height="3rem" />
        </a>
      </div>
    </>
  );
};
