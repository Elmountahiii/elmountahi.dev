import React from "react";
import {
	Github,
	Mail,
	Code2,
	Terminal,
	Database,
	ExternalLink,
} from "lucide-react";
import TechBadge from "./TechBadge";

const TECH_CATEGORIES = [
	{
		title: "Frontend",
		icon: <Code2 className="text-blue-400" size={20} />,
		skills: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
	},
	{
		title: "Backend",
		icon: <Terminal className="text-green-400" size={20} />,
		skills: ["Node.js", "Python", "Golang", "Java"],
	},
	{
		title: "Cloud & Data",
		icon: <Database className="text-purple-400" size={20} />,
		skills: ["PostgreSQL", "SQLite", "AWS", "Docker", "Kubernetes"],
	},
];

const AboutSection: React.FC = () => {
	return (
		<section id="about" className="py-24 relative overflow-hidden">
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

			<div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row gap-16">
					<div className="flex-1 space-y-8">
						<div className="space-y-4">
							<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
								About <span className="text-zinc-400">Me</span>
							</h2>
							<div className="h-1 w-20 bg-blue-500 rounded-full"></div>
						</div>

						<div className="prose prose-invert prose-lg text-zinc-400 leading-relaxed font-light">
							<p>
								I've been coding for over{" "}
								<span className="text-white font-medium">5 years</span>,
								starting my journey in 2020. What began as a simple curiosity
								about how the web works has evolved into a passionate career
								building complex, scalable SaaS applications.
							</p>
							<p>
								My philosophy is simple:{" "}
								<span className="text-white font-medium">
									Solve real problems
								</span>
								. I don't just write code; I architect solutions that prioritize
								performance, user experience, and maintainability. From
								optimizing database queries to crafting 60fps animations, I
								obsess over the details that matter.
							</p>
						</div>

						<div className="flex flex-wrap gap-4 pt-4">
							<a
								href="https://github.com/elmountahiii"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 hover:bg-zinc-800 transition-all"
							>
								<Github
									className="text-white group-hover:scale-110 transition-transform"
									size={20}
								/>
								<span className="font-medium text-zinc-200">Github</span>
							</a>
							<a
								href="mailto:contact@example.com"
								className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl hover:bg-zinc-200 transition-all font-medium"
							>
								<Mail
									className="group-hover:scale-110 transition-transform"
									size={20}
								/>
								<span>Get in touch</span>
							</a>
						</div>
					</div>

					<div className="flex-1">
						<div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
							<h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
								<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400">
									<Code2 size={18} />
								</span>
								Technical Arsenal
							</h3>

							<div className="grid gap-8">
								{TECH_CATEGORIES.map((category) => (
									<div key={category.title} className="space-y-4">
										<div className="flex items-center gap-3 text-sm font-medium text-zinc-400 uppercase tracking-wider">
											{category.icon}
											{category.title}
										</div>
										<div className="flex flex-wrap gap-2.5">
											{category.skills.map((skill) => (
												<TechBadge key={skill} name={skill} />
											))}
										</div>
									</div>
								))}
							</div>

							<div className="mt-8 pt-8 border-t border-white/5">
								<button
									type="button"
									className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors cursor-pointer"
								>
									View full résumé <ExternalLink size={14} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
