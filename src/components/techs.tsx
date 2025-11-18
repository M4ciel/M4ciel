import { useTranslation } from "react-i18next";
import { useTechsHook } from "../hooks/useTechs.hook";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import type { ReactNode } from "react";
import type { Tech } from "../interfaces/tech";

type CaseLabels = {
	project: string;
	summary: string;
	impact: string;
	metrics: string;
	timeframe: string;
};

type CaseStudy = {
	title: string;
	project: string;
	summary: string;
	impact: string;
	metrics: string;
	timeframe: string;
};

type TechKpi = {
	id: string;
	value: string;
	label: string;
	description: string;
};

const Techs = () => {
	const { techs } = useTechsHook();
	const { t } = useTranslation();
	const highlightedTechs = techs
		.filter((tech) => tech.important)
		.slice(0, 12);
	const featuredTechs =
		highlightedTechs.length > 0 ? highlightedTechs : techs.slice(0, 12);
	const marqueeTechs = [...techs, ...techs];
	const caseLabels = t("techs.caseLabels", {
		returnObjects: true,
	}) as CaseLabels;
	const getCaseStudy = (caseKey: string) =>
		t(`techs.cases.${caseKey}`, { returnObjects: true }) as CaseStudy;
	const kpisTranslation = t("techs.kpis.items", {
		returnObjects: true,
	}) as TechKpi[] | Record<string, TechKpi>;
	const kpis = Array.isArray(kpisTranslation)
		? kpisTranslation
		: Object.values(kpisTranslation ?? {});
	const kpiLead = t("techs.kpis.lead");

	const TechCaseSheet = ({
		tech,
		children,
	}: {
		tech: Tech;
		children: ReactNode;
	}) => {
		const caseStudy = getCaseStudy(tech.caseKey);

		return (
			<Sheet>
				<SheetTrigger asChild>{children}</SheetTrigger>
				<SheetContent
					side="right"
					className="h-full w-full border-l border-white/10 bg-slate-950/90 text-white backdrop-blur-xl sm:max-w-full lg:max-w-3xl lg:rounded-l-[2.5rem]"
				>
					<div className="flex h-full flex-col overflow-hidden">
						<div className="flex flex-col gap-4 border-b border-white/10 px-6 py-6 lg:flex-row lg:items-center">
							<div className="flex items-center gap-4">
								<span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
									<img
										src={tech.image}
										alt={tech.name}
										className="h-10 w-10 object-contain"
									/>
								</span>
								<div>
									<p className="text-xs uppercase tracking-[0.4rem] text-blue-200">
										{tech.badge}
									</p>
									<h3 className="text-2xl font-bold text-white">
										{tech.name}
									</h3>
									<p className="text-sm text-zinc-400">
										{caseStudy.title}
									</p>
								</div>
							</div>
							<div className="border-t border-white/10 pt-4 text-sm text-zinc-300 lg:ml-auto lg:border-none lg:pt-0">
								<p className="text-xs font-semibold uppercase tracking-[0.4rem] text-blue-300">
									{caseLabels.project}
								</p>
								<p className="text-base text-white">
									{caseStudy.project}
								</p>
							</div>
						</div>

						<div className="flex-1 overflow-y-auto px-6 py-6">
							<div className="space-y-5 text-sm text-zinc-100">
								<div className="space-y-2 rounded-[2rem] border border-white/10 bg-white/5 p-5">
									<p className="text-xs font-semibold uppercase tracking-[0.4rem] text-blue-200">
										{caseLabels.summary}
									</p>
									<p className="text-base text-white">
										{caseStudy.summary}
									</p>
								</div>

								<div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/15 via-slate-950/40 to-blue-500/20 p-5">
									<p className="text-xs font-semibold uppercase tracking-[0.4rem] text-emerald-200">
										{caseLabels.impact}
									</p>
									<p className="mt-2 text-base text-white">
										{caseStudy.impact}
									</p>
								</div>

								<div className="grid gap-4 md:grid-cols-2">
									<div className="rounded-2xl border border-white/10 bg-black/30 p-5">
										<p className="text-xs font-semibold uppercase tracking-[0.3rem] text-purple-300">
											{caseLabels.metrics}
										</p>
										<p className="mt-2 text-lg text-white">
											{caseStudy.metrics}
										</p>
									</div>
									<div className="rounded-2xl border border-white/10 bg-black/30 p-5">
										<p className="text-xs font-semibold uppercase tracking-[0.3rem] text-amber-200">
											{caseLabels.timeframe}
										</p>
										<p className="mt-2 text-lg text-white">
											{caseStudy.timeframe}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		);
	};

	return (
		<TooltipProvider>
			<section
				className="relative mx-auto w-full px-4 pb-16 lg:max-w-4xl lg:px-0 xl:max-w-7xl"
				id="techs"
			>
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-purple-500/15 blur-[140px]" />
					<div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/20 blur-[140px]" />
				</div>
				<div className="relative mb-10 space-y-3 text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.6rem] text-blue-200">
						{t("techs.kicker")}
					</p>
					<h2 className="text-3xl font-bold md:text-4xl">
						{t("techs.title")}
					</h2>
					<p className="text-base text-zinc-300 md:text-lg">
						{t("techs.subtitle")}
					</p>
				</div>
				<div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
					<div className="grid grid-cols-3 gap-6 lg:col-span-2 lg:grid-cols-4">
						{featuredTechs.map((tech) => (
							<Tooltip key={tech.name}>
								<TechCaseSheet tech={tech}>
									<TooltipTrigger asChild>
										<button
											type="button"
											className="flex aspect-square w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-white transition hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
											aria-label={tech.name}
										>
											<img
												src={tech.image}
												alt={tech.name}
												className="max-h-full max-w-full object-contain"
											/>
										</button>
									</TooltipTrigger>
								</TechCaseSheet>
								<TooltipContent>
									<p>{tech.name}</p>
								</TooltipContent>
							</Tooltip>
						))}
					</div>
					<div className="relative grid min-w-full gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white shadow-inner shadow-white/5 lg:min-w-80">
						<div className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
							<h1 className="text-7xl font-extrabold leading-none text-blue-400">
								{t("techs.stats.years")}
							</h1>
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.4rem] text-blue-200">
									{kpiLead}
								</p>
								<p className="text-xl text-white">
									{t("techs.stats.label")}
								</p>
							</div>
						</div>
						<div className="grid gap-4">
							{kpis.map((kpi) => (
								<div
									key={kpi.id}
									className="rounded-2xl border border-white/10 bg-black/30 p-4"
								>
									<p className="text-4xl font-extrabold text-emerald-300">
										{kpi.value}
									</p>
									<p className="text-xs font-semibold uppercase tracking-[0.4rem] text-zinc-400">
										{kpi.label}
									</p>
									<p className="mt-2 text-sm text-zinc-100">
										{kpi.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="relative mt-10 overflow-hidden py-5">
					<div className="flex flex-col gap-4 px-3 lg:flex-row lg:items-center lg:gap-8 lg:px-0">
						<div className="flex flex-col gap-1 text-sm text-zinc-300">
							<span className="text-xs font-bold uppercase tracking-[0.6rem] text-blue-300">
								{t("techs.ticker.label")}
							</span>
							<span>{t("techs.ticker.hint")}</span>
						</div>
						<div className="relative flex-1 overflow-hidden">
							<div className="techs-marquee-track flex items-center gap-8">
								{marqueeTechs.map((tech, index) => (
									<TechCaseSheet tech={tech} key={`${tech.name}-${index}`}>
										<button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-left text-lg text-white/90 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 cursor-pointer">
											<span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
												<img
													src={tech.image}
													alt={tech.name}
													className="h-8 w-8 object-contain"
												/>
											</span>
											<div className="flex flex-col">
												<span className="text-base font-semibold uppercase tracking-wide text-blue-200">
													{tech.badge}
												</span>
												<span className="text-lg font-bold">
													{tech.name}
												</span>
											</div>
										</button>
									</TechCaseSheet>
								))}
							</div>
							<div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/70 to-transparent" />
							<div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/70 to-transparent" />
						</div>
					</div>
				</div>
			</section>
		</TooltipProvider>
	);
};

export default Techs;
