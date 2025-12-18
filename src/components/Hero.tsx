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

const Hero: React.FC = () => {
	return (
		<section id="home" className="relative pt-10 pb-20 md:pt-24 md:pb-32">
			<div className="absolute top-20 right-0 -z-10 opacity-20 overflow-hidden pointer-events-none">
				<div className="w-96 h-96 bg-blue-600 rounded-full blur-[128px] translate-x-1/2 translate-y-[-20%]"></div>
			</div>
			<div className="absolute bottom-0 left-0 -z-10 opacity-10 overflow-hidden pointer-events-none">
				<div className="w-64 h-64 bg-purple-600 rounded-full blur-[100px] -translate-x-1/2"></div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
				<div className="space-y-8 order-2 lg:order-1">
					<div className="space-y-4 animate-in slide-in-from-bottom-4 duration-700 delay-100">
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
							Full{" "}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
								Stack
							</span>{" "}
							Developer
						</h1>
						<p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
							Hi, I'm Youssef. A Full Stack Developer based in Morocoo. I
							transform ideas into exceptional digital experiences using modern
							web technologies and AI.
						</p>
					</div>

					<div className="flex flex-wrap gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-200">
						<a
							href="#work"
							className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 group"
						>
							View My Work
							<ArrowRight
								size={18}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</a>
						<a
							href="/resume.pdf"
							className="px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
						>
							<Download size={18} />
							Download CV
						</a>
					</div>

					<div className="pt-8 border-t border-white/5 flex flex-col gap-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
						<div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm font-mono text-zinc-500">
							<div className="flex items-center gap-2">
								<MapPin size={14} className="text-zinc-400" />
								<span>Casablanca, Morocoo</span>
							</div>

							<div className="flex items-center gap-2">
								<Code2 size={14} className="text-zinc-400" />
								<span>3+ Years Exp.</span>
							</div>
						</div>

						{/* Socials */}
						<div className="flex gap-4">
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
									className="p-3 rounded-xl bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
									aria-label={social.label}
								>
									<social.icon size={20} />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="order-1 lg:order-2 relative mx-auto w-full max-w-md aspect-4/5 md:aspect-square lg:aspect-4/5 flex items-center justify-center perspective-1000">
					<div className="relative w-full h-full animate-in zoom-in-50 duration-1000 ease-out">
						<div className="absolute inset-4 bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10">
							<div className="absolute inset-0 bg-zinc-800 animate-pulse opacity-20"></div>
							<img
								src="https://pub-8fc7302d3d604e5bbda371ecc2381e8c.r2.dev/images/Color%20Correction.png"
								alt="Suhaib Profile"
								className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
							/>

							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

							<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 hover:translate-y-0 transition-transform duration-500 group">
								<div className="text-white font-bold text-2xl">
									Youssef El Mountahi
								</div>
								<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono uppercase tracking-wider animate-pulse">
									<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
									Open to Work
								</div>
							</div>
						</div>

						<div className="absolute inset-0 m-auto w-[90%] h-[90%] bg-linear-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-3xl -z-10"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
