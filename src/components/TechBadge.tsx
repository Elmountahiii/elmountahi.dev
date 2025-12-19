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
import { getTechIcon } from "../utils/techIcons";

interface TechBadgeProps {
	name: string;
	size?: "sm" | "md";
}

const getIconContent = (name: string): string | React.ReactNode => {
	const lower = name.toLowerCase();

	const iconUrl = getTechIcon(name);
	if (iconUrl) {
		return iconUrl;
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
		React.cloneElement(
			content as React.ReactElement<React.SVGProps<SVGSVGElement>>,
			{
				width: size === "sm" ? 12 : 16,
				height: size === "sm" ? 12 : 16,
			},
		)
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
