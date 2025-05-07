import { useEffect, useState } from "react";
import type { Repo } from "../interfaces/repo";

export const useProjectsHook = () => {
	const [categories, setCategories] = useState<string[]>(["Todos"]);
	const [filter, setFilter] = useState("Todos");
	const [repos, setRepos] = useState<Repo[]>([]);

	useEffect(() => {
		fetch("https://api.github.com/users/M4ciel/repos")
			.then((res) => res.json())
			.then((data) => {
				const filtered: Repo[] = data.filter((repo: Repo) =>
					repo.topics?.includes("public"),
				);

				const tags = new Set<string>();
				filtered.forEach((repo) => {
					repo.topics?.forEach((topic) => {
						if (topic !== "public") tags.add(topic);
					});
				});

				setCategories(["Todos", ...Array.from(tags)]);
				setRepos(filtered);
			});
	}, []);

	const filteredProjects = repos.filter((repo) =>
		filter === "Todos" ? true : repo.topics?.includes(filter),
	);

	return { repos: filteredProjects, filter, setFilter, categories };
};
