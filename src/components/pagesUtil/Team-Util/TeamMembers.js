import React from "react";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";
import Link from "next/link";
import { truncateText } from "@util/truncateText.util";
import { useTransFormTeamMateData } from "@hooks/useTransformTeamMateData";
import SocialIcons from "@components/Socials/SocialIcons";

const TeamMembers = ({ teamMates }) => {
  const { docsDetails, otherTeamMates } = useTransFormTeamMateData(teamMates);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans cursor-pointer">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Meet the </span>
          </span>{" "}
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
            team
          </RoughNotation>
          ``
        </h2>
        {/* <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p> */}
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <Link href={`/team/${docsDetails?.slug}` || ""} passHref>
          <div className="relative overflow-hidden transition duration-700 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={docsDetails?.personal_photos?.[0]?.url || ""}
              alt={docsDetails?.personal_photos?.[0]?.alternativeText || ""}
              height={600}
              width={400}
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                {docsDetails?.name || ""}
              </p>
              <p className="mb-4 text-xs text-gray-100">
                {docsDetails?.designation || ""}
              </p>
              <p className="mb-4 text-xs tracking-wide text-gray-100">
                {truncateText(docsDetails?.bio, 325)}
              </p>
              <div className="flex items-center justify-center space-x-3">
                {/* <SocialIcons teamMateData={docsDetails} paint="white" size="20"/> */}
              </div>
            </div>
          </div>
        </Link>
        {otherTeamMates.map((teamMate, idx) => (
          <Link
            key={teamMate?.name || idx}
            href={`/team/${teamMate?.slug}` || ""}
            passHref
          >
            <div className="relative overflow-hidden transition duration-700 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={teamMate?.personal_photos?.[0]?.url || ""}
                alt={teamMate?.personal_photos?.[0]?.alternativeText || ""}
                height={600}
                width={400}
                layout="responsive"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  {teamMate?.name || ""}
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  {teamMate?.designation || ""}
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-100">
                  {truncateText(teamMate?.bio)}
                </p>
                <div className="flex items-center justify-center space-x-3">
                  {/* <SocialIcons teamMateData={teamMate} paint="white" size="20"/> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
