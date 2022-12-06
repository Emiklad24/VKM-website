import React from "react";
import { RoughNotation } from "react-rough-notation";
import { BiBriefcase, BiSearchAlt } from "react-icons/bi";
import { FaChild, FaRegHospital } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { AiOutlineControl } from "react-icons/ai";
import { MdReduceCapacity } from "react-icons/md";
import { motion } from "framer-motion";

const Services = () => {
  // const [animationShown, setAnimationShown] = React.useState(false);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 min-h-screen font-sans">
      <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-mantis-100">
            What we do
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block ">
            <span className="relative">Delivering</span>
          </span>{" "}
          <RoughNotation
            type="highlight"
            multiline={true}
            padding={[2, 2]}
            iterations={1}
            strokeWidth={2}
            animationDuration={2000}
            color="#F59E0B"
            show={true}
            animationDelay={200}
          >
            cutting-edge
          </RoughNotation>{" "}
          services
        </h2>

        <p className="text-base text-gray-900 md:text-lg">
          Our expertise spans health systems strengthening, electronic health
          records, financial management,monitoring and evaluation, and project
          management.
        </p>
      </div>

      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3 my-10">
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Facilities management, and Operations
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              asperiores nam. Ex tenetur illum vitae placeat expedita autem
              doloremque! Officiis saepe repellat nisi soluta voluptate
              consequatur, fuga eveniet deleniti vel optio accusamus.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Policies, Plans Procedure, and Technology
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              asperiores nam. Ex tenetur illum vitae placeat expedita autem
              doloremque! Officiis saepe repellat nisi soluta voluptate
              consequatur, fuga eveniet deleniti vel optio accusamus.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Training, Excersing and evaluation.
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              asperiores nam. Ex tenetur illum vitae placeat expedita autem
              doloremque! Officiis saepe repellat nisi soluta voluptate
              consequatur, fuga eveniet deleniti vel optio accusamus.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Internal communications, and Information Technology.
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              asperiores nam. Ex tenetur illum vitae placeat expedita autem
              doloremque! Officiis saepe repellat nisi soluta voluptate
              consequatur, fuga eveniet deleniti vel optio accusamus.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Crises and emergency risk communication and public information and
              warning.
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              asperiores nam. Ex tenetur illum vitae placeat expedita autem
              doloremque! Officiis saepe repellat nisi soluta voluptate
              consequatur, fuga eveniet deleniti vel optio accusamus.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Surveillance and control
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              asperiores nam. Ex tenetur illum vitae placeat expedita autem
              doloremque! Officiis saepe repellat nisi soluta voluptate
              consequatur, fuga eveniet deleniti vel optio accusamus.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Information collection, integration and sharing.
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              asperiores nam. Ex tenetur illum vitae placeat expedita autem
              doloremque! Officiis saepe repellat nisi soluta voluptate
              consequatur, fuga eveniet deleniti vel optio accusamus.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Incident management
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              asperiores nam. Ex tenetur illum vitae placeat expedita autem
              doloremque! Officiis saepe repellat nisi soluta voluptate
              consequatur, fuga eveniet deleniti vel optio accusamus.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between p-5 border rounded shadow-md"
          whileHover={{ scale: 1.05, position: "relative", zIndex: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mantis-50">
              <MdReduceCapacity className="text-mantis-700" size={30} />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-mantis-700">
              Coordination and logistical support of field operations
            </h6>
            <p className="mb-3 text-sm text-gray-900  leading-8">
              Providing training on various courses including database
              management, statistical analysis, GIS using the open source QGIS,
              project management and public health.
            </p>
          </div>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-mantis-700"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
