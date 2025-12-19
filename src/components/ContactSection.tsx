import React, { useState } from "react";
import {
	Mail,
	Copy,
	Check,
	Send,
	Github,
	Linkedin,
	Twitter,
} from "lucide-react";

const ContactSection: React.FC = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("yusifelmoun@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formState.name || !formState.email || !formState.message) return;

		setIsSubmitting(true);

		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitting(false);
		setIsSent(true);
		setFormState({ name: "", email: "", message: "" });

		setTimeout(() => setIsSent(false), 3000);
	};

	return (
		<section id="contact" className="py-12 md:py-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
				<div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
					<div>
						<h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
							Let's work together.
						</h2>
						<p className="text-zinc-400 text-lg leading-relaxed">
							I'm currently available for new projects and open to freelance
							opportunities. If you have an idea you want to bring to life, I'd
							love to hear about it.
						</p>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest font-mono">
							Contact Details
						</h3>

						<div className="group flex items-center gap-3 p-4 rounded-2xl bg-[#111] border border-white/5 hover:border-white/10 transition-all">
							<div className="p-3 rounded-xl bg-white/5 text-white">
								<Mail size={20} />
							</div>
							<div className="flex-1">
								<div className="text-xs text-zinc-500 font-mono mb-0.5">
									Email
								</div>
								<div className="text-white font-medium">
									yusifelmoun@gmail.com
								</div>
							</div>
							<button
								onClick={handleCopyEmail}
								className="p-2 text-zinc-500 hover:text-white transition-colors relative"
								aria-label="Copy email"
							>
								{copied ? (
									<Check size={18} className="text-green-400" />
								) : (
									<Copy size={18} />
								)}
							</button>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest font-mono">
							Socials
						</h3>
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
									className="p-4 rounded-2xl bg-[#111] border border-white/5 text-zinc-400 hover:text-white hover:bg-white/5 hover:scale-110 transition-all duration-300"
									aria-label={social.label}
								>
									<social.icon size={20} />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="bg-[#111] rounded-3xl p-6 md:p-8 border border-white/5 animate-in slide-in-from-bottom-8 duration-700 delay-100">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-zinc-400 mb-2"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									value={formState.name}
									onChange={(e) =>
										setFormState((prev) => ({ ...prev, name: e.target.value }))
									}
									className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700"
									placeholder="John Doe"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-zinc-400 mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									value={formState.email}
									onChange={(e) =>
										setFormState((prev) => ({ ...prev, email: e.target.value }))
									}
									className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700"
									placeholder="john@example.com"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-zinc-400 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									value={formState.message}
									onChange={(e) =>
										setFormState((prev) => ({
											...prev,
											message: e.target.value,
										}))
									}
									rows={4}
									className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700 resize-none"
									placeholder="Tell me about your project..."
									required
								/>
							</div>
						</div>

						<button
							type="submit"
							disabled={isSubmitting || isSent}
							className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
								isSent
									? "bg-green-500 text-white"
									: "bg-white text-black hover:bg-zinc-200"
							} ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
						>
							{isSubmitting ? (
								<span className="animate-pulse">Sending...</span>
							) : isSent ? (
								<>
									<Check size={18} />
									Message Sent!
								</>
							) : (
								<>
									Send Message
									<Send size={18} />
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
