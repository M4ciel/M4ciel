import { useTranslation } from "react-i18next";
import { Award, Github, PenSquare } from "lucide-react";

type FooterLink = {
	id: string;
	label: string;
	href: string;
};

const footerIcons: Record<string, JSX.Element> = {
	github: <Github className="size-4" />,
	medium: <PenSquare className="size-4" />,
	certifications: <Award className="size-4" />,
};

const Footer = () => {
	const { t } = useTranslation();
	const links = t("footer.links", {
		returnObjects: true,
	}) as FooterLink[];

	return (
		<footer className="mt-16 bg-black/60 text-white">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-zinc-400">
				<div className="flex flex-wrap gap-4">
					{links?.map((link) => (
						<a
							key={link.id}
							href={link.href}
							target="_blank"
							className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white transition hover:border-blue-400 hover:text-blue-300"
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
