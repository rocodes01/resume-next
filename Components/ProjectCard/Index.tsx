import React from "react";
interface Props {}

const ProjectCard = (props: Props) => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="card w-3/4 h-2/5 rounded ">
        <div className=" card-body">
          <h1 className="text-5xl text-purple-900 font-bold">Webchef</h1>
          <h3 className="text-3xl">
            A platform for web developer to practice.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
