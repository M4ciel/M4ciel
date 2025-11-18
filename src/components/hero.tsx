import HeroImage from "../assets/home-right.png";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Code2, Download, Github, Linkedin } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import PT_DATA_CV from "../assets/files/pt/cv_dados.pdf";
import PT_DEV_CV from "../assets/files/pt/cv_dev.pdf";
import EN_DATA_CV from "../assets/files/en/cv_data.pdf";
import EN_DEV_CV from "../assets/files/en/cv_dev.pdf";
import type { MouseEvent } from "react";

const Hero = () => {
	const { t, i18n } = useTranslation();
	const isPT = i18n.language === "pt";
	const dataCv = isPT ? PT_DATA_CV : EN_DATA_CV;
	const devCv = isPT ? PT_DEV_CV : EN_DEV_CV;
	const today = new Date();
	const formattedDate = today.toISOString().split("T")[0];
	const scrollToProjects = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const target = document.querySelector<HTMLElement>("#projects");
		if (!target) return;
		const NAVBAR_OFFSET = 80;
		const targetPosition =
			target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
		const duration = 700;
		const start = window.scrollY;
		const distance = targetPosition - start;
		let startTime: number | null = null;
		const easeInOutCubic = (t: number) =>
			t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

		const animationStep = (currentTime: number) => {
			if (startTime === null) startTime = currentTime;
			const progress = Math.min(
				(currentTime - startTime) / duration,
				1,
			);
			const eased = easeInOutCubic(progress);
			window.scrollTo({
				top: start + distance * eased,
			});
			if (progress < 1) {
				requestAnimationFrame(animationStep);
			}
		};

		requestAnimationFrame(animationStep);
	};
	const socialLinks = [
		{
			id: "linkedin",
			href: "https://www.linkedin.com/in/caio-maciel",
			label: t("hero.social.linkedin"),
			icon: <Linkedin className="size-4" />,
		},
		{
			id: "github",
			href: "https://github.com/M4ciel",
			label: t("hero.social.github"),
			icon: <Github className="size-4" />,
		},
	];

	return (
		<section
			className="mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-24 pb-16 text-center text-white md:grid-cols-2 md:pt-32 md:pb-20 md:text-left lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="hero"
		>
			<div className="w-full space-y-4 text-start">
				<div className="flex items-center gap-4">
					<h3 className="text-2xl font-semibold uppercase">
						{t("hero.greeting")}
					</h3>
					<Separator className="w-full max-w-52 sm:max-w-xs lg:max-w-sm xl:max-w-md" />
				</div>

				<h1 className="text-3xl font-extrabold uppercase md:text-5xl">
					{t("hero.title")}
				</h1>
				<p className="text-lg">{t("hero.role")}</p>
				<div className="space-y-4">
					<div className="grid gap-3 sm:grid-cols-2">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button className="h-auto cursor-pointer rounded-lg bg-linear-150 from-blue-400 from-0% to-blue-600 to-100% px-6 py-4 text-base font-semibold uppercase tracking-wide transition hover:-translate-y-0.5 hover:shadow-lg">
									<Download className="size-5" />
									{t("hero.downloadButton.title")}
									<ArrowUpRight className="size-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="min-w-56 border-white/10 bg-zinc-900 text-white">
								<a
									href={dataCv}
									download={`${t("hero.downloadButton.data.file")}_${formattedDate}`}
									target="_blank"
									rel="noreferrer"
								>
									<DropdownMenuItem className="cursor-pointer">
										{t("hero.downloadButton.data.title")}
									</DropdownMenuItem>
								</a>
								<a
									href={devCv}
									download={`${t("hero.downloadButton.dev.file")}_${formattedDate}`}
									target="_blank"
									rel="noreferrer"
								>
									<DropdownMenuItem className="cursor-pointer">
										{t("hero.downloadButton.dev.title")}
									</DropdownMenuItem>
								</a>
							</DropdownMenuContent>
						</DropdownMenu>
						<Button
							asChild
							variant="outline"
							className="h-auto cursor-pointer rounded-lg border-white/40 bg-white/5 px-6 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white/10"
						>
							<a href="#projects" onClick={scrollToProjects}>
								<Code2 className="size-5" />
								{t("hero.actions.devProjects")}
								<ArrowUpRight className="size-4" />
							</a>
						</Button>
					</div>
					<div className="space-y-2">
						<p className="text-sm font-semibold uppercase tracking-[0.4rem] text-blue-300">
							{t("hero.social.label")}
						</p>
						<div className="flex items-center gap-3">
							{socialLinks.map((link) => (
								<Button
									key={link.id}
									asChild
									variant="ghost"
									size="icon"
									className="size-11 rounded-full border border-white/20 bg-white/5 text-white hover:border-white/60 hover:bg-white/10"
								>
									<a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
										{link.icon}
									</a>
								</Button>
							))}
						</div>
					</div>
				</div>
			</div>
			<img src={HeroImage} alt={t("hero.altImg")} className="mx-auto" />
		</section>
	);
};

export default Hero;
