"use client";
import Image from "next/image";
// import Image from "next/image";
import Header from "./components/header";
import TailwindCss from "/public/tailwindcss-logo.svg";
import mongodb from "/public/mongodb.png";
import nodejs from "/public/nodejs.png";
import reactjs from "/public/react.png";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="container mx-auto my-4 py-6">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              MERN Stack
            </span>{" "}
            - On the Way to Fullstack Excellence
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl ">
            I've developed a comprehensive user authentication system featuring
            user registration, email verification, secure login, and easy
            logout. While the focus has been primarily on the backend APIs using
            Next.js and its API routes, the UI may appear basic. This project
            showcases the power of Next.js without relying on Express for
            backend functionality.
          </p>
          <h4 className="my-5 font-semibold text-xl text-gray-700">
            Technologies that i used in this project
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
            <div className="border rounded-md p-5 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180 180"
                width="18"
                className="md:w-36 w-20 mx-auto"
              >
                <mask
                  height="180"
                  id=":r8:mask0_408_134"
                  maskUnits="userSpaceOnUse"
                  width="180"
                  x="0"
                  y="0"
                  style={{ maskType: "alpha" }}
                >
                  <circle cx="90" cy="90" fill="black" r="90"></circle>
                </mask>
                <g mask="url(#:r8:mask0_408_134)">
                  <circle
                    cx="90"
                    cy="90"
                    data-circle="true"
                    fill="black"
                    r="90"
                  ></circle>
                  <path
                    d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                    fill="url(#:r8:paint0_linear_408_134)"
                  ></path>
                  <rect
                    fill="url(#:r8:paint1_linear_408_134)"
                    height="72"
                    width="12"
                    x="115"
                    y="54"
                  ></rect>
                </g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id=":r8:paint0_linear_408_134"
                    x1="109"
                    x2="144.5"
                    y1="116.5"
                    y2="160.5"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id=":r8:paint1_linear_408_134"
                    x1="121"
                    x2="120.799"
                    y1="54"
                    y2="106.875"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-center text-gray-600 font-semibold text-base mt-4">
                Nextjs
              </p>
            </div>
            <div className="border rounded-md p-5 shadow-sm">
              <Image
                width={144}
                height={144}
                src={reactjs}
                className="mx-auto h-36"
                alt="reactjs"
              />
              <p className="text-center text-gray-600 font-semibold text-base mt-4">
                Reactjs
              </p>
            </div>
            <div className="border rounded-md p-5 shadow-sm">
              <Image
                width={144}
                height={144}
                src={TailwindCss}
                className="mx-auto h-36"
                alt="tailwind"
              />
              <p className="text-center text-gray-600 font-semibold text-base mt-4">
                TailwindCss
              </p>
            </div>
            <div className="border rounded-md p-5 shadow-sm">
              <Image
                width={144}
                height={144}
                src={mongodb}
                className="mx-auto h-36"
                alt="mongodb"
              />
              <p className="text-center text-gray-600 font-semibold text-base mt-4">
                Mongodb
              </p>
            </div>
            <div className="border rounded-md p-5 shadow-sm">
              <Image
                width={144}
                height={144}
                src={nodejs}
                className="mx-auto h-36"
                alt="nodejs"
              />
              <p className="text-center text-gray-600 font-semibold text-base mt-4">
                Nodejs
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
