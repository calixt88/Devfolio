export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Calixt Charlebois Portfolio",
	description: "A Devfolio for Calixt Charlebois.",
	navItems: [
	{
		label: "Home",
		href: "/",
	},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
	],
	links: {
		github: "https://github.com/calixt88",
		linkedin: "https://www.linkedin.com/in/calixtcharlebois/",
	},
};
