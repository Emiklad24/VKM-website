import React from 'react'
import Link from "next/link";
import projectList from "@assets/constants/ProjectList"
import Image from "next/image";

const ProjectCard = () => {
  return (
    <>
         <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          {projectList.map((project, idx) =>(
            <div key={project?.name || idx}>
            <Image
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 transform hover:scale-125 transition duration-700 ease-out"
              src={project?.img || ""}
              alt={project?.alt || ""}
              width={700}
              height={700}
              layout="responsive"
            />
            <Link href={`projects/${project.slug}`} passHref>
            <h5 className="mb-2 text-xl  font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700 mt-4 cursor-pointer">
              {project?.name || ""}
            </h5>
            </Link>
            <p className="text-gray-700">
             {project?.desc || ""}
            </p>
            <Link href={`projects/${project.slug}`} passHref >
            <span  className=" cursor-pointer inline-flex items-center font-semibold transition-colors  text-mantis-700 mt-8 transform  group-hover:translate-x-2 transition duration-300">
              Learn more
              <span className="ml-4 group-hover:translate-x-2 transition duration-300">
                →
              </span>
            </span>
            </Link>
          </div>
          ))}


          
        </div>
    </>
  )
}

export default ProjectCard