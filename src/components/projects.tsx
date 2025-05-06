import { useProjectsHook } from "../hooks/useProjects.hook";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
	const { repos, categories, setFilter, filter } = useProjectsHook();

	return (
		<section className="mx-auto max-w-7xl py-12" id="projects">
			<h2 className="mb-6 text-center text-3xl font-bold">Projetos</h2>
			<div className="mb-8 flex justify-center gap-8 text-sm font-semibold">
				{categories.map((categorie) => (
					<Button
						key={categorie}
						onClick={() => setFilter(categorie)}
						className={`cursor-pointer rounded-none bg-transparent uppercase ${
							filter === categorie
								? "border-b-2 border-blue-500 text-blue-500"
								: "text-white hover:text-blue-500"
						}`}
					>
						{categorie}
					</Button>
				))}
			</div>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
										{repo.description ?? "..."}
									</CardDescription>
								</CardHeader>
								<CardContent className="text-sm text-zinc-400">
									<p>{repo.language}</p>
								</CardContent>
								<CardFooter>
									<a
										href={repo.html_url}
										target="_blank"
										className="inline-block text-sm text-blue-400 underline"
									>
										Ver no GitHub
									</a>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default Projects;
