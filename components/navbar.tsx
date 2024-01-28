import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	LetterCIcon

} from "@/components/icons";

import { Logo } from "@/components/icons";
import { button as buttonStyles } from "@nextui-org/theme";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<LetterCIcon />
						<p className="font-bold text-inherit">Calixt Charlebois</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ color: "default", radius: "full", variant: "shadow", size: "md"})}
				>
					About
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ color: "default", radius: "full", variant: "shadow", size: "md"})}
				>
					Projects
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ color: "default", radius: "full", variant: "shadow", size: "md"})}
				>
					Skills
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ color: "default", radius: "full", variant: "shadow", size: "md"})}
				>
					Contact
				</Link>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
		</NextUINavbar>
	);
};
