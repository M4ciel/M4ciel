import type { Tech } from "../interfaces/tech";
import Airflow from "../assets/techs/airflow.svg";
import Airbyte from "../assets/techs/airbyte.svg";
import Dbt from "../assets/techs/dbt.svg";
import BigQuery from "../assets/techs/bigquery.svg";
import Postgres from "../assets/techs/postgresql.svg";
import DataLake from "../assets/techs/datalake.svg";
import Python from "../assets/techs/python.svg";
import Go from "../assets/techs/go.svg";
import Nest from "../assets/techs/nestjs.svg";
import Next from "../assets/techs/nextjs.svg";
import Typescript from "../assets/techs/typescript.svg";
import React from "../assets/techs/react.svg";
import Vue from "../assets/techs/vue.svg";
import Laravel from "../assets/techs/laravel.svg";
import Mysql from "../assets/techs/mysql.svg";
import Dotnet from "../assets/techs/dotnet.svg";

export const useTechsHook = () => {
	const techs: Tech[] = [
		{
			name: "Apache Airflow",
			badge: "tool",
			image: Airflow,
			important: true,
			caseKey: "airflow",
		},
		{
			name: "Airbyte",
			badge: "tool",
			image: Airbyte,
			important: true,
			caseKey: "airbyte",
		},
		{
			name: "dbt",
			badge: "tool",
			image: Dbt,
			important: true,
			caseKey: "dbt",
		},
		{
			name: "BigQuery",
			badge: "tool",
			image: BigQuery,
			important: true,
			caseKey: "bigquery",
		},
		{
			name: "PostgreSQL",
			badge: "tool",
			image: Postgres,
			important: true,
			caseKey: "postgresql",
		},
		{
			name: "Data Lakes",
			badge: "tool",
			image: DataLake,
			important: true,
			caseKey: "datalakes",
		},
		{
			name: "Python",
			badge: "language",
			image: Python,
			important: true,
			caseKey: "python",
		},
		{
			name: "Golang",
			badge: "language",
			image: Go,
			important: true,
			caseKey: "golang",
		},
		{
			name: "NestJS",
			badge: "framework",
			image: Nest,
			important: true,
			caseKey: "nestjs",
		},
		{
			name: "Next.js",
			badge: "framework",
			image: Next,
			important: true,
			caseKey: "nextjs",
		},
		{
			name: "TypeScript",
			badge: "language",
			image: Typescript,
			important: true,
			caseKey: "typescript",
		},
		{
			name: "React",
			badge: "framework",
			image: React,
			important: true,
			caseKey: "react",
		},
		{
			name: "Laravel",
			badge: "framework",
			image: Laravel,
			caseKey: "laravel",
		},
		{
			name: "MySQL",
			badge: "tool",
			image: Mysql,
			caseKey: "mysql",
		},
		{
			name: ".NET",
			badge: "framework",
			image: Dotnet,
			caseKey: "dotnet",
		},
		{
			name: "Vue.js",
			badge: "framework",
			image: Vue,
			caseKey: "vue",
		},
	];

	return { techs };
};
