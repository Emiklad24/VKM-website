import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function AboutUs() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans lg:mt-12">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="max-w-lg  font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto mb-4">
            A little{" "}
            <RoughNotation
              type="highlight"
              multiline={true}
              padding={[0, 2]}
              iterations={1}
              strokeWidth={2}
              animationDuration={2000}
              color="#F59E0B"
              show={true}
              animationDelay={500}
            >
              about us
            </RoughNotation>
          </h5>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-mantis-700 scale-x-30 hover:scale-x-50 mb-6" />
          <p className="mb-6 text-gray-900 leading-8">
            Viable Knowledge Masters (VKM) is a health and development
            consulting company licensed in Nigeria. The company was established
            by a group of friends who saw the need for improved expertise in
            providing cutting-edge support to health and development projects in
            Nigeria. The company boasts of experts who have worked across
            international development organizations for over 10 years.
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-mantis-700 hover:bg-mantis-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <svg
                className="w-12 h-12 text-mantis-700"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-bold leading-5 text-mantis-700">
              Mission
            </h6>
            <p className="text-md text-gray-700 leading-8">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear. I didn&apos;t even know we were calling him
              Big Bear.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <svg
                className="w-12 h-12 text-mantis-700"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-bold leading-5 text-mantis-700">Vision</h6>
            <p className="text-md text-gray-700 leading-8">
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea robin Antarctic cod. Yellow-and-black
              triplefin.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <svg
                className="w-12 h-12 text-mantis-700"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-bold leading-5 text-mantis-700">Values</h6>
            <p className="text-md text-gray-700 leading-8">
              A slice of heaven. O for awesome, this chocka full cuzzie is as
              rip-off as a cracker. Meanwhile, in behind the bicycle shed,
              Hercules.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <svg
                className="w-12 h-12 text-mantis-700"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-bold leading-5 text-mantis-700">
              Strategy
            </h6>
            <p className="text-md text-gray-700 leading-8">
              Disrupt inspire and think tank, social entrepreneur but
              preliminary thinking think tank compelling. Inspiring, invest
              synergy capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
