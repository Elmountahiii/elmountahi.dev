import React, { useState } from "react";
import {
	GraduationCap,
	Award,
	Briefcase,
	ChevronDown,
	ExternalLink,
} from "lucide-react";
import type { Certification, EducationItem, ExperienceItem } from "../types";

const EXPERIENCE: ExperienceItem[] = [];

const EDUCATION: EducationItem[] = [
	{
		degree: "Common Core (Tronc Commun)",
		institution: "École 1337",
		period: "2023 - 2025",
		description: [
			"Intensive training in systems programming and software engineering (intermediate-advanced level).",
			"Proficiency in C: memory management, parsing, UNIX data structures/Advanced Shell scripting.",
			"Peer-learning methodology, code reviews, autonomy, and collaborative problem-solving",
		],
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4m5fMRB5FaQYAqbBGjOXQgr8n-elhHG1SGQ&s",
	},
	{
		degree: "DEUG Études Anglaises",
		institution: "Université Chouaib Doukkali",
		period: "2020 - 2023",
		description: [
			"Diplôme validé (S1-S4)",
			"Communication multilingue et compétences analytiques",
		],
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_IjxNZRTQWSyY_JhwvTxFP8iOlmZAeJDcA&s",
	},
];

const CERTIFICATIONS: Certification[] = [
	{
		title: "Kubernetes and Cloud Native Associate (KCNA)",
		issuer: "Cloud Native Computing Foundation",
		date: "2025",
		image:
			"https://pub-8fc7302d3d604e5bbda371ecc2381e8c.r2.dev/images/Screenshot%202025-12-17%20at%2015.49.26.png",
		link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/8b7e6358-1505-4913-8dbe-04480e0ea346-youssef-el-mountahi-a09b2aa6-ef8f-48d5-9143-7c9a332bc71a-certificate.pdf",
		credentialImage: "/kcna_cert.png",
	},
];

type TabType = "experience" | "education" | "certifications";

const JourneySection: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabType>("education");
	const [expandedCerts, setExpandedCerts] = useState<number[]>(
		CERTIFICATIONS.map((_, i) => i),
	);

	const toggleCert = (index: number) => {
		setExpandedCerts((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
		);
	};

	const tabs: {
		id: TabType;
		label: string;
		icon: React.ElementType;
		color: string;
	}[] = [
		{
			id: "experience",
			label: "Experience",
			icon: Briefcase,
			color: "text-blue-400",
		},
		{
			id: "education",
			label: "Education",
			icon: GraduationCap,
			color: "text-purple-400",
		},
		{
			id: "certifications",
			label: "Certifications",
			icon: Award,
			color: "text-green-400",
		},
	];

	return (
		<section
			id="journey"
			className="bg-card rounded-3xl border border-white/5 overflow-hidden flex flex-col md:flex-row"
		>
			<div className="w-full md:w-64 bg-[#111] border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col shrink-0">
				<div className="mb-6">
					<h2 className="text-xl font-bold text-white">Journey</h2>
					<p className="text-xs text-zinc-500 mt-1">
						Career path & milestones.
					</p>
				</div>

				<div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							type="button"
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap w-full text-left relative group ${
								activeTab === tab.id
									? "bg-white/5 text-white"
									: "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]"
							}`}
						>
							<tab.icon
								size={16}
								className={
									activeTab === tab.id
										? tab.color
										: "text-zinc-600 group-hover:text-zinc-400"
								}
							/>
							{tab.label}
							{activeTab === tab.id && (
								<div
									className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-current ${tab.color.replace("text-", "bg-")}`}
								></div>
							)}
						</button>
					))}
				</div>
			</div>

			<div className="flex-1 bg-[#0a0a0a] min-h-[400px]">
				{activeTab === "experience" && (
					<div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full p-6 md:p-8">
						{EXPERIENCE.length > 0 ? (
							<div className="space-y-0 relative">
								<div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-[#1a1a1a]"></div>

								{EXPERIENCE.map((job) => (
									<div
										key={job.role}
										className="relative pl-10 pb-8 last:pb-0 group"
									>
										<div
											className={`absolute left-[13px] top-1.5 w-3.5 h-3.5 rounded-full border-[3px] z-10 transition-colors ${
												job.current
													? "bg-blue-500 border-[#0a0a0a] shadow-[0_0_0_2px_rgba(59,130,246,0.3)]"
													: "bg-[#222] border-[#0a0a0a] group-hover:bg-blue-500/50"
											}`}
										></div>

										<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
											<h4
												className={`font-bold text-base ${job.current ? "text-white" : "text-zinc-300"}`}
											>
												{job.role}
											</h4>
											<span className="text-xs font-mono text-zinc-500">
												{job.period}
											</span>
										</div>
										<p className="text-sm text-blue-400 mb-2">{job.company}</p>
										<p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
											{job.description}
										</p>
									</div>
								))}
							</div>
						) : (
							<div className="flex flex-col items-center justify-center h-full text-center p-8">
								<div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 w-full max-w-lg">
									<div className="bg-[#111] rounded-2xl p-8 backdrop-blur-sm h-full flex flex-col items-center justify-center">
										<h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-4">
											Ready for My First Role
										</h3>
										<p className="text-zinc-400 leading-relaxed text-base">
											As a fresh graduate, I'm eagerly looking forward to
											starting my professional journey. I bring passion, quick
											learning abilities, and a strong foundation in software
											development.
										</p>
										<div className="mt-6">
											<a
												href="#contact"
												className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
											>
												Get in Touch
											</a>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				)}

				{activeTab === "education" && (
					<div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full p-6 md:p-8 flex flex-col gap-6">
						{EDUCATION.map((edu) => (
							<div
								key={edu.degree}
								className="group relative flex gap-6 p-1 transition-all"
							>
								{/* Timeline Line & Dot */}
								<div className="flex flex-col items-center shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#111] border border-white/5 ring-4 ring-[#0a0a0a] group-hover:border-purple-500/30 transition-colors z-10 overflow-hidden">
										{edu.image ? (
											<img
												src={edu.image}
												alt={edu.institution}
												className="w-8 h-8 object-contain"
											/>
										) : (
											<GraduationCap size={24} className="text-purple-400" />
										)}
									</div>
									<div className="w-[1px] h-full bg-gradient-to-b from-white/5 via-white/5 to-transparent mt-2"></div>
								</div>

								{/* Content Card */}
								<div className="flex-1 pb-10">
									<div className="flex flex-wrap justify-between items-start gap-4 mb-2">
										<div>
											<h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors leading-snug">
												{edu.degree}
											</h3>
											<p className="text-sm font-medium text-zinc-400 mt-0.5">
												{edu.institution}
											</p>
										</div>
										<span className="px-3 py-1 bg-purple-500/5 text-purple-300 text-[11px] font-mono rounded-lg border border-purple-500/10 whitespace-nowrap">
											{edu.period}
										</span>
									</div>

									<div className="relative p-4 rounded-2xl bg-[#111]/50 border border-white/5 group-hover:bg-[#111] group-hover:border-white/10 transition-all">
										<ul className="space-y-2">
											{edu.description.map((desc) => (
												<li
													key={desc}
													className="flex gap-3 text-sm text-zinc-500 leading-relaxed"
												>
													<span className="mt-1.5 w-1 h-1 rounded-full bg-purple-500/40 shrink-0"></span>
													{desc}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === "certifications" && (
					<div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full p-6 md:p-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
							{CERTIFICATIONS.map((cert, index) => (
								<div
									key={cert.title}
									className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
										expandedCerts.includes(index)
											? "bg-[#111] border-green-500/30 ring-1 ring-green-500/20"
											: "bg-[#111] border-white/5 hover:border-green-500/20 hover:bg-[#151515]"
									}`}
								>
									<div className="p-4 flex items-start gap-4">
										<div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform">
											<img
												src={cert.image}
												alt={cert.issuer}
												className="w-7 h-7 object-contain"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex justify-between items-start gap-2">
												<h4 className="text-sm font-bold text-white leading-tight truncate">
													{cert.title}
												</h4>
												<span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
													{cert.date}
												</span>
											</div>
											<p className="text-xs text-green-400 mt-0.5 font-medium">
												{cert.issuer}
											</p>

											<div className="flex items-center gap-3 mt-4">
												<button
													type="button"
													onClick={() => toggleCert(index)}
													className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
														expandedCerts.includes(index)
															? "text-white"
															: "text-zinc-500 hover:text-zinc-300"
													}`}
												>
													{expandedCerts.includes(index)
														? "Hide Preview"
														: "View Preview"}
													<ChevronDown
														size={14}
														className={`transition-transform duration-300 ${
															expandedCerts.includes(index) ? "rotate-180" : ""
														}`}
													/>
												</button>
												{cert.link && (
													<a
														href={cert.link}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 hover:text-white transition-colors"
													>
														Verify
														<ExternalLink size={12} />
													</a>
												)}
											</div>
										</div>
									</div>

									{expandedCerts.includes(index) && (
										<div className="px-4 pb-4 animate-in slide-in-from-top-2 duration-300">
											<div className="relative mt-2 rounded-xl overflow-hidden border border-white/10 bg-black/40 group/cert">
												{cert.credentialImage ? (
													<div className="relative">
														<img
															src={cert.credentialImage}
															alt={`${cert.title} Certificate`}
															className="w-full h-auto object-contain max-h-[400px]"
														/>
														<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-end justify-center p-4">
															<a
																href={cert.link}
																target="_blank"
																rel="noreferrer"
																className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full transform translate-y-2 group-hover/cert:translate-y-0 transition-transform"
															>
																Open Full Certificate
															</a>
														</div>
													</div>
												) : (
													<div className="py-12 flex flex-col items-center justify-center text-zinc-600">
														<Award size={32} className="mb-2 opacity-20" />
														<p className="text-xs">Preview unavailable</p>
													</div>
												)}
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default JourneySection;
