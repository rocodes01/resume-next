import React from "react";
import ProjectCard from "../ProjectCard/Index";

interface Props {}

const Projects = (props: Props) => {
  return (
    <div>
      <h1 className="text-7xl font-bold space-x-1 py-2 px-20">My Work</h1>
      <h6 className="text-gray-700 text-2xl px-20">
        Some of my recent projects
      </h6>
      <ProjectCard />
    </div>
  );
};

export default Projects;
