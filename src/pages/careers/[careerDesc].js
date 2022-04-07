/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Container from "@components/Container/Container";
import { useRouter } from "next/router";
import path from '@assets/constants/CareerPaths';
import Link from "next/link";



function SingleCareer({ career }) {
    const router = useRouter();
    const { careerDesc } = router.query;
    const currentJobInView = career.filter((job) => job.title === careerDesc);
   
    return (
        <Container>
            <section className="py-24 bg-white overflow-hidden font-sans mb-4  ">
                <div className="container px-4 mx-auto w-8/12 ">
                    <div className="flex flex-col flex-wrap -mx-4">
                        <h2 className="mb-4 text-4xl  leading-tight font-bold tracking-tighter text-mantis-700">
                            {currentJobInView?.[0]?.title || ""}
                        </h2>
                        <p className="text-base leading-lg px-4">
                            {currentJobInView?.[0]?.desc || ""}
                        </p>
                        <div className="my-10">
                        <h2 className="mb-4 text-2xl  leading-tight font-bold tracking-tighter text-mantis-700">
                            Responsibilities
                        </h2>
                        <p className="text-base leading-lg px-4">
                            {currentJobInView?.[0]?.desc || ""}
                        </p>
                        </div>



                        <div className="my-10">
                        <h2 className="mb-4 text-2xl  leading-tight font-bold tracking-tighter text-mantis-700">
                            Qualifications
                        </h2>
                        <p className="text-base leading-lg px-4">
                            {currentJobInView?.[0]?.desc || ""}
                        </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-9/12  text-center p-6 shadow bg-gray-100">
                <h2 className="mb-4 text-xl  leading-tight  tracking-tighter text-mantis-700">
                If this sounds like a place you'd like to come to work, we humbly suggest we could do some great things together. Please get in touch with a CV or portfolio.
                        </h2>
                        <div className="text-center">
          <Link href="/" passHref>
            <a
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-mantis-700 hover:bg-mantis-800 focus:shadow-outline focus:outline-none"
              passHref
            >
              Submit Application
            </a>
          </Link>
        </div>
                </div>
            </section>
            
        </Container>
    )
};


export async function getStaticProps() {
    return {
        props: {
            career: path,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const paths = path.map((post) => ({
        params: { careerDesc: post.title },
    }));

    return { paths, fallback: "blocking" };
}

export default SingleCareer;
