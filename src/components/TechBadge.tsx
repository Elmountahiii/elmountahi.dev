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
	size?: "sm" | "md" | "lg";
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

	const iconSizes = {
		sm: "w-3 h-3",
		md: "w-4 h-4",
		lg: "w-6 h-6",
	};

	const lucideSizes = {
		sm: 12,
		md: 16,
		lg: 24,
	};

	const iconElement = isImage ? (
		<img
			src={content as string}
			alt=""
			className={`${iconSizes[size]} object-contain`}
		/>
	) : (
		React.isValidElement(content) &&
		React.cloneElement(
			content as React.ReactElement<React.SVGProps<SVGSVGElement>>,
			{
				width: lucideSizes[size],
				height: lucideSizes[size],
			},
		)
	);

	const styles = {
		sm: "px-2 py-1 text-[10px] tracking-wide font-medium uppercase",
		md: "px-3 py-1.5 text-xs font-medium",
		lg: "px-4 py-2.5 text-sm font-semibold",
	};

	return (
		<span
			className={`
      inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-white/20 hover:text-white hover:bg-white/10 cursor-default group
      ${styles[size]}
    `}
		>
			<span className="group-hover:scale-110 transition-transform duration-300">
				{iconElement}
			</span>
			{name}
		</span>
	);
};

export default TechBadge;
