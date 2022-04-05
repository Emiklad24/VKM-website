/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-sans">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Viable Knowledge Masters"
          title="Viable Knowledge Masters"
          className="inline-flex items-center"
        >
          <img src="/vkm_logo.png" alt="" width={25} height={25} />
          <span className="ml-2 text-lg font-bold tracking-wide uppercase text-mantis-700 hover:text-mantis-900 hidden lg:flex">
            Viable Knowledge Masters
          </span>
          <span className="ml-2 text-lg font-bold tracking-wide uppercase text-mantis-700 hover:text-mantis-900 lg:hidden sm:flex">
            VKM
          </span>
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link href="/about" aria-label="About" title="About" passHref>
              <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              aria-label="Team"
              title="Team"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-mantis-700"
              passHref
            >
              <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                Team
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              aria-label="Projects"
              title="Projects"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-mantis-700"
              passHref
            >
              <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/publications"
              aria-label="publications"
              title="publications"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-mantis-700"
              passHref
            >
              <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                Publications
              </span>
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-mantis-100 focus:bg-mantis-100"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full bg-white z-[20]">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Viable Knowledge Masters"
                      title="Viable Knowledge Masters"
                      className="inline-flex items-center"
                    >
                      <img src="/vkm_logo.png" alt="" width={25} height={25} />

                      <span className="ml-2 text-xl font-bold tracking-wide uppercase text-mantis-700">
                        VKM
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/about"
                        aria-label="About"
                        title="About"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-mantis-700"
                        passHref
                      >
                        <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                          About
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team"
                        aria-label="Team"
                        title="Team"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-mantis-700"
                        passHref
                      >
                        <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                          Team
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        aria-label="Projects"
                        title="Projects"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-mantis-700"
                        passHref
                      >
                        <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                          Projects
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/publications"
                        aria-label="publications"
                        title="publications"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-mantis-700"
                        passHref
                      >
                        <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                          Publications
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/publications"
                        aria-label="publications"
                        title="publications"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-mantis-700"
                        passHref
                      >
                        <span className="font-medium tracking-wide text-mantis-700 transition-colors duration-200 hover:text-mantis-700  cursor-pointer">
                          Publications
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
