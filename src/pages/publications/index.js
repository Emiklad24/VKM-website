import React from "react";
import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import { publicationsWorks } from "@assets/constants/Publications";

const publications = () => {
  return (
    <div>
      <Container
        title="Publications - Projects are perfectly done"
        description="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"
      >
        <Hero
          headerPix="/publication.jpg"
          title={"Featured  "}
          titleHighlighted={"Publications"}
          subtitle="Our team has published and been featured in a few articles "
        />

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans">
          {publicationsWorks.map((publication, idx) => (
            <div
              className="mb-10 border-t border-b divide-y"
              key={publication.title || idx}
            >
              <div className="grid py-8 sm:grid-cols-4">
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <a
                      className="transition-colors duration-200 text-mantis-700 hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Publications
                    </a>
                    <p className="text-mantis-600 lg:w-32">
                      {publication?.team || ""}
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <div className="mb-3">
                    <a
                      aria-label="Article"
                      className="inline-block transition-colors duration-200 hover:text-mantis-700 text-mantis-600"
                    >
                      <p className="text-2xl font-extrabold leading-none ">
                        {publication?.title || ""}
                      </p>
                    </a>
                  </div>
                  <p className="text-gray-700">{publication?.citation || ""}</p>
                  {/* <p className="text-gray-700 mt-4">
                    Read : <a href={publication?.team || ""}>Here</a>
                  </p> */}
                </div>
              </div>
            </div>
          ))}

          <div className="text-center">
            <a
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700 hover:text-deep-purple-800"
            >
              See all articles
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default publications;
