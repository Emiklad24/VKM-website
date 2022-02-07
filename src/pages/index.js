/* eslint-disable @next/next/no-img-element */
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero
        headerPix="/potrait-unsplash.jpg"
        title={"Modern, seamless solutions at "}
        titleHighlighted={"record time"}
        subtitle=" With our strong and creative workforce, we customize and implement
        projects in extremely short time interval."
      />
      <Stats />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
