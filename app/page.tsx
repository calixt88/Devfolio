// use client
import React, { Suspense } from 'react';
import { Card, CardFooter, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { LinkedInIcon } from "@/components/icons";
import { ResumeIcon } from '@/components/icons';
import { RightArrowIcon } from '@/components/icons';

function MyCard() {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
            <Image
                alt="Woman listening to music"
                className="object-cover"
                height={200}
                src="/images/hero-card.jpeg"
                width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                    Notify me
                </Button>
            </CardFooter>
        </Card>
    );
}

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
				<h1 className={title({ size: "lg", color: "violet" })}>Calixt&nbsp;</h1>
				<h1 className={title({ size: "lg", color: "violet" })}>Charlebois</h1>
				<h1 className={title({ size: "lg" })}>,&nbsp;</h1>
				<br />
				<h1 className={title({ size: "lg", color: "foreground" })}>Software Engineer&nbsp;</h1>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full", color: "secondary" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full", color: "secondary" })}
					href={siteConfig.links.linkedin}
				>
					<LinkedInIcon size={20} />
					LinkedIn
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full", color: "secondary" })}
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
					className={buttonStyles({ variant: "bordered", radius: "full", color: "secondary" })}
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

