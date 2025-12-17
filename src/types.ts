import type { FunctionComponent, SVGProps } from "react";

export interface NavItem {
	label: string;
	href: string;
	active: boolean;
}

export type IconProps = SVGProps<SVGSVGElement> & {
	size?: number | string;
};

export interface StatItem {
	icon: FunctionComponent<IconProps>;
	value: string;
	label: string;
}

export interface ServiceItem {
	icon: FunctionComponent<IconProps>;
	title: string;
	description: string;
	colorClass: string;
}

export interface Project {
	title: string;
	description: string;
	image: string;
	tags: string[];
}

export interface ChatMessage {
	role: "user" | "model";
	text: string;
}
