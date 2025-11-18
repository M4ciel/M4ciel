import About from "./components/about";
import Contacts from "./components/contacts";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Techs from "./components/techs";

function App() {
	return (
		<div className="min-h-screen bg-linear-150 from-zinc-900 from-25% to-zinc-700 to-85% text-white">
			<Hero />
			<About />
			<Experience />
			<Techs />
			<Projects />
			<Contacts />
		</div>
	);
}

export default App;
