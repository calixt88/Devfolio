'use client'; // Ensure this component is a Client Component

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { DevfolioLogo, GithubIcon } from "@/components/icons";
import { button as buttonStyles } from "@nextui-org/theme";

const scrollToY = (y: number) => {
  window.scrollTo({
    top: y,
    behavior: 'smooth', 
  });
};

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      className="pt-4 z-50"
      style={{ 
        position: 'fixed', 
        top: '0', 
        width: '100%', 
        backgroundColor: 'transparent' 
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <button
            onClick={() => scrollToY(0)}
            className="flex justify-start items-center gap-1 bg-transparent border-none outline-none cursor-pointer"
            style={{ padding: 0 }}
          >
            <DevfolioLogo size={75} />
          </button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <button
          onClick={() => scrollToY(0)}
          className={buttonStyles({
            radius: "full",
            color: "success",
            size: "md",
            variant: "bordered",
          })}
        >
          About
        </button>
        <button
          onClick={() => scrollToY(650)}
          className={buttonStyles({
            radius: "full",
            color: "success",
            size: "md",
            variant: "bordered",
          })}
        >
          Experience
        </button>
        <button
          onClick={() => scrollToY(1400)}
          className={buttonStyles({
            radius: "full",
            color: "success",
            size: "md",
            variant: "bordered",
          })}
        >
          Languages
        </button>
        <button
          onClick={() => scrollToY(2250)}
          className={buttonStyles({
            radius: "full",
            color: "success",
            size: "md",
            variant: "bordered",
          })}
        >
          Projects
        </button>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <GithubIcon className="text-default-500" />
        </a>
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
