import type { SVGProps } from "react";

export interface NavItem {
	label: string;
	href: string;
	active: boolean;
}

export type IconProps = SVGProps<SVGSVGElement> & {
	size?: number | string;
};

export interface ExperienceItem {
	role: string;
	company: string;
	period: string;
	description: string;
	current?: boolean;
}

export interface EducationItem {
	degree: string;
	institution: string;
	period: string;
	description: string[];
	image?: string;
}

export interface Certification {
	title: string;
	issuer: string;
	date: string;
	image: string;
	link: string;
	credentialImage?: string;
	iconColor?: string;
}

export type Category = "All" | "Full Stack" | "Frontend" | "Backend" | "DevOps";

export interface Project {
	id: string;
	title: string;
	subtitle: string;
	category: Category;
	description: string;
	tags: string[];
	links: {
		demo?: string;
		github?: string;
	};
	color: string;
	images: string[];
	featured?: boolean;
}
