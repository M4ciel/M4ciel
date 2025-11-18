import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const { t } = useTranslation();
	return (
		<nav className="fixed top-0 left-0 z-50 w-full bg-zinc-900 text-white shadow">
			<div className="mx-auto flex items-center justify-between gap-4 px-4 py-4 lg:max-w-4xl lg:px-0 xl:max-w-7xl">
				<span className="text-xl font-bold">Caio Maciel</span>

				{/* Menu Desktop */}
				<div className="hidden items-center gap-4 text-sm md:flex">
					<div className="flex items-center space-x-6">
						<a
							href="#about"
							className="transition-colors hover:text-blue-500"
						>
							{t("navbar.about")}
						</a>
						<a
							href="#experience"
							className="transition-colors hover:text-blue-500"
						>
							{t("navbar.experience")}
						</a>
						<a
							href="#projects"
							className="transition-colors hover:text-blue-500"
						>
							{t("navbar.projects")}
						</a>
						<a
							href="#contact"
							className="transition-colors hover:text-blue-500"
						>
							{t("navbar.contact")}
						</a>
					</div>
					<LanguageSwitcher />
				</div>

				{/*Menu Mobile*/}
				<div className="flex items-center gap-2 md:hidden">
					<LanguageSwitcher />
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
									{t("navbar.about")}
								</a>
								<a
									href="#experience"
									className="hover:text-blue-500"
								>
									{t("navbar.experience")}
								</a>
								<a
									href="#projects"
									className="hover:text-blue-500"
								>
									{t("navbar.projects")}
								</a>
								<a
									href="#contact"
									className="hover:text-blue-500"
								>
									{t("navbar.contact")}
								</a>
								<div className="pt-4">
									<LanguageSwitcher />
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
