import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturedProjects from "./components/FeaturedProjects";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JourneySection from "./components/Journey";

function App() {
	return (
		<div className="bg-background text-white antialiased">
			<div className="min-h-screen bg-background selection:bg-accent/30 pb-12 relative">
				<Header />
				<div className="max-w-7xl mx-auto px-4 md:px-8">
					<main className="space-y-24 pt-24">
						<Hero />
						<AboutSection />
						<JourneySection />
						<FeaturedProjects />
						<ContactSection />
					 <footer className="mt-24 pt-8 border-t border-white/5 text-center text-zinc-600 text-sm font-mono">
          © {new Date().getFullYear()} Elmountahi.dev. All rights reserved.
        </footer>
					</main>
				</div>
			</div>
		</div>
	);
}
export default App;
