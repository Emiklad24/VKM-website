/* eslint-disable @next/next/no-img-element */
import React from "react";
import TeamMembers from "@components/pagesUtil/Team-Util/TeamMembers";
import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import { dehydrate, QueryClient } from 'react-query';
import {getTeam} from "@services/getTeam.service"
import {GET_ALL_TEAM} from "@config/queryKeys"
import { useGetTeam } from "@hooks/useGetTeam.hook";  



const Team = () => {
 const {data} = useGetTeam()
 
  return (
    <Container
      title="Team - Welcome our talented team of  professionals"
      description="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"
    >
      <Hero
        headerPix="/team.webp"
        title={"Welcome our talented team of  "}
        titleHighlighted={"professionals"}
        subtitle="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"
      />
      <TeamMembers data={data} />
    </Container>
  );
};



export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
 
  await queryClient.prefetchQuery({
    queryKey: GET_ALL_TEAM,
    queryFn: getTeam,
  })

  

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }

     
}



export default Team;
