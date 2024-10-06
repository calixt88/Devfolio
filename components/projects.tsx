import { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

import React, { Suspense } from 'react';
import { Image, Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { AzureIcon, CIcon, CPPIcon, CSharpIcon, DotNetCoreIcon, DotNetIcon, GithubIcon, JavaIcon, JavaScriptIcon, LeftArrowIcon, LinkedInIcon, MongoDBIcon, PythonIcon, ReactIcon, ResumeIcon, RightArrowIcon } from "@/components/icons";
import ParticlesComponent from '@/components/ParticlesComponent';
import Experience from '@/components/experience';
import Projects from '@/components/projects';

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectData = [
    {
        projectName: 'xClicker',
        description: 'An Autoclicker that resembles the linux based application xclicker created using Java and JavaFX.',
        image: '/Users/calixtcharlebois/Development/Devfolio/public/images/msoe.png',
    },
    {
        projectName: 'Project2',
        description: 'Lorem Ipsum',
        image: 'public/images/autoclicker.png',
    },
    {
        projectName: 'Project3',
        description: 'Lorem Ipsum',
        image: 'public/images/autoclicker.png',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-center flex-col mt-80 mb-80">
      <h1 className={title({ size: "lg", color: "foreground" })}>Projects</h1>
      <div className="flex justify-between items-center w-full mt-10">
        <div className="flex justify-center items-center w-full max-w-md mx-auto transition-transform transform">
          <Link className={buttonStyles({ variant: "bordered", radius: "full", color: "success" })}onClick={handleNext}><LeftArrowIcon size={40} /></Link>
          <Card className="py-4 shadow-lg w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{projectData[currentIndex].projectName}</h4>
              <small className="text-default-500">{projectData[currentIndex].description}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
            <img src={projectData[currentIndex].image} className="w-full h-auto rounded-lg" />
            </CardBody>
          </Card>
          <Link className={buttonStyles({ variant: "bordered", radius: "full", color: "success" })}onClick={handleNext}><RightArrowIcon size={40} /></Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
