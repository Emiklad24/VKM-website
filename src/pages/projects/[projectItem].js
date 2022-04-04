/* eslint-disable @next/next/no-img-element */
import projectList from "@assets/constants/ProjectList"
import Container from "@components/Container/Container";
import { useRouter } from "next/router";
import Image from "next/image";


function SingleProject({ project }) {
  const router = useRouter();
  const { projectItem } = router.query;
  const currentProjectInView = project.filter((teamProject) => teamProject.slug === projectItem);

  return (
    <Container>
      <section className="py-24 bg-white overflow-hidden font-sans mb-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 h-half">
              <div className="relative mx-auto h-full ">
                <Image 
                 className="  h-full mb-6 lg:h-80 xl:h-96 "
                  src={currentProjectInView?.[0].img || ""}
                  alt={currentProjectInView?.[0].name || ""}
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter text-mantis-700">{currentProjectInView?.[0].name || ""}</h2>

              <div className="flex flex-wrap flex-col -mx-4 my-6 text-justify md:text-left">

                <p className="text-lg leading-lg px-4">
                  <span className="font-bold mr-2">Client:</span> Unicef
                </p>
                <p className="text-lg leading-lg px-4">
                  <span className="font-bold mr-2">Start Date:</span>  December 2020
                </p>
                <p className="text-lg leading-lg px-4">
                  <span className="font-bold mr-2">End Date:</span>  January 2021
                </p>
              </div>
              <div className="flex flex-wrap -mx-4 text-justify md:text-left">
                <p className="text-lg leading-lg px-4">
                  {currentProjectInView?.[0]?.desc || ""}
                </p>
              </div>
            </div>
          </div>
          <div className="my-20 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-3xl text-center  leading-tight font-bold tracking-tighter text-mantis-700">
            Gallery
          </h2>
          <div className="grid gap-6 row-gap-5 lg:grid-cols-3 min-h-20 w-full ">
          {projectList.map((project, idx) =>(
            <div key={project?.name || idx} className=" h-full">
            <Image
            className="  h-full mb-6  "
            src={project?.img || ""}
            alt={project?.alt || ""}
            width={100}
              height={100}
              layout="responsive"
            />
            
           
          </div>
          ))}
          </div>
          </div>
        </div>
      </section>
    </Container>
  )
};


export async function getStaticProps() {
  return {
    props: {
      project: projectList,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = projectList.map((post) => ({
    params: { projectItem: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export default SingleProject;
