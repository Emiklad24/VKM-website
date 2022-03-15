import React from "react";
import AboutUs from "../components/pagesUtil/About-Util/AboutUs/AboutUs";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";

const About = () => {
  return (
    <Container>
      <Hero
        headerPix="/about.webp"
        title={"We’re here because of "}
        titleHighlighted={"you"}
        subtitle="Our goal is simply summarized as using our industry knowledge and
        field experience to provide innovative, high quality and cost
        effective solutions."
      />
      <AboutUs />
    </Container>
  );
};

export default About;
