import React, { useState } from "react";
import {
	Github,
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	Code,
	Layers,
} from "lucide-react";
import TechBadge from "./TechBadge";
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
	},
];

const CATEGORIES: Category[] = [
	"All",
	"Full Stack",
	"Frontend",
	"Backend",
	"DevOps",
];

// --- Project Card Component ---
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
		<div className="group flex flex-col bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl">
			{/* Carousel Section */}
			<div className="relative h-56 sm:h-64 w-full bg-[#050505] border-b border-white/5 group-hover:border-white/10 transition-colors">
				{/* Slide Content */}
				<div className="absolute inset-0 transition-opacity duration-500">
					<img
						src={slides[currentSlide]}
						alt={project.title}
						className="w-full h-full object-cover opacity-90"
					/>
				</div>

				{/* Gradient Overlay for text readability if needed, though we moved text out */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

				{/* Navigation Controls - Visible on Hover */}
				{slides.length > 1 && (
					<>
						<button
							type="button"
							onClick={prevSlide}
							className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 hover:scale-110 z-10"
						>
							<ChevronLeft size={18} />
						</button>
						<button
							type="button"
							onClick={nextSlide}
							className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 hover:scale-110 z-10"
						>
							<ChevronRight size={18} />
						</button>

						{/* Indicators */}
						<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
							{slides.map((_, idx) => (
								<button
									key={`${project.id}-slide-${idx}`}
									type="button"
									onClick={(e) => {
										e.preventDefault();
										setCurrentSlide(idx);
									}}
									className={`w-1.5 h-1.5 rounded-full transition-all ${
										currentSlide === idx
											? "bg-white w-3"
											: "bg-white/40 hover:bg-white/60"
									}`}
								/>
							))}
						</div>
					</>
				)}
			</div>

			{/* Content Section */}
			<div className="flex-1 p-6 flex flex-col">
				<div className="mb-4">
					<div className="flex items-center justify-between mb-2">
						<span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
							{project.subtitle}
						</span>
						{/* Small colored accent based on category */}
						<span
							className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}
						></span>
					</div>
					<h3 className="text-xl font-bold text-white mb-2 leading-tight">
						{project.title}
					</h3>
					<p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
						{project.description}
					</p>
				</div>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-6 mt-auto">
					{project.tags.map((tag) => (
						<TechBadge key={tag} name={tag} size="sm" />
					))}
				</div>

				{/* Action Buttons Footer */}
				<div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
					{project.links.demo ? (
						<a
							href={project.links.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-white text-xs font-medium hover:bg-white hover:text-black transition-all group/btn"
						>
							<ExternalLink size={14} />
							Live Demo
						</a>
					) : (
						<button
							disabled
							type="button"
							className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-zinc-600 text-xs font-medium cursor-not-allowed opacity-50"
						>
							<ExternalLink size={14} />
							Private
						</button>
					)}

					{project.links.github ? (
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-white text-xs font-medium hover:bg-white hover:text-black transition-all"
						>
							<Github size={14} />
							View Code
						</a>
					) : (
						<button
							disabled
							type="button"
							className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-zinc-600 text-xs font-medium cursor-not-allowed opacity-50"
						>
							<Code size={14} />
							Private
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

// --- Main Component ---

const FeaturedProjects: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<Category>("All");

	const filteredProjects =
		activeCategory === "All"
			? PROJECTS
			: PROJECTS.filter((project) => project.category === activeCategory);

	return (
		<section id="work" className="space-y-8">
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold text-white">Selected Works.</h2>
					<p className="text-zinc-400 max-w-lg">
						A curated selection of projects demonstrating my expertise in
						full-stack development, AI research, and system architecture.
					</p>
				</div>

				{/* Filter Pills */}
				<div className="flex flex-wrap gap-1 bg-[#111] border border-white/5 p-1 rounded-lg">
					{CATEGORIES.map((cat) => (
						<button
							key={cat}
							type="button"
							onClick={() => setActiveCategory(cat)}
							className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
								activeCategory === cat
									? "bg-zinc-800 text-white shadow-sm"
									: "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
							}`}
						>
							{cat}
						</button>
					))}
				</div>
			</div>

			{/* Grid Layout */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{filteredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

			{filteredProjects.length === 0 && (
				<div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
					<Layers size={48} className="mx-auto text-zinc-700 mb-4" />
					<p className="text-zinc-500">
						No projects found in this category yet.
					</p>
				</div>
			)}
		</section>
	);
};

export default FeaturedProjects;
