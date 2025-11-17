import { useMemo, useState } from "react";
import type { Repo } from "../interfaces/repo";
import { useQuery } from "@tanstack/react-query";

export const ALL_FILTER = "all";

const fetchProjects = async (): Promise<Repo[]> => {
	const response = await fetch(
		"https://api.github.com/users/M4ciel/repos",
	);

	if (!response.ok) {
		throw new Error("Failed to fetch repositories from GitHub");
	}

	const payload: unknown = await response.json();

	if (!Array.isArray(payload)) {
		throw new Error("Unexpected GitHub response");
	}

	return (payload as Repo[]).filter((repo: Repo) =>
		repo.topics?.includes("public"),
	);
};

export const useProjectsHook = () => {
	const [filter, setFilter] = useState<string>(ALL_FILTER);

	const {
		data: repos = [],
		dataUpdatedAt,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery<Repo[], Error>({
		queryKey: ["github", "repos"],
		queryFn: fetchProjects,
	});

	const categories = useMemo(() => {
		const tags = new Set<string>();
		repos.forEach((repo) => {
			repo.topics?.forEach((topic) => {
				if (topic !== "public") tags.add(topic);
			});
		});

		return Array.from(tags);
	}, [repos]);

	const filteredProjects = useMemo(
		() =>
			repos.filter((repo) =>
				filter === ALL_FILTER ? true : repo.topics?.includes(filter),
			),
		[filter, repos],
	);

	return {
		repos: filteredProjects,
		filter,
		setFilter,
		categories,
		isLoading,
		isError,
		error,
		refetch,
		lastUpdatedAt: dataUpdatedAt,
	};
};
