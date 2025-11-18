import About from "./components/about";
import Contacts from "./components/contacts";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Techs from "./components/techs";
import ScrollToTopButton from "./components/scroll-to-top-button";
import Footer from "./components/footer";

function App() {
	return (
		<div className="min-h-screen bg-linear-150 from-zinc-900 from-25% to-zinc-700 to-85% text-white">
			<Hero />
			<About />
			<Experience />
			<Techs />
			<Projects />
			<Contacts />
			<Footer />
			<ScrollToTopButton />
		</div>
	);
}

export default App;
