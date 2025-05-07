export interface Repo {
	id: number;
	name: string;
	description: string;
	language: string;
	html_url: string;
	homepage?: string;
	topics?: string[];
}
