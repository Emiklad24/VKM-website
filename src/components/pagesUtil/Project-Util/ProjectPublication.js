import React, { useState } from "react";

const ProjectPublication = ({ publication }) => {
  const [view, setView] = useState(false);

  const toggleView = () => {
    setView(!view);
  };

  return (
    <div className="flex items-center justify-center py-8 ">
      <div className="relative flex flex-col items-center justify-center w-10/12 lg:w-6/12 shadow-2xl rounded-xl p-8 bg-mantis-50">
        <p className="text-2xl text-mantis-700">
          {!view
            ? " Click to see related publications"
            : "Related Publications"}{" "}
        </p>
        {!view ? (
          <button
            onClick={toggleView}
            className="text-mantis-700 hover:text-white hover:bg-mantis-700 border-2 border-mantis-700 rounded-lg p-2 mt-4"
          >
            View Publications
          </button>
        ) : (
          ""
        )}
        {view ? (
          <div className="w-4/6 min-w-4/6 mt-8 ">
            <ul className="w-full list-disc">
              {publication?.map((item, idx) => (
                <a
                  key={idx}
                  className="cursor-pointer text-blue-800 w-full"
                  href={item.link}
                  target="blank"
                >
                  {" "}
                  <li className="mb-4 w-full break-words">{item.link}</li>
                </a>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectPublication;
