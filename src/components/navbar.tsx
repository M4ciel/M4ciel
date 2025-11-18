import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslation } from "react-i18next";
import { useState, type MouseEvent } from "react";

const Navbar = () => {
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navItems = [
		{ id: "hero", label: t("navbar.home") },
		{ id: "about", label: t("navbar.about") },
		{ id: "experience", label: t("navbar.experience") },
		{ id: "projects", label: t("navbar.projects") },
		{ id: "contact", label: t("navbar.contact") },
	];

	const smoothScrollTo = (targetPosition: number, duration = 700) => {
		const start = window.scrollY;
		const distance = targetPosition - start;
		let startTime: number | null = null;
		const easeInOutCubic = (t: number) =>
			t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

		const animationStep = (currentTime: number) => {
			if (startTime === null) {
				startTime = currentTime;
			}
			const progress = Math.min(
				(currentTime - startTime) / duration,
				1,
			);
			const easedProgress = easeInOutCubic(progress);
			window.scrollTo({
				top: start + distance * easedProgress,
			});
			if (progress < 1) {
				requestAnimationFrame(animationStep);
			}
		};

		requestAnimationFrame(animationStep);
	};

	const handleNavClick = (
		event: MouseEvent<HTMLAnchorElement>,
		targetId: string,
	) => {
		event.preventDefault();
		const target = document.querySelector<HTMLElement>(`#${targetId}`);
		if (!target) return;
		const NAVBAR_OFFSET = 80;
		const targetPosition =
			target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
		smoothScrollTo(targetPosition);
		setIsMenuOpen(false);
	};

	return (
		<nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 text-white backdrop-blur-xl">
			<div className="mx-auto flex items-center justify-between gap-4 px-4 py-4 lg:max-w-4xl lg:px-0 xl:max-w-7xl">
				<span className="text-xl font-bold">Caio Maciel</span>

				{/* Menu Desktop */}
				<div className="hidden items-center gap-4 text-sm md:flex">
					<div className="flex items-center space-x-6">
						{navItems.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								className="text-sm font-semibold uppercase tracking-[0.25rem] text-white/70 transition hover:text-white"
								onClick={(event) => handleNavClick(event, item.id)}
							>
								{item.label}
							</a>
						))}
					</div>
					<LanguageSwitcher />
				</div>

				{/*Menu Mobile*/}
				<div className="flex items-center gap-2 md:hidden">
					<LanguageSwitcher />
					<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
						<SheetTrigger aria-label="Abrir Menu">
							<Menu className="size-6" />
						</SheetTrigger>
						<SheetContent
							side="left"
							className="border-r border-white/10 bg-slate-950/90 px-4 text-white backdrop-blur-xl"
						>
							<span className="mt-8 text-xl font-bold">
								Caio Maciel
							</span>
							<div className="mt-8 flex flex-col space-y-4 text-sm">
								{navItems.map((item) => (
									<a
										key={item.id}
										href={`#${item.id}`}
										className="hover:text-blue-500"
										onClick={(event) => handleNavClick(event, item.id)}
									>
										{item.label}
									</a>
								))}
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
