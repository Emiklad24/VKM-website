/* eslint-disable react/no-unescaped-entities */
import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import CareerCard from "@components/pagesUtil/Career-Util/CareerCard";
import Pagination from "@components/Pagination/Pagination";
import Link from "next/link";

const Careers = () => {
  return (
    <Container
      title="Careers - We want you here"
      description="Won't you like to join a team of passionate experts who know how to have fun ?"
    >
      <Hero
        headerPix="/career.jpg"
        title={"We want  "}
        titleHighlighted={"you here"}
        subtitle="Won't you like to join a team of passionate experts who know how to have fun ?"
      />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans mt-16">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-mantis-400">
              We are hiring
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-mantis-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Join</span>
            </span>{" "}
            Our Team
          </h2>
          <p className="text-base text-gray-700 md:text-lg ">
            Our philosophy is simple- Hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work
          </p>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3  mx-auto">
          <CareerCard />
        </div>
        {/* <Pagination /> */}
        {/* <div className="text-center">
          <Link href="/" passHref>
            <a
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-mantis-700 hover:bg-mantis-800 focus:shadow-outline focus:outline-none"
              passHref
            >
              Learn more
            </a>
          </Link>
        </div> */}
      </div>
    </Container>
  );
};

export default Careers;
