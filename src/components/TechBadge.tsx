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

interface TechBadgeProps {
	name: string;
	size?: "sm" | "md";
}

// Simple SVG icons for major brands to avoid external image dependencies
const BrandIcons: Record<string, React.ReactNode> = {
	React: (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#61DAFB]"
		>
			<ellipse
				cx="12"
				cy="12"
				rx="10"
				ry="4.5"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<ellipse
				cx="12"
				cy="12"
				rx="10"
				ry="4.5"
				transform="rotate(60 12 12)"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<ellipse
				cx="12"
				cy="12"
				rx="10"
				ry="4.5"
				transform="rotate(120 12 12)"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<circle cx="12" cy="12" r="1.5" fill="currentColor" />
		</svg>
	),
	"React Native": (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#61DAFB]"
		>
			<ellipse
				cx="12"
				cy="12"
				rx="10"
				ry="4.5"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<ellipse
				cx="12"
				cy="12"
				rx="10"
				ry="4.5"
				transform="rotate(60 12 12)"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<ellipse
				cx="12"
				cy="12"
				rx="10"
				ry="4.5"
				transform="rotate(120 12 12)"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<circle cx="12" cy="12" r="1.5" fill="currentColor" />
		</svg>
	),
	"Next.js": (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-white"
		>
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M8 8V16M16 16V8M8 8L16 16"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
	"Next.js 14": (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-white"
		>
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M8 8V16M16 16V8M8 8L16 16"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
	TypeScript: (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#3178C6]"
		>
			<rect
				x="4"
				y="4"
				width="16"
				height="16"
				rx="2"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M8 16V14M8 12H10M10 12V16M12 16V14C12 13 13 13 13 13"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M14 14.5C14 14.5 15 14 16 14C17 14 17 15 16 16C15 17 14 17 14 17"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
	"Node.js": (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#339933]"
		>
			<path
				d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
	TailwindCSS: (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#06B6D4]"
		>
			<path
				d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.244 17.86 10.018C17.482 6.613 14.607 4 11 4C7.134 4 4 7.134 4 11C4 11.26 4.015 11.514 4.045 11.764C2.288 12.555 1 14.46 1 16.5C1 19.538 3.462 22 6.5 22C6.93 22 7.348 21.953 7.75 21.864"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M12 14C14.2091 14 16 12.2091 16 10"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
	Python: (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#3776AB]"
		>
			<path
				d="M12 6C12 6 14 6 14 8C14 10 12 10 12 10H9C7 10 7 12 7 12V15C7 15 7 17 9 17C11 17 12 17 12 17"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M12 18C12 18 10 18 10 16C10 14 12 14 12 14H15C17 14 17 12 17 12V9C17 9 17 7 15 7C13 7 12 7 12 7"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
	AWS: (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#FF9900]"
		>
			<path
				d="M4 14C6 17 12 19 18 14"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M18 14L17 17"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	),
	Kubernetes: (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#326CE5]"
		>
			<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
			<path
				d="M12 3V7M12 17V21M3 12H7M17 12H21"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
	Go: (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="text-[#00ADD8]"
		>
			<path d="M4 12H10" stroke="currentColor" strokeWidth="1.5" />
			<path
				d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.5 8 9 9 10 10"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path d="M22 12H16" stroke="currentColor" strokeWidth="1.5" />
			<path
				d="M22 12C22 9.79086 20.2091 8 18 8C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16C19.5 16 21 15 22 14"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	),
};

// Helper to pick an icon
const getIcon = (name: string) => {
	// Exact match
	if (BrandIcons[name]) return BrandIcons[name];

	// Partial matches or Categories
	const lower = name.toLowerCase();
	if (lower.includes("react")) return BrandIcons["React"];
	if (lower.includes("next")) return BrandIcons["Next.js"];
	if (lower.includes("node")) return BrandIcons["Node.js"];
	if (lower.includes("python")) return BrandIcons["Python"];
	if (lower.includes("aws")) return BrandIcons["AWS"];
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
	const icon = getIcon(name);

	// Clone icon to adjust size if necessary, though we set mostly 14px/viewbox above
	const iconContent = React.isValidElement(icon)
		? React.cloneElement(icon as React.ReactElement<any>, {
				width: size === "sm" ? 12 : 16,
				height: size === "sm" ? 12 : 16,
			})
		: null;

	return (
		<span
			className={`
      inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-white/20 hover:text-white hover:bg-white/10 cursor-default
      ${size === "sm" ? "px-2 py-1 text-[10px] tracking-wide font-medium uppercase" : "px-3 py-1.5 text-xs font-medium"}
    `}
		>
			{iconContent}
			{name}
		</span>
	);
};

export default TechBadge;
