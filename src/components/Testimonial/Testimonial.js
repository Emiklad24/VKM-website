/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RoughNotation } from "react-rough-notation";

const Testimonial = () => {
  return (
    <section className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-sans">
      <div className="container px-4 mx-auto">
        <div
          className="max-w-lg mx-auto mb-12 text-center"
          uk-scrollspy="target: .testimonial-title; cls:uk-animation-slide-bottom-small; delay: 500; repeat:false"
        >
          <img className="mx-auto" src="metis-assets/icons/quote.svg" alt="" />
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto testimonial-title">
            Don’t just take{" "}
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
              our word
            </RoughNotation>{" "}
            for it
          </h2>
          <p className="text-blueGray-400 leading-loose testimonial-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div
          className="flex flex-wrap -mx-3 mb-6"
          uk-scrollspy="target: .testimonial-item; cls:uk-animation-fade; delay: 500; repeat:false"
        >
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 testimonial-item">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-xl">John Bailey</p>
                  <p className="text-blue-600">CEO</p>
                </div>
              </div>
              <p className="text-blueGray-400 leading-loose">
                In et sagittis risus, sed molestie sapien. Suspendisse potenti.
                Sed pharetra, leo quis dignissim tristique, arcu arcu varius
                libero, ut vestibulum sapien odio facilisis nunc.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 testimonial-item">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-xl">Julie Brown</p>
                  <p className="text-blue-600">Head of Development</p>
                </div>
              </div>
              <p className="text-blueGray-400 leading-loose">
                In et sagittis risus, sed molestie sapien. Suspendisse potenti.
                Sed pharetra, leo quis dignissim tristique, arcu arcu varius
                libero, ut vestibulum sapien odio facilisis nunc.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 testimonial-item">
            <div className="p-8 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-xl">Julie Jones</p>
                  <p className="text-blue-600">Head of Operations</p>
                </div>
              </div>
              <p className="text-blueGray-400 leading-loose">
                In et sagittis risus, sed molestie sapien. Suspendisse potenti.
                Sed pharetra, leo quis dignissim tristique, arcu arcu varius
                libero, ut vestibulum sapien odio facilisis nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
