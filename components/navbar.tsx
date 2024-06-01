import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	DevfolioLogo,
	GithubIcon,
} from "@/components/icons";
import { button as buttonStyles } from "@nextui-org/theme";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="pt-4" style={{ backgroundColor: 'transparent' }}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<DevfolioLogo size={75} />
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ variant: "bordered", radius: "full", color: "success", size: "md" })}
				>
					About
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ variant: "bordered", radius: "full", color: "success", size: "md" })}
				>
					Projects
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ variant: "bordered", radius: "full", color: "success", size: "md" })}
				>
					Skills
				</Link>
				<Link
					isExternal
					href={siteConfig.links.linkedin}
					className={buttonStyles({ variant: "bordered", radius: "full", color: "success", size: "md" })}
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
