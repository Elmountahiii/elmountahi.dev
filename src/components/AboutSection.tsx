import React from "react";
import { Code2, Terminal, Database } from "lucide-react";
import TechBadge from "./TechBadge";

const TECH_CATEGORIES = [
	{
		title: "Frontend",
		description: "User interface & Experience",
		icon: <Code2 className="text-blue-400" size={28} />,
		skills: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Tailwind",
			"Next.js",
		],
		color: "blue",
	},
	{
		title: "Backend",
		description: "Server logic & Architecture",
		icon: <Terminal className="text-green-400" size={28} />,
		skills: ["Node.js", "Python", "Go", "Java", "Express", "Postgres"],
		color: "green",
	},
	{
		title: "Infrastructure",
		description: "Deployment & Data management",
		icon: <Database className="text-purple-400" size={28} />,
		skills: ["Docker", "Kubernetes", "AWS", "MongoDB", "Postgres", "SQLite"],
		color: "purple",
	},
];

const AboutSection: React.FC = () => {
	return (
		<section id="about" className="py-24 relative overflow-hidden">
			{/* Background Ambient Effects */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
				<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
			</div>

			<div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
				<div className="text-center space-y-4 mb-20">
					<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
						Technical{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-rose-500">
							Arsenal
						</span>
					</h2>
					<p className="text-zinc-400 max-w-2xl mx-auto text-lg">
						A focused collection of technologies I've mastered and use to build
						high-performance products.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{TECH_CATEGORIES.map((category) => (
						<div
							key={category.title}
							className="group relative flex flex-col p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-500 shadow-2xl"
						>
							{/* Category Header */}
							<div className="flex items-center gap-4 mb-8">
								<div
									className={`p-4 rounded-2xl bg-zinc-800 border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-black/20`}
								>
									{category.icon}
								</div>
								<div>
									<h3 className="text-2xl font-bold text-white">
										{category.title}
									</h3>
									<p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
										{category.description}
									</p>
								</div>
							</div>

							{/* Tech Grid - Highly Visible for Recruiter/HR */}
							<div className="grid grid-cols-1 gap-3">
								{category.skills.map((skill) => (
									<TechBadge key={skill} name={skill} size="lg" />
								))}
							</div>

							{/* Subtle Bottom Accent */}
							<div
								className={`mt-8 h-1 w-12 rounded-full bg-${category.color}-500/30 group-hover:w-full transition-all duration-700`}
							></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
