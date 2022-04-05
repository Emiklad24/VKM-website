/* eslint-disable @next/next/no-img-element */
import projectList from "@assets/constants/ProjectList";
import Container from "@components/Container/Container";
import { useRouter } from "next/router";
import Image from "next/image";

function SingleProject({ project }) {
  const router = useRouter();
  const { projectItem } = router.query;
  const currentProjectInView = project.filter(
    (teamProject) => teamProject.slug === projectItem
  );

  return (
    <Container
      title={`${currentProjectInView?.[0]?.name || ""} - ${
        currentProjectInView?.[0]?.desc || ""
      }`}
      description={currentProjectInView?.[0]?.desc || ""}
    >
      <section className="py-20 font-sans">
        <div className="container px-4 mx-auto mb-16">
          <div className="max-w-xl lg:max-w-2xl mx-auto text-center">
            <h2 className="mb-6 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading text-mantis-700">
              {currentProjectInView?.[0].name || ""}
            </h2>
            <div className="flex items-center justify-center">
              <div className="mr-6">
                <img
                  className="w-16 h-16 object-cover rounded-full"
                  src="/unicef.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-mantis-700">
                  UNICEF
                </h3>
                <p className="text-lg text-mantis-700">February 26, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-12 lg:mb-16 ">
          <Image
            className="w-full h-full object-cover"
            src={currentProjectInView?.[0].img || ""}
            alt={currentProjectInView?.[0].name || ""}
            layout="responsive"
            height={50}
            width={50}
          />
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <p className="mb-6 lg:mb-8 text-lg leading-loose lg:text-xl lg:leading-relaxed text-gray-500">
              {currentProjectInView?.[0]?.desc || ""}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

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
