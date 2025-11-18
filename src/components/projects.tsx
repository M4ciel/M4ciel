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
import { AlertCircle } from "lucide-react";

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
			className="mx-auto w-full px-4 py-12 lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="projects"
		>
			<h2 className="mb-6 text-center text-3xl font-bold">
				{t("projects.title")}
			</h2>
				<div className="mb-4 flex flex-wrap justify-center gap-4 text-sm font-semibold sm:gap-6">
					{filters.map((categorie) => {
						const isAll = categorie === ALL_FILTER;
						const label = isAll
							? t("projects.filters.all")
							: categorie;
					return (
						<Button
							key={categorie}
							onClick={() => setFilter(categorie)}
							className={`cursor-pointer rounded-none bg-transparent px-3 py-2 text-xs uppercase sm:text-sm ${
								filter === categorie
									? "border-b-2 border-blue-500 text-blue-500"
									: "text-white hover:text-blue-500"
							}`}
						>
							{label}
						</Button>
						);
					})}
				</div>
				{lastUpdatedAt ? (
					<p className="mb-8 text-center text-xs uppercase text-zinc-400">
						{t("projects.state.lastUpdated", {
							date: new Date(lastUpdatedAt).toLocaleString(),
						})}
					</p>
				) : (
					<p className="mb-8 text-center text-xs uppercase text-zinc-400">
						{t("projects.state.loading")}
					</p>
				)}

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{isLoading &&
					skeletonItems.map((_, index) => (
						<Card
							key={`projects-skeleton-${index}`}
							className="h-full border-none bg-zinc-800 text-white shadow"
						>
							<CardHeader className="space-y-4">
								<Skeleton className="h-6 w-3/4 bg-zinc-700" />
								<div className="space-y-2">
									<Skeleton className="h-4 w-full bg-zinc-700" />
									<Skeleton className="h-4 w-4/5 bg-zinc-700" />
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<Skeleton className="h-4 w-24 bg-zinc-700" />
								<div className="flex flex-wrap gap-2">
									{Array.from({ length: 3 }).map(
										(__, badgeIndex) => (
											<Skeleton
												key={`badge-${badgeIndex}`}
												className="h-6 w-16 bg-zinc-700"
											/>
										),
									)}
								</div>
							</CardContent>
							<CardFooter className="flex gap-4">
								<Skeleton className="h-4 w-24 bg-zinc-700" />
								<Skeleton className="ml-auto h-4 w-20 bg-zinc-700" />
							</CardFooter>
						</Card>
					))}

				{isError && (
					<div className="col-span-full">
						<Card className="border border-red-500/40 bg-zinc-900 text-white">
							<CardHeader className="flex flex-col gap-2 text-left">
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
							<CardFooter>
								<Button onClick={() => refetch()}>
									{t("projects.state.error.retry")}
								</Button>
							</CardFooter>
						</Card>
					</div>
				)}

				{!isLoading && !isError && repos.length === 0 && (
					<div className="col-span-full">
						<Card className="border-none bg-zinc-800 text-white shadow">
							<CardHeader>
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
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.3 }}
							>
								<Card className="h-full border-none bg-zinc-800 text-white shadow">
									<CardHeader className="h-full">
										<CardTitle className="text-xl font-semibold">
											{repo.name}
										</CardTitle>
										<CardDescription className="line-clamp-3 text-sm">
											{repo.description ??
												t("projects.noDescription")}
										</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4 text-sm text-zinc-400">
										<p>{repo.language}</p>
										<div className="flex flex-wrap gap-2">
											{repo.topics
												?.filter(
													(topic) => topic !== "public",
												)
												.map((topic) => (
													<Badge
														key={topic}
														className="bg-blue-500 capitalize"
													>
														{topic}
													</Badge>
												))}
										</div>
									</CardContent>
									<CardFooter>
										<a
											href={repo.html_url}
											target="_blank"
											className="inline-block text-sm text-white underline"
										>
											{t("projects.links.github")}
										</a>
										{repo.homepage && (
											<a
												href={repo.homepage}
												target="_blank"
												className="ml-auto inline-block text-sm text-blue-400 underline"
											>
												{t("projects.links.website")}
											</a>
										)}
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</AnimatePresence>
				)}
			</div>
		</section>
	);
};

export default Projects;
