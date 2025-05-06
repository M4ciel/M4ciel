import { useEffect, useState } from "react";
import type { Repo } from "../interfaces/repo";

export const useProjectsHook = () => {
	const categories = ["Todos", "TypeScript", "Python", "Go"];
	const [filter, setFilter] = useState("Todos");
	const [repos, setRepos] = useState<Repo[]>([]);

	useEffect(() => {
		fetch("https://api.github.com/users/M4ciel/repos")
			.then((res) => res.json())
			.then((data) => {
				const pinned = [
					"ecommerce-store",
					"adonisjs-files",
					"geomap",
					"custom-nest",
					"code-invest"
				];
				const filtered = data.filter((repo: Repo) =>
					pinned.includes(repo.name)
				);
				setRepos(filtered);
			});
	}, []);

	const filteredProjects = repos.filter((repo) =>
		filter === "Todos" ? true : repo.language === filter
	);

	return { repos: filteredProjects, filter, setFilter, categories };
};
