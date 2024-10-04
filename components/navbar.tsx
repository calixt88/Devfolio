'use client'; // Ensure this component is a Client Component

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarBrand,
} from "@nextui-org/navbar";
import { Link as NextLink } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { DevfolioLogo, GithubIcon } from "@/components/icons";
import { button as buttonStyles } from "@nextui-org/theme";

const scrollToY = (y: number) => {
    window.scrollTo({
        top: y,
        behavior: 'smooth' // Enables smooth scrolling
    });
};

export const Navbar = () => {
    return (
        <NextUINavbar
            maxWidth="xl"
            className="pt-4 top-24px z-50" 
            style={{ backgroundColor: 'transparent' }}
        >
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <DevfolioLogo size={75} />
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                <button
                    onClick={() => scrollToY(0)}
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                        color: "success",
                        size: "md",
                    })}
                >
                    About
                </button>
                <button
                    onClick={() => scrollToY(1000)}
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                        color: "success",
                        size: "md",
                    })}
                >
                    Experience
                </button>
                <button
                    onClick={() => scrollToY(1500)}
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                        color: "success",
                        size: "md",
                    })}
                >
                    Projects
                </button>
                <button
                    onClick={() => scrollToY(2000)}
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                        color: "success",
                        size: "md",
                    })}
                >
                    Contact
                </button>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <NextLink isExternal href={siteConfig.links.github} aria-label="Github">
                    <GithubIcon className="text-default-500" />
                </NextLink>
                <ThemeSwitch />
            </NavbarContent>
        </NextUINavbar>
    );
};
