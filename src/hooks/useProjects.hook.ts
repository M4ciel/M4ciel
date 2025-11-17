import { useEffect, useState } from "react";
import type { Repo } from "../interfaces/repo";

export const ALL_FILTER = "all";

export const useProjectsHook = () => {
	const [categories, setCategories] = useState<string[]>([]);
	const [filter, setFilter] = useState<string>(ALL_FILTER);
	const [repos, setRepos] = useState<Repo[]>([]);

	useEffect(() => {
		fetch("https://api.github.com/users/M4ciel/repos")
			.then((res) => res.json())
			.then((data) => {
				if (!Array.isArray(data)) {
					console.error("Unexpected GitHub response:", data);
					return;
				}

				const filtered: Repo[] = data.filter((repo: Repo) =>
					repo.topics?.includes("public"),
				);

				const tags = new Set<string>();
				filtered.forEach((repo) => {
					repo.topics?.forEach((topic) => {
						if (topic !== "public") tags.add(topic);
					});
				});

				setCategories(Array.from(tags));
				setRepos(filtered);
			})
			.catch((error) => {
				console.error("Failed to load repositories", error);
			});
	}, []);

	const filteredProjects = repos.filter((repo) =>
		filter === ALL_FILTER ? true : repo.topics?.includes(filter),
	);

	return { repos: filteredProjects, filter, setFilter, categories };
};
