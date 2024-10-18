"use client";
import React, { Suspense } from 'react';
import { Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";
import ParticlesComponent from '@/components/ParticlesComponent';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Languages from '@/components/languages';

export default function Home() {

  return (
    <Suspense fallback={<div>Loading background...</div>}>
      <ParticlesComponent id="tsparticles" />
      <section className="flex flex-col gap-4 py-8 md:py-10 min-h-screen relative z-0 bg-transparent mt-100">
        <div className="inline-block max-w-lg text-left justify-center bg-transparent" >
          <h1 className={title({ size: "lg" })}>Hello! I&apos;m&nbsp;</h1>
          <h1 className={title({ size: "lg", color: "green" })}>Calixt&nbsp;</h1>
          <h1 className={title({ size: "lg", color: "green" })}>Charlebois</h1>
          <h1 className={title({ size: "lg" })}>,&nbsp;</h1>
          <br />
          <h1 className={title({ size: "lg", color: "foreground" })}>Software Engineer&nbsp;</h1>
        </div>

        <div className="flex gap-3 bg-transparent">
          <Link
            isExternal
            className={buttonStyles({ radius: "full", color: "success", variant: "bordered" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
          <Link
            isExternal
            className={buttonStyles({ radius: "full", color: "success", variant: "bordered" })}
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon size={20} />
            LinkedIn
          </Link>
          <Link
            isExternal
            className={buttonStyles({ radius: "full", color: "success", variant: "bordered", })}
            href={"/images/CalixtCharleboisResume.pdf"}
            download="CalixtCharleboisResume.pdf"
          >
            <ResumeIcon size={20} />
            Resume
          </Link>
        </div>
        <br />
        <div className="inline-block max-w-lg text-center justify-center bg-transparent mb-20">
          <p>
            I&apos;m a recent graduate of Milwaukee School of Engineering with a bachelors in Software Engineering. I have experience in many individual and team-based projects from internships, side projects with other developers, and from full time positions. I am currently working as a Software Developer. 
          </p>
        </div>
        <Experience></Experience>
        <Languages></Languages>
        <Projects></Projects>
      </section>
    </Suspense>
  );
}