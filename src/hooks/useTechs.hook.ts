import type { Tech } from "../interfaces/tech";
import Typescript from "../assets/techs/typescript.svg";
import Go from "../assets/techs/go.svg";
import Airflow from "../assets/techs/airflow.svg";
import Excel from "../assets/techs/excel.svg";
import Python from "../assets/techs/python.svg";
import Dbt from "../assets/techs/dbt.svg";
import Gcp from "../assets/techs/gcp.svg";
import Notion from "../assets/techs/notion.svg";
import React from "../assets/techs/react.svg";
import Next from "../assets/techs/nextjs.svg";
import Nest from "../assets/techs/nestjs.svg";
import Pandas from "../assets/techs/pandas.svg";

export const useTechsHook = () => {
	const techs: Tech[] = [
		{
			name: "TypeScript",
			badge: "language",
			image: Typescript,
		},
		{
			name: "Go",
			badge: "language",
			image: Go,
		},
		{
			name: "Airflow",
			badge: "tool",
			image: Airflow,
		},
		{
			name: "Excel",
			badge: "tool",
			image: Excel,
		},
		{
			name: "Python",
			badge: "tool",
			image: Python,
		},
		{
			name: "DBT",
			badge: "tool",
			image: Dbt,
		},
		{
			name: "GCP",
			badge: "cloud",
			image: Gcp,
		},
		{
			name: "Notion",
			badge: "tool",
			image: Notion,
		},
		{
			name: "React",
			badge: "framework",
			image: React,
		},
		{
			name: "NextJs",
			badge: "tool",
			image: Next,
		},
		{
			name: "NestJs",
			badge: "tool",
			image: Nest,
		},
		{
			name: "Pandas",
			badge: "tool",
			image: Pandas,
		},
	];

	return { techs };
};
