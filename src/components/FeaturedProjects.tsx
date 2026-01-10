import React, { useState } from "react";
import {
	Github,
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	Layers,
	Code2,
} from "lucide-react";
import { getTechIcon } from "../utils/techIcons";
import type { Category, Project } from "../types";

// --- Data ---
const PROJECTS: Project[] = [
	{
		id: "chat-rap",
		title: "Real Time Chat Application",
		subtitle: "Research & Development",
		category: "Backend",
		description:
			"Advanced ACE step model architecture for high-fidelity rap music generation trained on Azure ML with A100 GPUs.",
		tags: ["Nextjs", "TypeScript", "MongoDB", "ExpressJs"],
		links: { github: "#", demo: "#" },
		color: "from-blue-500/20 to-purple-500/20",
		images: [
			"https://cdn.dribbble.com/userupload/33759247/file/original-843528744c20cc0ac932f935fb5b5d29.png?resize=2048x1535&vertical=center",
			"https://cdn.dribbble.com/userupload/25339118/file/original-0ec75dc101df0d1296ba97c5c9566ed5.jpg?resize=1504x1128&vertical=center",
		],
		featured: true,
	},
	{
		id: "ai-image-gen",
		title: "AI Image Generator",
		subtitle: "SaaS Application",
		category: "Full Stack",
		description:
			"A powerful AI-based image generation tool allowing users to create stunning visuals from text prompts using the latest diffusion models.",
		tags: ["React", "Node.js", "OpenAI API", "Stripe"],
		links: { github: "#", demo: "#" },
		color: "from-green-500/20 to-emerald-500/20",
		images: [
			"https://cdn.dribbble.com/userupload/18009481/file/original-4595c2853b30d76b95a832c25c593351.png?resize=1504x1128&vertical=center",
			"https://cdn.dribbble.com/userupload/18009482/file/original-9c3623e007e791570155db06763a2f48.png?resize=1504x1128&vertical=center",
		],
		featured: true,
	},
	{
		id: "ecommerce-platform",
		title: "Modern E-commerce Store",
		subtitle: "Frontend Architecture",
		category: "Frontend",
		description:
			"A high-performance headless e-commerce frontend built with Next.js 14, featuring advanced filtering, optimistic UI updates, and seamless animations.",
		tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Zustand"],
		links: { github: "#", demo: "#" },
		color: "from-pink-500/20 to-rose-500/20",
		images: [
			"https://cdn.dribbble.com/userupload/7237622/file/original-8d2612b33cb266fc48b8f75259db7e3e.png?resize=2048x1432&vertical=center",
			"https://cdn.dribbble.com/userupload/7237623/file/original-832029e6b0d749b3e7c5469314fee5f3.png?resize=2048x1432&vertical=center",
		],
		featured: true,
	},
	{
		id: "devops-dashboard",
		title: "Cloud Infrastructure Monitor",
		subtitle: "DevOps Tooling",
		category: "DevOps",
		description:
			"Real-time monitoring dashboard for Kubernetes clusters, providing visualization of pod health, resource usage, and network traffic.",
		tags: ["Docker", "Kubernetes", "Grafana", "Prometheus"],
		links: { github: "#", demo: "#" },
		color: "from-orange-500/20 to-red-500/20",
		images: [
			"https://cdn.dribbble.com/userupload/8817245/file/original-fe6d08b5e2b3f7fb2fad97cfbe501ac3.png?resize=2048x1536&vertical=center",
			"https://cdn.dribbble.com/userupload/8817247/file/original-4079cce3288d91dba7efd112bd595966.png?resize=2048x1280&vertical=center",
		],
		featured: true,
	},
];

const CATEGORIES: Category[] = ["All", "Full Stack", "Frontend", "Backend"];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = project.images;

	const nextSlide = (e: React.MouseEvent) => {
		e.preventDefault();
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = (e: React.MouseEvent) => {
		e.preventDefault();
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	return (
		<div
			className={`group relative flex flex-col bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_80px_-15px_rgba(255,255,255,0.1)] ${
				project.featured ? "md:col-span-2 lg:flex-row" : ""
			}`}
		>
			<div
				className={`relative overflow-hidden bg-[#050505] transition-transform duration-700 ${
					project.featured
						? "lg:w-[55%] h-72 sm:h-80 lg:h-auto"
						: "h-64 sm:h-72"
				}`}
			>
				<div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
					<img
						src={slides[currentSlide]}
						alt={project.title}
						className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
					/>
				</div>

				<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>

				{slides.length > 1 && (
					<>
						<div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<button
								type="button"
								onClick={prevSlide}
								className="p-2.5 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md hover:bg-black/80 hover:scale-110 transition-all active:scale-95"
							>
								<ChevronLeft size={20} />
							</button>
							<button
								type="button"
								onClick={nextSlide}
								className="p-2.5 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md hover:bg-black/80 hover:scale-110 transition-all active:scale-95"
							>
								<ChevronRight size={20} />
							</button>
						</div>

						<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
							{slides.map((_, idx) => (
								<button
									key={`${project.id}-slide-${idx}`}
									type="button"
									onClick={(e) => {
										e.preventDefault();
										setCurrentSlide(idx);
									}}
									className={`h-1.5 rounded-full transition-all duration-300 ${
										currentSlide === idx
											? "bg-white w-6"
											: "bg-white/30 w-1.5 hover:bg-white/50"
									}`}
								/>
							))}
						</div>
					</>
				)}

				<div className="absolute top-6 left-6">
					<span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest">
						{project.category}
					</span>
				</div>
			</div>

			<div
				className={`flex-1 p-8 sm:p-10 flex flex-col transition-colors duration-500 ${
					project.featured ? "lg:w-[45%]" : ""
				}`}
			>
				<div className="mb-10">
					<div className="flex -space-x-3 sm:-space-x-4">
						{project.tags.map((tag, idx) => {
							const icon = getTechIcon(tag);
							return (
								<div
									key={tag}
									className="group/tech-icon relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-4 border-[#0A0A0A] bg-[#151515] flex items-center justify-center p-2.5 sm:p-3 shadow-2xl hover:-translate-y-3 hover:rotate-3 hover:z-20 transition-all duration-500 cursor-help"
									style={{ zIndex: 10 - idx }}
								>
									{icon ? (
										<img
											src={icon}
											alt={tag}
											className="w-full h-full object-contain"
										/>
									) : (
										<Code2 size={24} className="text-zinc-600" />
									)}

									<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-white text-black text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/tech-icon:opacity-100 transition-all duration-300 translate-y-2 group-hover/tech-icon:translate-y-0 pointer-events-none shadow-2xl whitespace-nowrap z-30">
										<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 -z-10"></div>
										{tag}
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="mb-6">
					<div className="flex items-center gap-3 mb-3">
						<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
							{project.subtitle}
						</span>
						<div
							className={`h-px flex-1 bg-gradient-to-r ${project.color} opacity-30`}
						></div>
					</div>
					<h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-500">
						{project.title}
					</h3>
					<p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
						{project.description}
					</p>
				</div>

				<div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4">
					{project.links.demo && (
						<a
							href={project.links.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all active:scale-[0.98]"
						>
							<ExternalLink size={16} />
							Live Preview
						</a>
					)}

					{project.links.github && (
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all active:scale-[0.98]"
						>
							<Github size={16} />
							Source Code
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

const FeaturedProjects: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<Category>("All");

	const filteredProjects =
		activeCategory === "All"
			? PROJECTS
			: PROJECTS.filter((project) => project.category === activeCategory);

	const sectionId = "work";

	return (
		<section id={sectionId} className="space-y-12">
			<div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
				<div className="space-y-4">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
						<div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
						Portfolio
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
						Selected <span className="text-zinc-500">Works.</span>
					</h2>
					<p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
						A curated selection of projects demonstrating my expertise in
						full-stack development, AI research, and system architecture.
					</p>
				</div>

				<div className="flex flex-wrap gap-1 bg-[#111] border border-white/5 p-1 rounded-2xl">
					{CATEGORIES.map((cat) => (
						<button
							key={cat}
							type="button"
							onClick={() => setActiveCategory(cat)}
							className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
								activeCategory === cat
									? "bg-zinc-800 text-white shadow-lg shadow-black/50"
									: "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
							}`}
						>
							{cat}
						</button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{filteredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

			{filteredProjects.length === 0 && (
				<div className="py-24 text-center border border-dashed border-white/10 rounded-[2.5rem] bg-white/[0.02]">
					<Layers size={48} className="mx-auto text-zinc-800 mb-6" />
					<p className="text-zinc-500 text-lg">
						No projects found in this category yet.
					</p>
				</div>
			)}
		</section>
	);
};

export default FeaturedProjects;
