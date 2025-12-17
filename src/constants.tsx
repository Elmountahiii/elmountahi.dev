import {
	Monitor,
	PenTool,
} from "lucide-react";
import type { ServiceItem } from "./types";

export const SERVICES: ServiceItem[] = [
	{
		icon: Monitor,
		title: "Web Development",
		description:
			"Building high-performance websites with clean code and modern architectures.",
		colorClass: "text-orange-500",
	},
	{
		icon: PenTool,
		title: "UI/UX Design",
		description:
			"Crafting modern, intuitive user interfaces that delight users.",
		colorClass: "text-orange-500", // Using orange to match the image accent
	},
];

// Context for the AI Assistant
export const PORTFOLIO_CONTEXT = `
You are an AI assistant for Suhaib's portfolio website.
Suhaib is a Passionate FullStack Web Developer from Bangalore, India.
He has been coding for over 5 years, starting in 2020.
He specializes in React.js, Next.js, TypeScript, and building SaaS applications.
His mission is bridging the gap between design and development.
He loves clean code, dark mode, and immersive digital experiences.
Answer questions as if you are his digital representative. Be professional but friendly.
`;
