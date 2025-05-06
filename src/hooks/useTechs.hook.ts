import type { Tech } from "../interfaces/tech";

export const useTechsHook = () => {
	const techs: Tech[] = [
		{
			name: "TypeScript",
			badge: "language",
			image: "typescript.svg",
		},
		{
			name: "Go",
			badge: "language",
			image: "go.svg",
		},
		{
			name: "Airflow",
			badge: "tool",
			image: "airflow.svg",
		},
		{
			name: "Excel",
			badge: "tool",
			image: "excel.svg",
		},
		{
			name: "Python",
			badge: "tool",
			image: "python.svg",
		},
		{
			name: "DBT",
			badge: "tool",
			image: "dbt.svg",
		},
		{
			name: "GCP",
			badge: "cloud",
			image: "gcp.svg",
		},
		{
			name: "Notion",
			badge: "tool",
			image: "notion.svg",
		},
		{
			name: "React",
			badge: "framework",
			image: "react.svg",
		},
		{
			name: "NextJs",
			badge: "tool",
			image: "nextjs.svg",
		},
		{
			name: "NestJs",
			badge: "tool",
			image: "nestjs.svg",
		},
		{
			name: "Pandas",
			badge: "tool",
			image: "pandas.svg",
		},
	];

	return { techs };
};
