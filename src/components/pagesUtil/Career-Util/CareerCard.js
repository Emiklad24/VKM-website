import React from "react";
import Link from "next/link";
import path from "@assets/constants/CareerPaths";

const CareerCard = () => {
  return (
    <>
      {path.map((path, idx) => (
        <div
          className="p-5 duration-300 transform bg-white border rounded shadow-lg hover:-translate-y-2"
          key={path?.title || idx}
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-mantis-700"
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
          <h6 className="mb-2 font-semibold leading-5">{path.title || ""}</h6>
          <p className="text-sm text-gray-900">{path?.desc || ""}</p>

          <span className=" cursor-pointer inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
            <Link href={`careers/${path.title}`} passHref>
              Learn more
            </Link>
          </span>
        </div>
      ))}
    </>
  );
};

export default CareerCard;
