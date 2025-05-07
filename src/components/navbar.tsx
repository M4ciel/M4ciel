import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 z-50 w-full bg-zinc-900 text-white shadow">
			<div className="mx-auto flex items-center justify-between px-4 py-4 lg:max-w-4xl lg:px-0 xl:max-w-7xl">
				<span className="text-xl font-bold">Caio Maciel</span>

				{/* Menu Desktop */}
				<div className="hidden space-x-6 text-sm md:flex">
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

				{/*Menu Mobile*/}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger aria-label="Abrir Menu">
							<Menu className="size-6" />
						</SheetTrigger>
						<SheetContent
							side="left"
							className="border-r-zinc-500/20 bg-zinc-900 px-4 text-white"
						>
							<span className="mt-8 text-xl font-bold">
								Caio Maciel
							</span>
							<div className="mt-8 flex flex-col space-y-4 text-sm">
								<a
									href="#about"
									className="hover:text-blue-500"
								>
									Sobre
								</a>
								<a
									href="#projects"
									className="hover:text-blue-500"
								>
									Projetos
								</a>
								<a
									href="#contact"
									className="hover:text-blue-500"
								>
									Contato
								</a>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
