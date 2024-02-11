"use client";
import Image from "next/image";
import React from "react";
import img from "../../../public/computer.jpeg";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="lg:flex gap-4 text-gray-400">
        <li>Node.js,</li>
        <li>Express.js,</li>
        <li>React.js,</li>
        <li>Next.js,</li>
        <li>MongoDB,</li>
        <li>TailwindCSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="md:flex gap-6 text-gray-400">
        <ul>
          <li className="text-gray-200">Post Graduate College Jhelum</li>
          <li>F.Sc Engeenring</li>
          <li>2012 - 2014</li>
        </ul>
        <ul>
          <li className="text-gray-200">Jaipur National University, India</li>
          <li>Bachelor of Computer Application</li>
          <li>2021 - 2024</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certifications",
    content: (
      <ul className="text-gray-400">
        <li className="text-gray-200">PNY Trainings Lahore</li>
        <li>MERN Stack Developer</li>
        <li>Sep-2023 to Dec-2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <>
      <div className="lg:flex gap-12 py-16 text-white">
        <div>
          <Image
            src={img}
            alt="about-image"
            className="shadow-2xl shadow-purple-600 "
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="text-4xl font-semibold border-b-2 border-white">
              About
            </h1>
          </div>
          <p className="py-4 text-lg text-gray-400">
            A Lead Software Developer with 3+ years of experience developing
            innovative software solutions and applications for enterprise
            customers. A proven track record of building and leading diverse
            development teams throughout all phases of SDLC. Adept at
            coordinating with cross-functional stakeholders to execute
            multi-million-dollar technology projects.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-6">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
