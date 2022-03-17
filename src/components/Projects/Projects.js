/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import Health from "../../assets/images/projects/health-info.webp";
import Image from "next/image";
import TeacherAbs from "../../assets/images/projects/teacher-absent.webp";
import HealthInfo from "../../assets/images/projects/civil-reg.webp";
import PolicyPlan from "../../assets/images/projects/landscape-nigeria.webp";

const Projects = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Let&apos;s handle your <br className="hidden md:block" />
            next{" "}
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
              project.
            </RoughNotation>
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-mantis-700 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-md lg:max-w-md ">
          As our clients&apos; close ally, we understand the pressure to
          deliver; stretching thinking quickly. Our resource-efficient approach
          cuts out any unnecessary process as we manage to tackle strategic work
          that delivers step-change growth in the quickest time possible.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a aria-label="View Item">
          <div className="relative overflow-hidden transition duration-700 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={Health}
              alt="health worker on a computer"
              height={500}
              width={400}
              layout="responsive"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-700 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Health Information Systems Strengthening
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                VKM developed the Nigeria Health Facility Registry (HFR) for the
                Federal Ministry of Health. The project was funded by USAID
                through the MEASURE Evaluation project under an institutional
                contract with VKM.
              </p>
            </div>
          </div>
        </a>
        <a aria-label="View Item">
          <div className="relative overflow-hidden transition duration-700 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={TeacherAbs}
              alt="teacher writing on chalkboard"
              height={500}
              width={400}
              layout="responsive"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-700 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                UNICEF Nigeria – Time to teach: Determinants of Teacher
                Absenteeism in Sub-Saharan Africa
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                VKM was identified by UNICEF in 2018 to lead the Nigeria
                component of a multi-country study on the determinants of
                teacher absenteeism in sub-Saharan Africa.
              </p>
            </div>
          </div>
        </a>
        <a aria-label="View Item">
          <div className="relative overflow-hidden transition duration-700 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={HealthInfo}
              alt="Screen displaying statistics"
              height={500}
              width={400}
              layout="responsive"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-700 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Research on Civil Registration and Vital Statistics (CRVS)
                System
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                VKM has carried out several studies on birth registration in
                Nigeria collaborating with researchers across the world in the
                process.
              </p>
            </div>
          </div>
        </a>
        <a aria-label="View Item">
          <div className="relative overflow-hidden transition duration-700 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={PolicyPlan}
              alt="street view nigeria"
              height={500}
              width={400}
              layout="responsive"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-700 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Policy and Strategic Plan Development and Research
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                VKM has expertise in the development of national level policies
                and strategic plans. Our chief executive led the development of
                the Nigeria Health Information System Strategic Plan (2014-2018)
                and the Sierra Leone Health Information System Strategic Plan
                (2017-2021).
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center text-mantis-700 hover:text-mantis-900 cursor-pointer">
        <Link
          href="/projects"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700 hover:text-mantis-900"
        >
          <div>
            View projects
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
