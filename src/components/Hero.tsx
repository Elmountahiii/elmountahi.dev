import React from "react";
import {
	ArrowRight,
	Download,
	MapPin,
	Code2,
	Github,
	Linkedin,
	Twitter,
} from "lucide-react";
import TechBadge from "./TechBadge";

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="relative pt-20 pb-20 md:pt-32 md:pb-40 overflow-hidden"
		>
			{/* Background Decorative Elements */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
				<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
				<div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
				{/* Avatar & Availability */}
				<div className="flex flex-col items-center space-y-4 animate-in fade-in zoom-in duration-1000">
					<div className="relative group">
						<div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
						<div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 shadow-2xl">
							<img
								src="https://pub-8fc7302d3d604e5bbda371ecc2381e8c.r2.dev/images/Color%20Correction.png"
								alt="Youssef El Mountahi"
								className="w-full h-full object-cover transition-all duration-500"
							/>
						</div>
					</div>
				</div>

				{/* Hero Content */}
				<div className="space-y-6 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
					<h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
						Full Stack{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-rose-500">
							Developer
						</span>{" "}
					</h1>
					<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
						Hi, I'm Youssef. A Full Stack Developer based in Morocco. I
						specialize in crafting exceptional web applications with modern
						technologies and a focus on performance.
					</p>
				</div>

				{/* Actions */}
				<div className="flex flex-wrap items-center justify-center gap-4 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
					<a
						href="/resume.pdf"
						className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 group shadow-xl shadow-white/5"
					>
						<Download size={18} />
						Resume
					</a>
					<a
						href="#work"
						className="px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 group"
					>
						My Projects
						<ArrowRight
							size={18}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</a>
				</div>

				{/* Location */}
				<div className=" flex flex-col items-center gap-12 animate-in slide-in-from-bottom-8 duration-1000 delay-400">
					<div className="flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-zinc-500">
						<div className="flex items-center gap-2">
							<MapPin size={14} className="text-zinc-400" />
							<span>Casablanca, Morocco</span>
						</div>
						<div className="flex items-center gap-2">
							<Code2 size={14} className="text-zinc-400" />
							<span>3+ Years Experience</span>
						</div>
						<div className="flex gap-4 ml-2">
							{[
								{
									icon: Github,
									href: "https://github.com/elmountahiii",
									label: "GitHub",
								},
								{
									icon: Linkedin,
									href: "https://www.linkedin.com/in/elmountahiii/",
									label: "LinkedIn",
								},
								{
									icon: Twitter,
									href: "https://twitter.com/elmountahiii",
									label: "Twitter",
								},
							].map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-500 hover:text-white transition-colors"
									aria-label={social.label}
								>
									<social.icon size={20} />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
