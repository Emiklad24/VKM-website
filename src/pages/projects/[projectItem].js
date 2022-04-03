/* eslint-disable @next/next/no-img-element */
import projectList from "@assets/constants/ProjectList"
import Container from "@components/Container/Container";
import { useRouter } from "next/router";


function SingleProject({ project }) {
  const router = useRouter();
  const { projectItem } = router.query;
  const currentProjectInView = project.filter((teamProject) => teamProject.slug === projectItem);
  console.log("hello", currentProjectInView)
  console.log("he", projectItem)
  return (
    <Container>
      <section className="py-24 bg-white overflow-hidden font-sans mb-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <div className="relative mx-auto md:ml-0 max-w-max">
                <img
                  src={currentProjectInView?.[0].img.src}
                  alt={currentProjectInView?.[0].name || ""}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter text-mantis-700">{currentProjectInView?.[0].name || ""}</h2>

              <div className="flex flex-wrap -mx-4 text-justify md:text-left">
                <p className="text-lg leading-lg px-4">
                  {currentProjectInView?.[0]?.desc || ""}
                </p>
              </div>
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
