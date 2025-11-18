import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
import { Building2, CheckCircle2, MapPin } from "lucide-react";

type ExperienceMetric = {
	value: string;
	label: string;
};

type ExperiencePeriod = {
	start: string;
	end: string | null;
};

type ExperienceItem = {
	id: string;
	company: string;
	role: string;
	badge: string;
	period: ExperiencePeriod;
	location: string;
	context: string;
	achievements: string[];
	metrics: ExperienceMetric[];
	stack: string[];
};

const Experience = () => {
	const { t, i18n } = useTranslation();
	const timelineTranslation = t("experience.timeline", {
		returnObjects: true,
	}) as ExperienceItem[] | Record<string, ExperienceItem>;
	const timeline = (
		Array.isArray(timelineTranslation)
			? timelineTranslation
			: Object.values(timelineTranslation ?? {})
	) as ExperienceItem[];
	const locale = i18n.language?.startsWith("pt") ? "pt-BR" : "en-US";
	const presentLabel = t("experience.present");
	const dateFormatter = useMemo(
		() =>
			new Intl.DateTimeFormat(locale, {
				month: "short",
				year: "numeric",
			}),
		[locale],
	);
	const parseDate = (value: string) => {
		const [day, month, year] = value.split("/").map(Number);
		return new Date(year, (month ?? 1) - 1, day ?? 1);
	};
	const formatPeriod = (period: ExperiencePeriod) => {
		const start = dateFormatter.format(parseDate(period.start));
		const end = period.end
			? dateFormatter.format(parseDate(period.end))
			: presentLabel;
		return `${start} – ${end}`;
	};
	const sortedTimeline = [...timeline].sort((a, b) => {
		const endA = a.period.end
			? parseDate(a.period.end).getTime()
			: Number.MAX_SAFE_INTEGER;
		const endB = b.period.end
			? parseDate(b.period.end).getTime()
			: Number.MAX_SAFE_INTEGER;
		if (endA !== endB) {
			return endB - endA;
		}
		return (
			parseDate(b.period.start).getTime() -
			parseDate(a.period.start).getTime()
		);
	});

	return (
		<section
			className="relative mx-auto w-full px-4 pb-16 text-white lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="experience"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-10 top-0 h-64 w-64 rounded-full bg-blue-500/15 blur-[140px]" />
				<div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-[140px]" />
			</div>
			<div className="relative space-y-4 text-center">
				<p className="text-xs font-semibold uppercase tracking-[0.6rem] text-blue-300">
					{t("experience.kicker")}
				</p>
				<h2 className="text-3xl font-bold md:text-4xl">
					{t("experience.title")}
				</h2>
				<p className="text-base text-zinc-300 md:text-lg">
					{t("experience.subtitle")}
				</p>
			</div>

			<div className="relative mt-12">
				<span
					aria-hidden
					className="absolute left-4 top-0 h-full w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2"
				/>
				<div className="flex flex-col gap-10 lg:gap-16">
					{sortedTimeline.map((item, index) => {
						const isRightAligned = index % 2 === 0;
						const patternElement = (
							<div
								aria-hidden
								className="pointer-events-none relative h-48 w-48 overflow-hidden rounded-[2rem] border border-white/10 bg-black/40"
							>
								<div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
								<div className="absolute inset-3 rounded-[1.5rem] border border-dashed border-blue-400/30" />
								<div className="absolute left-6 top-6 flex flex-col gap-2">
									<span className="h-1.5 w-12 rounded-full bg-sky-400/50" />
									<span className="h-1.5 w-16 rounded-full bg-blue-300/40" />
									<span className="h-1.5 w-10 rounded-full bg-emerald-300/40" />
								</div>
								<div className="absolute right-6 top-8 grid gap-2">
									<span className="h-2 w-2 rounded-full bg-blue-400/70" />
									<span className="h-2 w-2 rounded-full bg-emerald-400/70" />
									<span className="h-2 w-2 rounded-full bg-blue-200/70" />
								</div>
								<div className="absolute bottom-6 left-6 grid grid-cols-3 gap-2">
									<span className="h-3 w-4 rounded-md bg-sky-400/40" />
									<span className="h-3 w-4 rounded-md bg-blue-500/40" />
									<span className="h-3 w-4 rounded-md bg-indigo-400/40" />
									<span className="h-3 w-4 rounded-md bg-emerald-400/40" />
									<span className="h-3 w-4 rounded-md bg-cyan-500/40" />
									<span className="h-3 w-4 rounded-md bg-teal-400/40" />
								</div>
								<div className="absolute bottom-6 right-6 h-10 w-10 rounded-2xl border border-white/20 bg-gradient-to-br from-cyan-400/30 to-blue-600/40 opacity-70 blur-[2px]" />
							</div>
						);
						return (
							<div
								key={item.id}
								className="relative flex flex-col gap-6 lg:flex-row lg:items-stretch"
							>
								<span className="absolute left-4 top-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-zinc-900 lg:left-1/2 lg:-translate-x-1/2">
									<span className="h-2 w-2 rounded-full bg-blue-400" />
								</span>
								{isRightAligned && (
									<div className="hidden lg:flex lg:w-1/2 lg:justify-end">
										{patternElement}
									</div>
								)}
								<article
									className={`relative w-full rounded-3xl border border-white/10 bg-white/5 p-6 pl-10 shadow-xl shadow-black/20 backdrop-blur lg:w-1/2 lg:p-8 ${isRightAligned ? "lg:ml-8 lg:pl-10 lg:pr-6" : "lg:mr-8 lg:pl-6 lg:pr-10"}`}
								>
									<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
										<div className="flex flex-wrap items-center gap-3">
											<Badge className="border-blue-500/40 bg-blue-500/10 text-xs uppercase tracking-wider text-blue-200">
												{item.badge}
											</Badge>
											<Badge variant="outline" className="border-white/30 text-white">
												{item.company}
											</Badge>
											<span className="flex items-center gap-1 text-sm text-zinc-300">
												<Building2 className="size-4" />
												{item.role}
											</span>
										</div>
										<div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
											<span>{formatPeriod(item.period)}</span>
											<span className="flex items-center gap-1 text-zinc-400">
												<MapPin className="size-4" />
												{item.location}
											</span>
										</div>
									</div>

									<p className="mt-4 text-base text-zinc-200">
										{item.context}
									</p>

									<ul className="mt-6 space-y-2 text-sm text-zinc-100">
										{item.achievements.map((achievement) => (
											<li
												key={`${item.id}-${achievement}`}
												className="flex items-start gap-2"
											>
												<CheckCircle2 className="mt-0.5 size-4 text-emerald-400" />
												<span>{achievement}</span>
											</li>
										))}
									</ul>

									<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
										{item.metrics.map((metric) => (
											<div
												key={`${item.id}-${metric.label}`}
												className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center"
											>
												<p className="text-3xl font-bold text-blue-300">
													{metric.value}
												</p>
												<p className="text-xs uppercase tracking-[0.3rem] text-zinc-400">
													{metric.label}
												</p>
											</div>
										))}
									</div>

									<div className="mt-6 flex flex-wrap gap-2">
										{item.stack.map((tech) => (
											<Badge
												key={`${item.id}-${tech}`}
												variant="outline"
												className="border-white/20 bg-white/5 text-xs text-zinc-100"
											>
												{tech}
											</Badge>
										))}
									</div>
								</article>
								{!isRightAligned && (
									<div className="hidden lg:flex lg:w-1/2 lg:justify-start">
										{patternElement}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Experience;
