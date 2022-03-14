import teamMembers from "../../assets/constants/TeamMembers-List";
import Container from "../../components/Container/Container";

function TeamMember({ team }) {
  console.log(team);
  return (
    <Container
      headerPix="/team.webp"
      title={"Welcome our talented team of  "}
      titleHighlighted={"professionals"}
      subtitle="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"
    >
      hello
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      team: teamMembers,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = teamMembers.map((post) => ({
    params: { teamMember: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export default TeamMember;
