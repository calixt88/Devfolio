// use client
import React, { Suspense, useCallback } from 'react';
import { Card, CardFooter, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { LinkedInIcon } from "@/components/icons";
import { ResumeIcon } from '@/components/icons';
import { RightArrowIcon } from '@/components/icons';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'

export default function Home() {

	const list = [
		{
		  title: "C++",
		  img: "/images/cplusplus.png",
		},
		{
		  title: "Java",
		  img: "/images/java.png",
		},
		{
		  title: "Python",
		  img: "/images/python.png",
		},
		{
		  title: "Lemon",
		  img: "/images/msoe.png",
		},
		{
		  title: "Avocado",
		  img: "/images/msoe.png",
		},
		{
		  title: "Lemon 2",
		  img: "/images/msoe.png",
		},
		{
		  title: "Banana",
		  img: "/images/msoe.png",
		},
		{
		  title: "Watermelon",
		  img: "/images/msoe.png",
		},
	  ];
	return (
		<Suspense fallback={<div>Loading background...</div>}>
		<section className="flex flex-col gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-left justify-center">
				<h1 className={title({ size: "lg" })}>Hello! I'm&nbsp;</h1>
				<h1 className={title({ size: "lg", color: "green" })}>Calixt&nbsp;</h1>
				<h1 className={title({ size: "lg", color: "green" })}>Charlebois</h1>
				<h1 className={title({ size: "lg" })}>,&nbsp;</h1>
				<br />
				<h1 className={title({ size: "lg", color: "foreground" })}>Software Engineer&nbsp;</h1>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full", color: "success" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full", color: "success" })}
					href={siteConfig.links.linkedin}
				>
					<LinkedInIcon size={20} />
					LinkedIn
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full", color: "success" })}
					href={"/images/CalixtCharleboisResume.pdf"}
					download="CalixtCharleboisResume.pdf"
				>
					<ResumeIcon size={20} />
					Resume
				</Link>
			</div>
			<br />
			<div className="inline-block max-w-lg text-center justify-center">
				<p>
				I'm a Senior Software Engineering student at Milwaukee School of Engineering and I have a expected graduation date of May, 2024. I have experience in many individual and team based programming projects. I am currently a member of the Milwaukee School of Engineering club soccer team and MSOE Esports. I am working for Miller Electric as a Software Engineering Intern. How to contact me: calixtcharlebois@gmail.com or (906) 399-6739.
				</p>
			</div>
			<div className="inline-block max-w-lg text-left justify-center">
			<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full", color: "success" })}
					href={siteConfig.links.linkedin}
				>
					<RightArrowIcon size={20} />
					About Me!
				</Link>
			</div>
			<div className="text-center custom-margin-top">
          		<h1 className={title({ size: "lg", color: "foreground" })}>Skills</h1>
        	</div>
			<div className="flex justify-center">
			<div className="flex justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-5 custom-margin-top-small item-container" style={{ gap: '55px' }}>
        {list.map((item) => (
			 <div key={item.title} className="item-container flex flex-col justify-center items-center"> {/* Flex container */}
			 <Image
				 radius="lg"
				 width="75%"
				 height="75%"
				 alt={item.title}
				 className="w-full"
				 src={item.img}
			 />
			 <h3 className="item-title text-center mt-2">{item.title}</h3> {/* Title */}
		 </div>
        ))}
    </div>
</div>

</div>

		</section>
		</Suspense>
	);
}

