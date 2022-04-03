/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RoughNotation } from "react-rough-notation";
import { AnimatePresence, motion } from "framer-motion";

export const Partners = () => {
  return (
    <section className="py-20 xl:pt-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="max-w-lg mb-12 font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto testimonial-title text-center">
          Clients &{" "}
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
            Products{" "}
          </RoughNotation>

        </h2>
        <div className="flex flex-wrap justify-center -mx-4">

          <motion.div
            className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 shadow-md flex items-center ml-2 h-28 "
            whileHover={{ scale: 1.03, position: "relative", zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="mx-auto h-4/5 "
              src="/drpc.png"
              alt=""


            />
          </motion.div>

          <motion.div
            className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 shadow-md flex items-center ml-2 h-28"
            whileHover={{ scale: 1.03, position: "relative", zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="mx-auto h-4/5"
              src="/unicef.png"
              alt="UNICEF"


            />
          </motion.div>
          <motion.div
            className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 shadow-md flex items-center ml-2 h-28"
            whileHover={{ scale: 1.03, position: "relative", zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="mx-auto h-4/5"
              src="/fhi.png"
              alt=""


            />
          </motion.div>
          <motion.div
            className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0 shadow-md flex items-center ml-2 h-28"
            whileHover={{ scale: 1.03, position: "relative", zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="mx-auto h-4/5"
              src="/jsi.jpg"
              alt=""


            />
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4 mt-12">
          <motion.div
            className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 shadow-md flex items-center ml-2 h-28"
            whileHover={{ scale: 1.03, position: "relative", zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="mx-auto h-4/5"
              src="/reporta.svg"
              alt="Reporta Health App"


            />
          </motion.div>
          <motion.div
            className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0 shadow-md flex items-center ml-2 h-28"
            whileHover={{ scale: 1.03, position: "relative", zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="mx-auto h-4/5"
              src="/reaps.svg"
              alt="REAPS App"

            />
          </motion.div>
          <motion.div
            className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0 shadow-md flex items-center ml-2 h-28"
            whileHover={{ scale: 1.03, position: "relative", zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="mx-auto h-4/5"
              src="/dsrg.png"
              alt="DISREG App"


            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
