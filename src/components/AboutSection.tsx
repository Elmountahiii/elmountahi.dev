import React from "react";
import { Github, ArrowUpRight, Mail, Layers } from "lucide-react";
import TechBadge from "./TechBadge";

const TECH_STACK = [
	"React",
	"Next.js",
	"TypeScript",
	"Node.js",
	"Java",
	"Golang",
	"PostgreSQL",
	"AWS",
];

const AboutSection: React.FC = () => {
	return (
		<section id="about" className="relative">
			{/* Background Decoration */}
			<div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				{/* Left Column: Bio */}
				<div className="space-y-8 relative">
					<div className="flex items-center justify-between max-w-md">
						<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
							About me.
						</h2>
					</div>

					<div className="text-zinc-400 leading-relaxed text-lg space-y-6 font-light">
						<p>
							I have been coding for over{" "}
							<span className="text-zinc-200 font-medium">5 years</span>,
							beginning my journey in 2020. What started as a curiosity for how
							websites work has evolved into a career building complex SaaS
							applications.
						</p>
						<p>
							My first project was a simple website built with HTML & CSS in
							mid-2020. Since then, I've dived deep into the modern stack,
							obsessing over{" "}
							<span className="text-zinc-200 font-medium">performance</span> and{" "}
							<span className="text-zinc-200 font-medium">user experience</span>
							.
						</p>
						<p>
							I don't just write code; I solve problems. Whether it's optimizing
							database queries or crafting fluid animations, I focus on shipping
							high-quality software.
						</p>
					</div>
				</div>

				{/* Right Column: Skills & Actions */}
				<div className="space-y-10 lg:pt-20">
					{/* Skills / Tech Stack */}
					<div className="space-y-4 bg-card/30 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
						<div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest font-mono mb-2">
							<Layers size={14} />
							Core Stack
						</div>
						<div className="flex flex-wrap gap-2">
							{TECH_STACK.map((tech) => (
								<TechBadge key={tech} name={tech} />
							))}
						</div>
					</div>

					{/* CTAs */}
					<div className="flex flex-wrap gap-4">
						<a
							href="https://github.com/elmountahiii"
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 inline-flex justify-center items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-white/5"
						>
							<Github size={20} />
							GitHub
							<ArrowUpRight size={16} />
						</a>
						<a
							href="#contact"
							className="flex-1 inline-flex justify-center items-center gap-2 bg-[#1a1a1a] text-white border border-white/10 px-6 py-3 rounded-xl font-medium hover:bg-[#222] hover:border-white/20 transition-all"
						>
							<Mail size={20} />
							Contact
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
