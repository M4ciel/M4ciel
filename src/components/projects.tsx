import { useTranslation } from "react-i18next";
import { ALL_FILTER, useProjectsHook } from "../hooks/useProjects.hook";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ArrowUpRight } from "lucide-react";

const Projects = () => {
	const {
		repos,
		categories,
		setFilter,
		filter,
		lastUpdatedAt,
		isLoading,
		isError,
		error,
		refetch,
	} = useProjectsHook();
	const { t } = useTranslation();
	const filters = [ALL_FILTER, ...categories];
	const skeletonItems = Array.from({ length: 6 });

	return (
		<section
			className="relative mx-auto w-full px-4 py-12 text-white lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="projects"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
				<div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-[120px]" />
				<div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			</div>

			<div className="relative space-y-4 text-center">
				<p className="text-xs font-semibold uppercase tracking-[0.6rem] text-blue-200">
					{t("projects.kicker")}
				</p>
				<h2 className="text-3xl font-bold md:text-4xl">
					{t("projects.title")}
				</h2>
				<p className="text-base text-zinc-300 md:text-lg">
					{t("projects.subtitle")}
				</p>
			</div>

			<div className="relative mt-10 space-y-4">
					<div className="flex flex-wrap justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35rem] text-zinc-300 backdrop-blur">
						{filters.map((categorie) => {
							const isAll = categorie === ALL_FILTER;
							const label = isAll
								? t("projects.filters.all")
								: categorie;
							const isActive = filter === categorie;
							return (
								<Button
									key={categorie}
									type="button"
									variant="ghost"
									size="sm"
									onClick={() => setFilter(categorie)}
									className={`h-auto rounded-full border px-4 py-2 text-[0.6rem] tracking-[0.3rem] transition ${
										isActive
											? "border-blue-400/70 bg-blue-500/10 text-white shadow-[0_0_30px_rgba(59,130,246,0.25)]"
											: "border-transparent text-zinc-300 hover:border-white/30 hover:text-white"
									}`}
								>
									{label}
								</Button>
							);
						})}
					</div>
					<p className="text-center text-xs uppercase text-zinc-400">
						{lastUpdatedAt
							? t("projects.state.lastUpdated", {
									date: new Date(
										lastUpdatedAt,
									).toLocaleString(),
								})
							: t("projects.state.loading")}
					</p>
				</div>

				<div className="relative mt-12">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{isLoading &&
							skeletonItems.map((_, index) => (
								<div
									key={`projects-skeleton-${index}`}
									className="h-full rounded-3xl border border-white/10 bg-black/40 p-6"
								>
									<div className="space-y-4">
										<Skeleton className="h-5 w-24 bg-white/10" />
										<Skeleton className="h-6 w-3/4 bg-white/10" />
										<div className="space-y-2">
											<Skeleton className="h-4 w-full bg-white/5" />
											<Skeleton className="h-4 w-4/5 bg-white/5" />
										</div>
										<div className="flex flex-wrap gap-2">
											{Array.from({ length: 3 }).map(
												(__, badgeIndex) => (
													<Skeleton
														key={`badge-${badgeIndex}`}
														className="h-6 w-16 rounded-full bg-white/10"
													/>
												),
											)}
										</div>
										<Skeleton className="h-5 w-28 bg-white/10" />
									</div>
								</div>
							))}

						{isError && (
							<div className="col-span-full">
								<Card className="border border-red-500/40 bg-black/50 p-0 text-white">
									<CardHeader className="flex flex-col gap-3 px-6 text-left">
										<div className="flex items-center gap-2 text-red-400">
											<AlertCircle className="size-5" />
											<span className="text-lg font-semibold">
												{t("projects.state.error.title")}
											</span>
										</div>
										<CardDescription className="text-zinc-300">
											{t("projects.state.error.description")}
											{error?.message && (
												<>
													{" "}
													<span className="font-semibold">
														{error.message}
													</span>
												</>
											)}
										</CardDescription>
									</CardHeader>
									<CardFooter className="border-t border-red-500/30 pt-6">
										<Button onClick={() => refetch()}>
											{t("projects.state.error.retry")}
										</Button>
									</CardFooter>
								</Card>
							</div>
						)}

						{!isLoading && !isError && repos.length === 0 && (
							<div className="col-span-full">
								<Card className="border border-white/10 bg-black/50 p-0 text-white">
									<CardHeader className="px-6">
										<CardTitle className="text-lg">
											{t("projects.state.empty")}
										</CardTitle>
										<CardDescription className="text-sm text-zinc-300">
											{t("projects.state.emptyDescription")}
										</CardDescription>
									</CardHeader>
								</Card>
							</div>
						)}

						{!isLoading && !isError && repos.length > 0 && (
							<AnimatePresence>
								{repos.map((repo) => (
									<motion.div
										key={repo.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 20 }}
										transition={{ duration: 0.35 }}
									>
										<Card className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-slate-950/60 to-black/80 p-0 text-white shadow-2xl shadow-black/40 before:absolute before:-right-12 before:top-0 before:h-48 before:w-48 before:rounded-full before:bg-blue-500/30 before:blur-3xl before:transition before:duration-500 before:content-[''] after:absolute after:-bottom-12 after:-left-12 after:h-48 after:w-48 after:rounded-full after:bg-emerald-400/20 after:blur-3xl after:content-[''] hover:before:scale-110">
											<CardHeader className="relative space-y-4 px-6 py-2">
												<div className="flex flex-wrap items-center gap-3 text-xs uppercase">
													<Badge className="border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[0.65rem] tracking-[0.25rem] text-blue-200">
														{repo.language ??
															t(
																"projects.languageFallback",
															)}
													</Badge>
												</div>
												<CardTitle className="text-2xl font-semibold">
													{repo.name}
												</CardTitle>
												<CardDescription className="line-clamp-3 text-base text-zinc-300">
													{repo.description ??
														t("projects.noDescription")}
												</CardDescription>
											</CardHeader>
											<CardContent className="relative space-y-4 px-6 pb-0 text-sm text-zinc-300">
												<div className="flex flex-wrap gap-2">
													{repo.topics
														?.filter(
															(topic) =>
																topic !==
																"public",
														)
														.map((topic) => (
															<Badge
																key={topic}
																variant="outline"
																className="border-white/20 bg-white/5 text-xs uppercase tracking-[0.2rem] text-white/80"
															>
																{topic}
															</Badge>
														))}
												</div>
											</CardContent>
											<CardFooter className="relative mt-auto flex gap-3 px-6 pb-6 pt-0">
												<a
													href={repo.html_url}
													target="_blank"
													className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-white transition hover:border-blue-400 hover:text-blue-300"
												>
													{t("projects.links.github")}
													<ArrowUpRight className="size-4" />
												</a>
												{repo.homepage && (
													<a
														href={repo.homepage}
														target="_blank"
														className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2rem] text-emerald-200 transition hover:border-emerald-300 hover:text-white"
													>
														{t("projects.links.website")}
														<ArrowUpRight className="size-4" />
													</a>
												)}
											</CardFooter>
										</Card>
									</motion.div>
								))}
							</AnimatePresence>
						)}
					</div>
				</div>
		</section>
	);
};

export default Projects;
