import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { BiBriefcase } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiPackage } from "react-icons/fi";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 font-sans mt-20 mb-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="text-center shadow-md p-8"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-mantis-50 sm:w-12 sm:h-12">
            <BiBriefcase className="text-mantis-700" size={25} />
          </div>
          <h6 className="text-4xl font-extrabold text-mantis-700">
            <VisibilitySensor offset={{ bottom: 10 }} partialVisibility>
              {({ isVisible }) => <CountUp end={isVisible ? 30 : 0} />}
            </VisibilitySensor>
          </h6>
          <p className="mb-2 font-extrabold text-md text-mantis-700">
            Projects
          </p>
          {/* <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
            It’s something that’s many of the wisest people in history
          </p> */}
        </motion.div>
        <motion.div
          className="text-center shadow-md p-8"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-mantis-50 sm:w-12 sm:h-12">
            <HiUserGroup className="text-mantis-700" size={25} />
          </div>
          <h6 className="text-4xl font-extrabold text-mantis-700">
            <VisibilitySensor offset={{ bottom: 10 }} partialVisibility>
              {({ isVisible }) => <CountUp end={isVisible ? 7 : 0} />}
            </VisibilitySensor>
          </h6>
          <p className="mb-2 font-extrabold text-md text-mantis-700">Clients</p>
          {/* <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
            For many men, the acquisition of wealth does not
          </p> */}
        </motion.div>
        <motion.div
          className="text-center shadow-md p-8"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-mantis-50 sm:w-12 sm:h-12">
            <HiOutlineNewspaper className="text-mantis-700" size={25} />
          </div>
          <h6 className="text-4xl font-extrabold text-mantis-700">
            <VisibilitySensor offset={{ bottom: 10 }} partialVisibility>
              {({ isVisible }) => <CountUp end={isVisible ? 50 : 0} />}
            </VisibilitySensor>
          </h6>
          <p className="mb-2 font-extrabold text-md text-mantis-700">
            Publications
          </p>
          {/* <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
            It is a helluva start, being able to recognize what
          </p> */}
        </motion.div>

        <motion.div
          className="text-center shadow-md p-8"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-mantis-50 sm:w-12 sm:h-12">
            <FiPackage className="text-mantis-700" size={25} />
          </div>
          <h6 className="text-4xl font-extrabold text-mantis-700">
            <VisibilitySensor offset={{ bottom: 10 }} partialVisibility>
              {({ isVisible }) => <CountUp end={isVisible ? 5 : 0} />}
            </VisibilitySensor>
          </h6>
          <p className="mb-2 font-extrabold text-md text-mantis-700">
            Products
          </p>
          {/* <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
            Happiness is when what you think, what you say, and
          </p> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
