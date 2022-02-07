/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 font-sans">
      <Link
        className="hidden lg:inline-block text-gray-600 text-2xl leading-none"
        href="/"
        passHref
      >
        <img
          className="h-8"
          src="plain-assets/logos/plain-light.svg"
          alt=""
          width="auto"
        />
      </Link>
      {/* <Link
        className="lg:hidden text-gray-600 text-2xl leading-none"
        href="/"
        passHref
      >
        <img className="h-8" src="/vkm_logo.png" alt="" width="auto" />
      </Link> */}
      <div className="lg:hidden ml-auto">
        <button className="block navbar-burger text-indigo-500 hover:text-indigo-500 focus:outline-none">
          <svg
            className="h-4 w-4"
            fill="currentColor "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        {/* <ul>
          <li>hello</li>
          <li>About</li>
          <li>services</li>
          <li>company</li>
        </ul> */}
      </div>
      <div className="hidden lg:flex w-auto lg:w-3/5 lg:pl-16 ml-auto">
        <ul className="flex items-center space-x-12">
          <li>
            <Link
              className="text-sm hover:text-indigo-700 font-medium"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-sm hover:text-indigo-700 font-medium font-sans"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-sm hover:text-indigo-700 font-medium"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-sm hover:text-indigo-700 font-medium"
              href="/team"
              h
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              className="text-sm hover:text-indigo-700 font-medium"
              href="/publications"
            >
              Publications
            </Link>
          </li>
        </ul>
        <button className="inline-block ml-auto text-indigo-500 hover:text-indigo-700">
          <img
            className="h-10"
            src="/vkm_logo.png"
            alt="company-logo"
            width="auto"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
