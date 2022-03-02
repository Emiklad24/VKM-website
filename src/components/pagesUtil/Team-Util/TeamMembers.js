import React from "react";
import { RoughNotation } from "react-rough-notation";
import DoctorMakinde from "../../../assets/images/team/DoctorMakinde.jpeg";
import Fatima from "../../../assets/images/team/fatima.jpg";
import Emmanuel from "../../../assets/images/team/emmanuel.jpeg";
import David from "../../../assets/images/team/DavidAduragbemiOkunlola.jpg";
import Nchelem from "../../../assets/images/team/nchelem.jpg";
import Ifeanyi from "../../../assets/images/team/ifeanyi.jpg";
import Nike from "../../../assets/images/team/nike.jpg";
import Mrsb from "../../../assets/images/team/mrsb.jpeg";
import Meg from "../../../assets/images/team/Meg.jpg";
import Wumi from "../../../assets/images/team/Wumi.jpeg";
import Mustapha from "../../../assets/images/team/Wumi.jpeg";
import John from "../../../assets/images/team/john.jpg";
import Philip from "../../../assets/images/team/sss.jpg";
import Hauwa from "../../../assets/images/team/Hauwa.jpeg";
import Image from "next/image";

const TeamMembers = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans cursor-pointer">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Core </span>
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
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((teamMember, idx) => (
          <div key={teamMember?.name || idx}>
            <div className="relative overflow-hidden transition duration-700 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={teamMember?.profileImage || ""}
                alt={teamMember?.name || ""}
                height={500}
                width={400}
                layout="responsive"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  {teamMember?.name || ""}
                </p>
                <p className="mb-4 text-xs text-gray-100">
                  {teamMember?.designation || ""}
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-100">
                  {teamMember?.aboutShort || ""}
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a className="text-white transition-colors duration-700 hover:text-indigo-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a className="text-white transition-colors duration-300 hover:text-indigo-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Olusesan Makinde",
    designation: "Managing Partner",
    profileImage: DoctorMakinde,
    aboutShort:
      "Dr. Olusesan Makinde is the Managing Partner at Viable Knowledge Masters (VKM): a research and consulting firm which he founded in 2015. He qualified as a Physician at the University of Ibadan in 2002 and earned his Master of Science in Epidemiology and Medical Statistics there in 2006...",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Fatima Abdulaziz-Sule",
    designation: "Product Manager",
    profileImage: Fatima,
    aboutShort:
      "Fatima has over ten years of experience in population, health and nutrition programming and research in Nigeria. Her work has covered survey design and data collection, both qualitative and quantitative",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Nchelem K. Ichegbo",
    designation: "Project Officer",
    profileImage: Nchelem,
    aboutShort:
      "Nchelem Kokomma Ichegbo is a Global Health Professional with a Bachelor of Science in Physiology from Madonna University and a Masters’ Degree in Global Health from the University of Ibadan",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Chimbuoyim Ifeanyi Mgbachi",
    designation: "Program Manager",
    profileImage: Ifeanyi,
    aboutShort:
      "Mr. Ifeanyi Mgbachi is a Program Manager with VKM. He joined VKM on a full-time role in May 2019. Prior to joining VKM, he was a free-lance research consultant who specialized in supporting data analysis and report preparation for various organizations as needed...",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Mrs. Adenike Aladetuyi",
    designation: "Finance and Admin",
    profileImage: Nike,
    aboutShort:
      "Mrs. Adenike Adedeji is an accounting graduate from the Ekiti State University, Ado-Ekiti. She actively manages the finances of the organization, prepares monthly budgets and manages the office administrative expenses...",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Mrs. Bahariye Abdulaziz",
    designation: "Education Manager",
    profileImage: Mrsb,
    aboutShort:
      "Bahariye Abdulaziz is the Gender and Education Manager at Viable Knowledge Masters. Prior to her present position, she was the CEO of Al-Qalam Foundation, a non-for-profit organization with a focus on Education by strengthening and promoting secondary school attendance for children and the girl-child in the conflict prone states of Borno, Kaduna, and Plateau states...",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "David Aduragbemi Okunlola",
    designation: "Program Officer",
    profileImage: David,
    aboutShort:
      "Mr David Okunlola is a Program Officer with VKM. He is a social and health demographer with a Master of Science (and B.Sc.) in Demography and Social Statistics (from the Obafemi Awolowo University) and his experiences in the social and population health research",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Margaret Chat Michael",
    designation: "Program Officer",
    profileImage: Meg,
    aboutShort:
      "Ms. Michael trained as a statistician at the Ahmadu Bellow University Zaria. She has served on various projects with VKM including as a data analyst on the UNICEF Iron-Folic acid supply chain assessment in Northern Nigeria...",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Oluwunmi Priscilla Olufemi",
    designation: "Program Officer",
    profileImage: Wumi,
    aboutShort:
      "Oluwunmi Priscilla Olufemi is a imminent researcher in areas pertaining to gender, economics, and finance with a Bachelor degree in Agricultural Economics from the University of Ibadan and a Masters degree in Accounting and Finance from the University of Westminster",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Mustapha Omotosho",
    designation: "Software Engineer",
    profileImage: Mustapha,
    aboutShort:
      "Mustapha holds a Bachelor of Science in Computer Science from the University of Abuja and a Master of Science in Computer Science from the Bangalore University in India where he earned a first-class exemplary status...",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "John Asemota",
    designation: "Software Engineer",
    profileImage: John,
    aboutShort:
      "Asemota John is a Full stack developer specializing in front end development with a Bachelors degree in Chemical/Process Engineering from Landmark University, Omu-aran, Kwara state.",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Philip Okedi",
    designation: "Software Engineer",
    profileImage: Philip,
    aboutShort:
      "A graduate of Salem University with a degree in economics, a self taught programmer with main focus on frontend using reactJs and a passion to learn and grow in the field.",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  // {
  //   name: "Olawoye Omotayo",
  //   designation: "Software Engineer",
  //   profileImage: Tayo,
  //   aboutShort:
  //     "Olawoye Omotayo has a Bachelor’s degree in Computer Science from the Federal University of Technology, Akure. He currently works as a Software Engineer with VKM. He has experience working with Enterprise Web and Mobile applications.",
  //   aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  // },
  {
    name: "Suleiman Hauwa",
    designation: "Product Designer",
    profileImage: Hauwa,
    aboutShort:
      "Suleiman Hauwa is a Product Designer with a Bachelors degree in Computer Engineering from Ahmadu Bello University, Zaria. She joined VKM in 2021...",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    name: "Emmanuel Nnajiofor",
    designation: "Software Engineer",
    profileImage: Emmanuel,
    aboutShort: "Vincent Van Gogh’s most popular painting, The Starry Night.",
    aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  // {
  //   name: "Victor Damilola Oyediran",
  //   designation: "Software Engineer",
  //   aboutShort: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  //   aboutLong: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  // },
];

export default TeamMembers;
