/* eslint-disable @next/next/no-img-element */
import teamMembers from "@assets/constants/TeamMembers-List";
import Container from "@components/Container/Container";
import { dehydrate, QueryClient } from "react-query";
import { getTeamMate } from "@services/getTeamMate.service";
import { GET_TEAM_MATE } from "@config/queryKeys";
import { useGetTeamMate } from "@hooks/useGetTeamMate.hook";
import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";
import { BsMedium } from "react-icons/bs";
import { SiDevdotto, SiOrcid, SiGitlab } from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
function TeamMember() {
  const {
    data: [teamMateData],
  } = useGetTeamMate();



  const SocialMediaIcon = {
    
    linkedin: <IoLogoLinkedin color="#558830" size="33"/>,
    facebook: <IoLogoFacebook color="#558830" size="33"/>,
    gitlab: <SiGitlab color="#558830" size="33"/>,
    "dev.to": <SiDevdotto color="#558830" size="33"/>,
    orcid: <SiOrcid color="#558830" size="33"/>,
    twitter: <FaTwitter color="#558830" size="33"/>,
    github: <VscGithubInverted color="#558830" size="33"/>,
    website: <BsGlobe color="#558830" size="33"/>,
    }


  
  return (
    <Container
      title={`${
        teamMateData?.name || "Team"
      } - Welcome our talented team of professionals`}
      description={`Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success`}
    >
      <section className="py-24 bg-white overflow-hidden font-sans mb-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <div className="relative mx-auto md:ml-0 max-w-max">
                <img src={teamMateData?.personal_photos?.[0]?.url || ""} alt={teamMateData?.personal_photos?.[0]?.alternativeText || ""} />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter text-mantis-700">
                {teamMateData?.name || ""}
              </h2>
              <p className="mb-12 text-lg md:text-2xl leading-tight font-bold tracking-tighter">
                {teamMateData?.designation|| ""}
              </p>
              <div className="flex flex-wrap -mx-4 text-justify md:text-left">
                <p className="text-lg leading-lg px-4">{teamMateData?.bio|| ""}</p>
              </div>
              <div className="mt-8 py-4 flex justify-evenly">
                {
                  teamMateData?.profile_informations?.map((socialLink) => {
                    return (
                      <a
                        key={socialLink.id}
                        href={socialLink.Value}
                        target="_blank"
                        rel="noopener noreferrer"
                        
                      >
                        {SocialMediaIcon[socialLink.type_of_profile_information]}
                        
                        
                      </a>
                    );
                  })
                }
                
                {/* <IoLogoLinkedin color="#558830" size="33"/>
                <IoLogoFacebook color="#558830" size="33"/>
                <BsMedium color="#558830" size="33"/>
                <SiDevdotto color="#558830" size="33"/>
                <BsGlobe color="#558830" size="33"/>
                <SiOrcid color="#558830" size="33"/>
                <VscGithubInverted color="#558830" size="33"/>
                <SiGitlab color="#558830" size="33"/>
                <FaTwitter color="#558830" size="33"/> */}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Container>
  );
}



export async function getStaticProps(ctx) {
  const { teamMember } = ctx.params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_TEAM_MATE, teamMember],
    queryFn: getTeamMate,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  const paths = teamMembers.map((page) => ({
    params: { teamMember: page.slug },
  }));

  return { paths, fallback: "blocking" };
}

export default TeamMember;
