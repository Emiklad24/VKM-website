/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RoughNotation } from "react-rough-notation";
import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import Health from "@assets/images/projects/health-info.webp";
import TeacherAbs from "@assets/images/projects/teacher-absent.webp";
import HealthInfo from "@assets/images/projects/civil-reg.webp";
import PolicyPlan from "@assets/images/projects/landscape-nigeria.webp";
import Image from "next/image";

const projects = () => {
  return (
    <Container>
      <Hero
        headerPix="/projects.webp"
        title={"Projects are perfectly  "}
        titleHighlighted={"done"}
        subtitle="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"
      />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans xl:mt-12">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Delivered </span>
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
              Projects
            </RoughNotation>
          </h2>

          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src={Health}
              alt="health worker on a computer"
              width={700}
              height={700}
              layout="responsive"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              Health Information Systems Strengthening
            </h5>
            <p className="text-gray-700">
              VKM developed the Nigeria Health Facility Registry (HFR) for the
              Federal Ministry of Health. The project was funded by USAID
              through the MEASURE Evaluation project under an institutional
              contract with VKM.
            </p>
            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>
          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src={TeacherAbs}
              width={700}
              height={700}
              layout="responsive"
              alt="teacher writing on chalkboard"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              UNICEF Nigeria – Time to teach: Determinants of Teacher
              Absenteeism in Sub-Saharan Africa
            </h5>
            <p className="text-gray-700">
              VKM was identified by UNICEF in 2018 to lead the Nigeria component
              of a multi-country study on the determinants of teacher
              absenteeism in sub-Saharan Africa.
            </p>
            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>
          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src={HealthInfo}
              alt="Screen displaying statistics"
              width={700}
              height={700}
              layout="responsive"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              Research on Civil Registration and Vital Statistics (CRVS) System
            </h5>
            <p className="text-gray-700">
              VKM has carried out several studies on birth registration in
              Nigeria collaborating with researchers across the world in the
              process.
            </p>
            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>
          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src={PolicyPlan}
              alt=""
              width={700}
              height={700}
              layout="responsive"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              Policy and Strategic Plan Development and Research
            </h5>
            <p className="text-gray-700">
              VKM has expertise in the development of national level policies
              and strategic plans. Our chief executive led the development of
              the Nigeria Health Information System Strategic Plan (2014-2018)
              and the Sierra Leone Health Information System Strategic Plan
              (2017-2021).
            </p>

            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>
          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
              width={700}
              height={700}
              layout="responsive"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              UNICEF Nigeria – Iron-Folic Acid Supply Chain Assessment in
              Northern Nigeria
            </h5>
            <p className="text-gray-700">
              VKM was contracted by UNICEF in January 2019 to conduct an
              assessment of the Iron-Folic Acid supply chain system in six
              states (Jigawa, Katsina, Kebbi, Sokoto, Yobe, Zamfara) in Northern
              Nigeria.
            </p>
            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>
          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
              width={700}
              height={700}
              layout="responsive"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              UNICEF Nigeria – Drivers of Violence Against Children
            </h5>
            <p className="text-gray-700">
              VKM in 2017/ 2018 provided consulting services to UNICEF Child
              Protection section. We conducted the Drivers of Violence Against
              Children study which required a systematic review of the
              literature, secondary data analysis and an interventions’ mapping
              across four focal states (Lagos, Cross River, Gombe and Plateau)
              of the country.
            </p>
            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>

          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
              width={700}
              height={700}
              layout="responsive"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              UNICEF U-Report 24X7 Assessment
            </h5>
            <p className="text-gray-700">
              VKM was contracted by UNICEF Nigeria (Management for Results
              Section) in February 2020 to conduct the U-Report 24X7 assessment
              in the humanitarian response states of Borno, Adamawa and Yobe...
            </p>
            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>
          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
              width={700}
              height={700}
              layout="responsive"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              UNICEF Strengthening Education Management Information System in
              Borno, Adamawa and Yobe states
            </h5>
            <p className="text-gray-700">
              UNICEF engaged VKM in October 2020 to support the strengthening of
              the education management information system in Borno, Adamawa and
              Yobe states. This project requires the assessment of the current
              EMIS, development of a 3-5 year strategic plan for the EMIS,
              conduct of a baseline census of schools and compilation of a
              statistics book from this effort, and development of the baseline
              EMIS.
            </p>
            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>
          <div>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96  transform hover:scale-125 transition duration-700 ease-outtransform hover:scale-125 transition duration-700 ease-out"
              src="/reporta.svg"
              alt=""
              width={700}
              height={700}
              layout="responsive"
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              Reporta Health Mobile App
            </h5>
            <p className="text-gray-700">
              In partnership with Viable Helpers Development Organization
              (VHDO), VKM has developed a mobile application (Reporta Health)
              for crowdsourcing data on illegal and unregistered health
              facilities across Nigeria. The app extends the functionality of
              the Health Facility Registry in the country.
            </p>

            <span className="inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default projects;
