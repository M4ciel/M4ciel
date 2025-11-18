import { type JSX } from "react";
import { useTranslation } from "react-i18next";
import AboutImage from "../assets/about-us.png";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Globe, Heart, Sparkles, UsersRound } from "lucide-react";

type AboutCard = {
	id: string;
	title: string;
	description: string;
	items: string[];
};

const cardIcons: Record<string, JSX.Element> = {
	values: <Sparkles className="size-5 text-blue-300" />,
	softSkills: <UsersRound className="size-5 text-emerald-300" />,
	hobbies: <Heart className="size-5 text-pink-300" />,
	community: <Globe className="size-5 text-amber-300" />,
};

const About = () => {
	const { t } = useTranslation();
	const cardsTranslation = t("about.cards", {
		returnObjects: true,
	}) as Record<string, AboutCard>;
	const cards = Object.values(cardsTranslation ?? {});

	return (
		<section
			className="relative mx-auto grid w-full grid-cols-1 items-center gap-10 px-4 pt-4 pb-16 text-white md:grid-cols-2 lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="about"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-blue-500/15 blur-[120px]" />
				<div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-pink-400/15 blur-[120px]" />
			</div>
			<img
				src={AboutImage}
				alt={t("about.imageAlt")}
				className="relative mx-auto hidden rounded-[2rem] md:flex"
			/>
			<div className="relative w-full space-y-6 text-start">
				<div className="space-y-2">
					<p className="text-xs font-semibold tracking-[0.6rem] text-blue-300 uppercase">
						{t("about.kicker")}
					</p>
					<h3 className="text-3xl font-bold uppercase">
						{t("about.title")}
					</h3>
					<p className="text-lg text-zinc-300">
						{t("about.paragraphs.first")}
					</p>
				</div>
				<div className="grid gap-4 sm:grid-cols-2">
					{cards.map((card) => (
						<Card
							key={card.id}
							className="group border-white/10 bg-white/5 text-white shadow-xl shadow-black/20 backdrop-blur"
						>
							<CardHeader className="flex flex-row items-center gap-3 border-b border-white/5 pb-4">
								<div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 transition group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
									{cardIcons[card.id] ?? cardIcons.values}
								</div>
								<div>
									<CardTitle className="text-base font-semibold tracking-wide uppercase">
										{card.title}
									</CardTitle>
									<CardDescription className="text-xs text-zinc-400">
										{card.description}
									</CardDescription>
								</div>
							</CardHeader>
							<CardContent className="space-y-2 pt-4 text-sm text-zinc-100">
								{card.items.map((item) => (
									<p
										key={`${card.id}-${item}`}
										className="flex items-start gap-2"
									>
										<span className="mt-1 size-1.5 rounded-full bg-blue-300" />
										<span>{item}</span>
									</p>
								))}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
