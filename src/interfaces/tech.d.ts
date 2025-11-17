export interface Tech {
	name: string;
	badge: "language" | "tool" | "cloud" | "framework";
	image: string;
	important?: boolean;
	caseKey: string;
}
