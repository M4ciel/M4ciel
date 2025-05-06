import About from "./components/about";
import Contacts from "./components/contacts";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Techs from "./components/techs";

function App() {
	return (
		<div className="min-h-screen bg-linear-150 from-zinc-950 from-25% to-zinc-800 to-85% text-white">
			<Hero />
			<About />
			<Techs />
			<Projects />
			<Contacts />
		</div>
	);
}

export default App;
