import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "../types";

const nav_items: NavItem[] = [
	{ label: "Home", href: "#home", active: false },
	{ label: "About", href: "#about", active: false },
	{ label: "Journey", href: "#education", active: false },
	{ label: "Work", href: "#work", active: false },
	{ label: "Contact", href: "#contact", active: false },
];

const Header: React.FC = () => {
	const [activeSection, setActiveSection] = useState("");
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "-20% 0px -35% 0px",
			threshold: 0.1,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions,
		);

		nav_items.forEach((item) => {
			const sectionId = item.href.replace("#", "");
			const element = document.getElementById(sectionId);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);

		if (element) {
			setMobileMenuOpen(false);

			const headerOffset = 100;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});

			setActiveSection(targetId);
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
					: "bg-transparent py-6"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
				<a
					href="#home"
					onClick={(e) => handleNavClick(e, "#home")}
					className="text-2xl font-bold tracking-tighter text-white z-50 relative"
				>
					ElMountahi.dev
				</a>

				<nav className="hidden md:flex items-center gap-1 bg-card/50 p-1 rounded-full border border-white/5 backdrop-blur-sm">
					{nav_items.map((item) => {
						const isActive =
							activeSection === item.href.replace("#", "") ||
							(item.href === "#home" && activeSection === "");
						return (
							<a
								key={item.label}
								href={item.href}
								onClick={(e) => handleNavClick(e, item.href)}
								className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
									isActive
										? "bg-[#2A2A2A] text-white shadow-lg shadow-black/20"
										: "text-zinc-400 hover:text-white hover:bg-white/5"
								}`}
							>
								{item.label}
							</a>
						);
					})}
				</nav>

				<button
					className="md:hidden p-2 text-zinc-400 hover:text-white z-50 relative"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				<div
					className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
						mobileMenuOpen
							? "opacity-100 visible"
							: "opacity-0 invisible pointer-events-none"
					}`}
				>
					<nav className="flex flex-col gap-6 text-center">
						{nav_items.map((item) => {
							const isActive = activeSection === item.href.replace("#", "");
							return (
								<a
									key={item.label}
									href={item.href}
									onClick={(e) => handleNavClick(e, item.href)}
									className={`text-2xl font-medium transition-colors ${
										isActive ? "text-white" : "text-zinc-500"
									}`}
								>
									{item.label}
								</a>
							);
						})}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
