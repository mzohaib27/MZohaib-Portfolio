"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsData } from "../utils/constants";
import ProjectTab from "./ProjectTab";
import Animate from "../utils/motion";

const Projects = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <div className="my-6 mx-4 flex flex-col items-center justify-center space-y-4">
        <div className="flex">
          <h1 className="text-4xl font-semibold border-b-2 border-white text-white">
            My Projects
          </h1>
        </div>
        <div className="flex gap-2">
          <ProjectTab
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTab
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTab
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   text-white">
          {filteredProjects.map((project) => (
            <Animate ypos={200} key={project.id}>
              <div
                key={project.id}
                className="border-gray-400 transitio-colors transition-transform transform hover:-translate-y-2 border-2 rounded-xl"
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  tags={project.tag}
                  link={project.link}
                  githubLink={project.link2}
                />
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
