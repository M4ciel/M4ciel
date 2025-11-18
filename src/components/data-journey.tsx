import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
import { CircuitBoard } from "lucide-react";

type StageBlock = {
	id: string;
	title: string;
	description: string;
	signal: string;
	badge: string;
};

type ToolCard = {
	id: string;
	title: string;
	role: string;
	pillar: string;
	description: string;
	outcome: string;
	tags: string[];
};

type LegendContent = {
	title: string;
	hint: string;
};

const shapeArray = <T,>(value: T[] | Record<string, T> | undefined) => {
	if (!value) return [];
	return Array.isArray(value) ? value : Object.values(value);
};

const SIGNAL_POINTS = 8;

const DataJourney = () => {
	const { t } = useTranslation();
	const [hoveredStage, setHoveredStage] = useState<number | null>(null);
	const legend = t("dataJourney.legend", {
		returnObjects: true,
	}) as LegendContent;
	const stagesTranslation = t("dataJourney.stages", {
		returnObjects: true,
	}) as StageBlock[] | Record<string, StageBlock>;
	const stages = shapeArray<StageBlock>(stagesTranslation);
	const toolsTranslation = t("dataJourney.tools", {
		returnObjects: true,
	}) as ToolCard[] | Record<string, ToolCard>;
	const tools = shapeArray<ToolCard>(toolsTranslation);

	return (
		<section
			className="relative mx-auto w-full px-4 pb-16 text-white lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="data-journey"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-6 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[140px]" />
				<div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />
			</div>
			<div className="relative space-y-4 text-center">
				<p className="text-xs font-semibold uppercase tracking-[0.6rem] text-blue-200">
					{t("dataJourney.kicker")}
				</p>
				<h2 className="text-3xl font-bold md:text-4xl">
					{t("dataJourney.title")}
				</h2>
				<p className="text-base text-zinc-300 md:text-lg">
					{t("dataJourney.subtitle")}
				</p>
			</div>

			<div className="relative mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
				<article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900/70 to-blue-900/30 p-6 shadow-2xl shadow-black/40 md:p-8">
					<div className="pointer-events-none absolute inset-0 opacity-70">
						<div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.18)_1px,transparent_1px)] bg-[size:20px_20px]" />
					</div>
					<div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-left text-white shadow-inner shadow-white/5">
						<CircuitBoard className="size-10 text-cyan-300" />
						<div>
							<p className="text-xs uppercase tracking-[0.4rem] text-blue-200">
								{legend.title}
							</p>
							<p className="text-sm text-zinc-200">{legend.hint}</p>
						</div>
					</div>

					<div className="mt-8 space-y-12">
						{stages.map((stage, index) => {
							const isLast = index === stages.length - 1;
							const connectorIndex = index;
							const isConnectorActive =
								hoveredStage !== null &&
								(connectorIndex === hoveredStage ||
									connectorIndex === hoveredStage - 1);
							const signalOpacity = isConnectorActive ? 1 : 0.3;
							const signalDuration = isConnectorActive ? 0.5 : 2;
							return (
								<div
									key={stage.id}
									className="stage-stack flex flex-col items-center gap-6 sm:gap-8"
									onMouseEnter={() => setHoveredStage(index)}
									onMouseLeave={() => setHoveredStage(null)}
								>
									<div className="stage-card relative w-full overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10 md:p-7">
										<div className="stage-card__glow" aria-hidden />
										<div className="flex flex-wrap items-center gap-4">
											<div className="stage-card__step">
												<span className="stage-card__step-number">
													{String(index + 1).padStart(2, "0")}
												</span>
												<span className="stage-card__step-dot" />
											</div>
											<div className="space-y-1 text-left">
												<p className="text-[0.65rem] uppercase tracking-[0.6rem] text-sky-200">
													{stage.title}
												</p>
												<h3 className="text-2xl font-semibold text-white">
													{stage.badge}
												</h3>
											</div>
										</div>
										<div className="mt-5">
											<Badge className="stage-card__signal">
												{stage.signal}
											</Badge>
										</div>
										<p className="mt-4 text-base text-zinc-200">
											{stage.description}
										</p>
									</div>
									{!isLast && (
										<div
											className="signal-connector flex flex-col items-center justify-center text-cyan-300"
											aria-hidden
										>
											<span className="signal-connector-line">
												{Array.from({ length: SIGNAL_POINTS }).map(
													(_, dotIndex) => (
														<span
															key={`${stage.id}-dot-${dotIndex}`}
															className="signal-dot"
															style={{
																top: `${(dotIndex / (SIGNAL_POINTS - 1)) * 100}%`,
																animationDelay: `${dotIndex * 0.15}s`,
																animationDuration: `${signalDuration}s`,
																opacity: signalOpacity,
															}}
														/>
													),
												)}
											</span>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</article>

				<div className="space-y-4">
					{tools.map((tool) => (
						<article
							key={tool.id}
							className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-300/60 hover:bg-white/10"
						>
							<div className="flex flex-col gap-3">
								<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
									<div>
										<p className="text-[0.65rem] font-semibold uppercase tracking-[0.4rem] text-purple-200">
											{tool.role}
										</p>
										<h3 className="text-2xl font-semibold text-white">
											{tool.title}
										</h3>
									</div>
									<Badge className="tool-card__pillar border border-white/20 bg-white/10 text-xs text-zinc-100">
										{tool.pillar}
									</Badge>
								</div>
								<p className="text-sm text-zinc-200">{tool.description}</p>
								<p className="text-sm font-semibold text-emerald-300">
									{tool.outcome}
								</p>
							</div>
							<div className="mt-4 flex flex-wrap gap-2">
								{tool.tags.map((tag) => (
									<Badge
										key={`${tool.id}-${tag}`}
										variant="outline"
										className="border-white/20 bg-transparent text-[0.65rem] uppercase tracking-[0.2rem] text-zinc-200"
									>
										{tag}
									</Badge>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default DataJourney;
