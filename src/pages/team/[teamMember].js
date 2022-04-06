/* eslint-disable @next/next/no-img-element */
import teamMembers from "@assets/constants/TeamMembers-List";
import Container from "@components/Container/Container";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "react-query";
import { getTeamMate } from "@services/getTeamMate.service";
import { GET_TEAM_MATE } from "@config/queryKeys";
import { useGetTeamMate } from "@hooks/useGetTeamMate.hook";

function TeamMember({ team }) {
  const router = useRouter();
  const { teamMember } = router.query;
  // const currentTeamMemeberInView = team.filter(
  //   (teamPerson) => teamPerson.slug === teamMember
  // );

  const { data } = useGetTeamMate(teamMember);

  return (
    <Container title={`""} - ${""}`} description={""}>
      <section className="py-24 bg-white overflow-hidden font-sans mb-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <div className="relative mx-auto md:ml-0 max-w-max">
                <img src={""} alt={""} />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter text-mantis-700">
                {""}
              </h2>
              <p className="mb-12 text-lg md:text-2xl leading-tight font-bold tracking-tighter">
                {""}
              </p>
              <div className="flex flex-wrap -mx-4 text-justify md:text-left">
                <p className="text-lg leading-lg px-4">{""}</p>
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
