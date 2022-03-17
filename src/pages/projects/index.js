/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RoughNotation } from "react-rough-notation";
import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";

const projects = () => {
  return (
    <Container>
      <Hero
        headerPix="/team.webp"
        title={"Welcome our talented team of  "}
        titleHighlighted={"professionals"}
        subtitle="Our team provides a consultative approach to problem solving. We are a team of experienced professionals who care about your success"
      />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Core </span>
            </span>{" "}
            <RoughNotation
              type="highlight"
              multiline={true}
              padding={[0, 2]}
              iterations={1}
              strokeWidth={2}
              animationDuration={2000}
              color="#F59E0B"
              show={true}
              animationDelay={500}
            >
              team
            </RoughNotation>
          </h2>
          <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
            New History
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              A slice of heaven
            </h5>
            <p className="text-gray-700">
              O for awesome, this chocka full cuzzie is as rip-off as a cracker.
              Meanwhile, in behind the bicycle shed, Hercules Morse.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's
              bottom, eh, Data? When has justice ever been as simple as a rule
              book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's
              bottom, eh, Data? When has justice ever been as simple as a rule
              book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's
              bottom, eh, Data? When has justice ever been as simple as a rule
              book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's
              bottom, eh, Data? When has justice ever been as simple as a rule
              book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's
              bottom, eh, Data? When has justice ever been as simple as a rule
              book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's
              bottom, eh, Data? When has justice ever been as simple as a rule
              book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's
              bottom, eh, Data? When has justice ever been as simple as a rule
              book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Storage shed
            </h5>
            <p className="text-gray-700">
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              suscipit leo. Carpe diem vulputate est nec commodo rutrum.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default projects;
