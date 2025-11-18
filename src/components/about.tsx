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
			className="mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-24 pb-16 text-center text-white md:grid-cols-2 md:pt-32 md:pb-20 lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="about"
		>
			<img
				src={AboutImage}
				alt={t("about.imageAlt")}
				className="mx-auto hidden md:flex"
			/>
			<div className="w-full space-y-6 text-start">
				<div className="space-y-2">
					<p className="text-xs font-semibold uppercase tracking-[0.6rem] text-blue-300">
						{t("about.kicker")}
					</p>
					<h3 className="text-2xl font-bold uppercase">
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
							className="border-white/10 bg-white/5 text-white backdrop-blur"
						>
							<CardHeader className="flex flex-row items-center gap-3 border-b border-white/5 pb-4">
								<div className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/5">
									{cardIcons[card.id] ?? cardIcons.values}
								</div>
								<div>
									<CardTitle className="text-base font-semibold uppercase tracking-wide">
										{card.title}
									</CardTitle>
									<CardDescription className="text-xs text-zinc-400">
										{card.description}
									</CardDescription>
								</div>
							</CardHeader>
							<CardContent className="space-y-2 pt-4 text-sm text-zinc-100">
								{card.items.map((item) => (
									<p key={`${card.id}-${item}`} className="flex items-start gap-2">
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
