const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 z-50 w-full bg-zinc-950 text-white shadow">
			<div className="mx-auto flex max-w-7xl items-center justify-between py-4">
				<span className="text-xl font-bold">Caio Maciel</span>
				<div className="space-x-6 text-sm">
					<a
						href="#about"
						className="transition-colors hover:text-blue-500"
					>
						Sobre
					</a>
					<a
						href="#projects"
						className="transition-colors hover:text-blue-500"
					>
						Projetos
					</a>
					<a
						href="#contact"
						className="transition-colors hover:text-blue-500"
					>
						Contato
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
