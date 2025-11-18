import About from "./components/about";
import Contacts from "./components/contacts";
import Experience from "./components/experience";
import DataJourney from "./components/data-journey";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Techs from "./components/techs";
import ScrollToTopButton from "./components/scroll-to-top-button";
import Footer from "./components/footer";

function App() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />
				<div className="absolute top-1/2 right-0 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.4),_transparent_55%)]" />
			</div>
			<div className="relative space-y-12 pb-14 pt-8">
				<Hero />
				<About />
				<Experience />
				<DataJourney />
				<Techs />
				<Projects />
				<Contacts />
				<Footer />
				<ScrollToTopButton />
			</div>
		</div>
	);
}

export default App;
