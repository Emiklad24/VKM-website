import React from 'react'
import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import PublicationCard from '@components/pagesUtil/Publication-Util/PublicationCard'
const publications = () => {
  return (
    <div>
       <Container title="Publications - Projects are perfectly done" description="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"> 
     <Hero
        headerPix="/projects.webp"
        title={"Featured  "}
        titleHighlighted={"Publications"}
        subtitle="Our team has published and been featured in a few articles "
      />

      <section className="w-11/12 mx-auto ">
        <PublicationCard/>
      </section>
    </Container>
      
    </div>
  )
}

export default publications