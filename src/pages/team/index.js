/* eslint-disable @next/next/no-img-element */
import React from "react";
import TeamMembers from "../../components/pagesUtil/Team-Util/TeamMembers";
import Container from "../../components/Container/Container";

const team = () => {
  return (
    <Container
      headerPix="/team.webp"
      title={"Welcome our talented team of  "}
      titleHighlighted={"professionals"}
      subtitle="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"
    >
      <TeamMembers />
    </Container>
  );
};

export default team;
