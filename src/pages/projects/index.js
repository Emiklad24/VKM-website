/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RoughNotation } from "react-rough-notation";
import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import ProjectCard from "@components/pagesUtil/Project-Util/ProjectCard";
import Pagination from "@components/Pagination/Pagination";


const projects = () => {
  return (
    <Container
      title="Projects - Projects are perfectly done"
      description="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"
    > 
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

        <ProjectCard/>
        <Pagination/>
       
      </div>
    </Container>
  );
};

export default projects;
