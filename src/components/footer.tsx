import { useTranslation } from "react-i18next";
import { Github, Linkedin } from "lucide-react";
import type { JSX } from "react";

type FooterLink = {
	id: string;
	label: string;
	href: string;
};

const footerIcons: Record<string, JSX.Element> = {
	github: <Github className="size-4" />,
	linkedin: <Linkedin className="size-4" />,
};

const Footer = () => {
	const { t } = useTranslation();
	const links = t("footer.links", {
		returnObjects: true,
	}) as FooterLink[];

	return (
		<footer className="text-white">
			<div className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-zinc-400 lg:px-12">
				<div className="flex flex-wrap gap-4">
					{links?.map((link) => (
						<a
							key={link.id}
							href={link.href}
							target="_blank"
							className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-blue-400 hover:text-blue-300"
						>
							{footerIcons[link.id] ?? (
								<span className="size-2 rounded-full bg-blue-300" />
							)}
							<span>{link.label}</span>
						</a>
					))}
				</div>
				<p className="text-xs text-zinc-500">
					{t("footer.copy", { year: new Date().getFullYear() })}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
