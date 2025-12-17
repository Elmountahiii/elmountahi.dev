import React from "react";
import {
	Code2,
	Database,
	Cloud,
	Terminal,
	Cpu,
	Layout,
	Smartphone,
	Box,
} from "lucide-react";

// Asset Imports
import awsIcon from "../assets/aws_icon.svg";
import dockerIcon from "../assets/docker_icon.svg";
import goIcon from "../assets/go_icon.svg";
import javaIcon from "../assets/java_icon.svg";
import jsIcon from "../assets/javascript_icon.svg";
import k8sIcon from "../assets/kubernetes_icon.svg";
import nextIcon from "../assets/nextjs_icon.svg";
import nodeIcon from "../assets/nodejs_icon.svg";
import pgIcon from "../assets/postgres_icon.svg";
import pyIcon from "../assets/python_icon.svg";
import reactIcon from "../assets/react_icon.svg";
import sqliteIcon from "../assets/sqlite_icon.svg";
import tailwindIcon from "../assets/tailwindscss_icon.svg";
import tsIcon from "../assets/typescript_icon.svg";

interface TechBadgeProps {
	name: string;
	size?: "sm" | "md";
}

const IconMap: Record<string, string> = {
	react: reactIcon,
	"react native": reactIcon,
	"next.js": nextIcon,
	"next.js 14": nextIcon,
	typescript: tsIcon,
	"node.js": nodeIcon,
	python: pyIcon,
	golang: goIcon,
	go: goIcon,
	postgresql: pgIcon,
	postgres: pgIcon,
	aws: awsIcon,
	kubernetes: k8sIcon,
	k8s: k8sIcon,
	tailwindcss: tailwindIcon,
	tailwind: tailwindIcon,
	docker: dockerIcon,
	java: javaIcon,
	javascript: jsIcon,
	sqlite: sqliteIcon,
};

// Helper to pick an icon or image asset
const getIconContent = (name: string): string | React.ReactNode => {
	const lower = name.toLowerCase();

	// Check explicit map first
	if (IconMap[lower]) {
		return IconMap[lower];
	}

	// Fallback to Lucide icons for generics
	if (lower.includes("azure"))
		return <Cloud size={14} className="text-[#0078D4]" />;
	if (lower.includes("google") || lower.includes("firebase"))
		return <Cloud size={14} className="text-[#FFCA28]" />;
	if (lower.includes("db") || lower.includes("sql") || lower.includes("mongo"))
		return <Database size={14} className="text-zinc-400" />;
	if (lower.includes("graph"))
		return <Cpu size={14} className="text-[#E10098]" />;
	if (lower.includes("test") || lower.includes("jest"))
		return <Terminal size={14} className="text-red-400" />;
	if (lower.includes("app") || lower.includes("mobile"))
		return <Smartphone size={14} className="text-zinc-400" />;
	if (lower.includes("terra"))
		return <Box size={14} className="text-[#623CE4]" />;
	if (lower.includes("tremor"))
		return <Layout size={14} className="text-blue-500" />;

	return <Code2 size={14} className="text-zinc-500" />;
};

const TechBadge: React.FC<TechBadgeProps> = ({ name, size = "md" }) => {
	const content = getIconContent(name);
	const isImage = typeof content === "string";

	const iconElement = isImage ? (
		<img
			src={content as string}
			alt=""
			className={size === "sm" ? "w-3 h-3" : "w-4 h-4"}
		/>
	) : (
		React.isValidElement(content) &&
		React.cloneElement(content as React.ReactElement<React.SVGProps<SVGSVGElement>>, {
			width: size === "sm" ? 12 : 16,
			height: size === "sm" ? 12 : 16,
		})
	);

	return (
		<span
			className={`
      inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-white/20 hover:text-white hover:bg-white/10 cursor-default
      ${size === "sm" ? "px-2 py-1 text-[10px] tracking-wide font-medium uppercase" : "px-3 py-1.5 text-xs font-medium"}
    `}
		>
			{iconElement}
			{name}
		</span>
	);
};

export default TechBadge;
