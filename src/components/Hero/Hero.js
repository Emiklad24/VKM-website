/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
import React from "react";
import { RoughNotation } from "react-rough-notation";

// const Hero = ({ headerPix, title, titleHighlighted, subtitle }) => {
//   return (
//     <section className="min-h-screen relative pb-8 overflow-y-hidden font-sans">
//       <div className=" bg-opacity-50 bg-mantis-500 hidden lg:block absolute top-0 left-0 bottom-0 w-2/5 object-cover z-40"></div>
//       <img
//         className="hidden lg:block absolute top-0 left-0 bottom-0 w-2/5 object-cover"
//         src={headerPix}
//         alt="hero image"
//       />
//       <div className="relative container px-4 mx-auto">
//         <div className="w-full lg:w-3/5 lg:pl-16 ml-auto">
//           <div className="mt-10 lg:mt-20 mb-20">
//             <h2 className="max-w-lg mb-8 text-3xl  md:text-4xl md:leading-tight lg:text-5xl lg:leading-normal font-bold font-heading">
//               {title}

//               <RoughNotation
//                 type="highlight"
//                 multiline={true}
//                 padding={[0, 2]}
//                 iterations={1}
//                 strokeWidth={2}
//                 animationDuration={2000}
//                 color="#F59E0B"
//                 show={true}
//                 animationDelay={500}
//               >
//                 <strong>{titleHighlighted}</strong>
//               </RoughNotation>
//             </h2>
//             <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
//               {subtitle}
//             </p>
//             <div>
//               <a className="inline-flex items-center justify-center w-full h-12 p-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-mantis-700 hover:bg-mantis-900 focus:shadow-outline focus:outline-none">
//                 Get started
//               </a>
//               <a
//                 className="block md:inline-block px-5 py-3 text-sm text-center font-semibold text-mantis-700 hover:text-white hover:bg-mantis-900 border border-mantis-700 hover:border-mantis-900 rounded transition duration-200"
//                 href="#"
//               >
//                 Learn more
//               </a>
//             </div>
//           </div>
//           <div className="flex flex-wrap items-center justify-center -mx-2">
//             <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12 text-center lg:text-left">
//               <img className="inline-block h-20" src="/unicef.png" alt="" />
//             </div>
//             <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12 text-center lg:text-left">
//               <img className="inline-block h-20" src="drpc.png" alt="" />
//             </div>
//             <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12 text-center lg:text-left">
//               <img className="inline-block h-20" src="fhi.png" alt="" />
//             </div>
//             <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12 text-center lg:text-left">
//               <img className="inline-block h-20" src="/jsi.jpg" alt="" />
//             </div>
//             <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-12 text-center lg:text-left">
//               <img className="inline-block h-20" src="/reporta.svg" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
//         <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
//         <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
//           <div className="flex items-center mb-12">
//             <a className="mr-auto text-2xl font-semibold leading-none" href="#">
//               <img
//                 className="h-8"
//                 src="plain-assets/logos/plain-mantis.svg"
//                 alt=""
//                 width="auto"
//               />
//             </a>
//             <button className="navbar-close">
//               <svg
//                 className="h-6 w-6 cursor-pointer hover:text-mantis-500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           <div>
//             <ul>
//               <li className="mb-1">
//                 <a
//                   className="block p-4 text-sm font-semibold hover:bg-mantis-50 hover:text-mantis-500 rounded"
//                   href="#"
//                 >
//                   About
//                 </a>
//               </li>
//               <li className="mb-1">
//                 <a
//                   className="block p-4 text-sm font-semibold hover:bg-mantis-50 hover:text-mantis-500 rounded"
//                   href="#"
//                 >
//                   Company
//                 </a>
//               </li>
//               <li className="mb-1">
//                 <a
//                   className="block p-4 text-sm font-semibold hover:bg-mantis-50 hover:text-mantis-500 rounded"
//                   href="#"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li className="mb-1">
//                 <a
//                   className="block p-4 text-sm font-semibold hover:bg-mantis-50 hover:text-mantis-500 rounded"
//                   href="#"
//                 >
//                   Testimonials
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="mt-auto">
//             <p className="mt-6 mb-4 text-sm text-center text-gray-500">
//               <span>© 2022 All rights reserved.</span>
//             </p>
//           </div>
//         </nav>
//       </div>
//     </section>
//   );
// };

// export default Hero;

export const Hero = ({ headerPix, title, titleHighlighted, subtitle }) => {
  return (
    <section className=" font-sans">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={headerPix}
            alt="hero image"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-[150%]">
              {title}
              <br className="hidden md:block" />
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
                <strong>{titleHighlighted}</strong>
              </RoughNotation>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
