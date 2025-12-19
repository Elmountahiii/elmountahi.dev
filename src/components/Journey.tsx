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
		credentialImage:
			"https://pub-8fc7302d3d604e5bbda371ecc2381e8c.r2.dev/images/Screenshot%202025-12-17%20at%2015.49.26.png",
	},
];

type TabType = "experience" | "education" | "certifications";

const JourneySection: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabType>("education");
	const [expandedCerts, setExpandedCerts] = useState<number[]>([]);

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
			id="education"
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

								{EXPERIENCE.map((job, index) => (
									<div
										key={index}
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
					<div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full p-6 md:p-8 flex flex-col gap-4">
						{EDUCATION.map((edu, index) => (
							<div
								key={index}
								className="p-5 rounded-2xl bg-[#111] border border-white/5 flex gap-5 items-start hover:border-purple-500/20 transition-colors group"
							>
								<div className="p-3 bg-[#1a1a1a] rounded-xl shrink-0 border border-white/5 flex items-center justify-center w-16 h-16">
									{edu.image ? (
										<img
											src={edu.image}
											alt={edu.institution}
											className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
										/>
									) : (
										<GraduationCap size={24} className="text-purple-400" />
									)}
								</div>
								<div className="flex-1">
									<div className="flex flex-wrap justify-between items-start gap-2 mb-1">
										<h3 className="text-lg font-bold text-white leading-tight">
											{edu.degree}
										</h3>
										<span className="px-2 py-0.5 bg-purple-500/10 text-purple-300 text-[10px] font-mono rounded border border-purple-500/20 whitespace-nowrap">
											{edu.period}
										</span>
									</div>
									<p className="text-sm text-zinc-300 mb-2 font-medium">
										{edu.institution}
									</p>
									<ul className="text-sm text-zinc-500 leading-relaxed list-disc list-inside space-y-1">
										{edu.description.map((desc, i) => (
											<li key={i}>{desc}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === "certifications" && (
					<div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full p-6 md:p-8">
						<div className="grid grid-cols-1 gap-3">
							{CERTIFICATIONS.map((cert, index) => (
								<div
									key={index}
									className="rounded-xl bg-[#111] border border-white/5 overflow-hidden transition-colors group"
								>
									<div className="p-3 flex items-center justify-between hover:bg-white/[0.02]">
										<button
											type="button"
											className="flex items-center gap-4 flex-1 text-left cursor-pointer"
											onClick={() => toggleCert(index)}
										>
											<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-white/5">
												<img
													src={cert.image}
													alt={cert.issuer}
													className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
												/>
											</div>
											<div>
												<h4 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
													{cert.title}
												</h4>
												<p className="text-xs text-zinc-500">
													{cert.issuer} • {cert.date}
												</p>
											</div>
										</button>
										<div className="flex items-center gap-2 pl-4">
											{cert.link && (
												<a
													href={cert.link}
													target="_blank"
													rel="noopener noreferrer"
													className="p-2 text-zinc-500 hover:text-white hover:bg-white/10 rounded-lg transition-all z-10"
													title="View Certificate"
												>
													<ExternalLink size={16} />
												</a>
											)}
											<button
												type="button"
												onClick={() => toggleCert(index)}
												className="p-1 text-zinc-700 hover:text-zinc-500 transition-colors"
											>
												<ChevronDown
													size={16}
													className={`transition-transform duration-300 ${
														expandedCerts.includes(index) ? "" : "-rotate-90"
													}`}
												/>
											</button>
										</div>
									</div>
									{expandedCerts.includes(index) && (
										<div className="px-3 pb-3 pt-0 animate-in slide-in-from-top-2 duration-200">
											<div className="mt-2 p-4 bg-[#0a0a0a] rounded-lg border border-white/5 flex justify-center">
												{cert.credentialImage ? (
													<img
														src={cert.credentialImage}
														alt={`${cert.title} Certificate`}
														className="max-h-64 object-contain rounded-md"
													/>
												) : (
													<div className="text-zinc-500 text-sm py-8">
														No certificate image available
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
