import { useTranslation } from "react-i18next";
import AboutImage from "../assets/about-us.png";

const About = () => {
	const { t } = useTranslation();

	return (
		<section
			className="mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-24 pb-16 text-center text-white md:grid-cols-2 md:pt-32 md:pb-20 lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="about"
		>
			<img
				src={AboutImage}
				alt={t("about.imageAlt")}
				className="mx-auto hidden md:flex"
			/>
			<div className="w-full space-y-4 text-start">
				<h3 className="text-2xl font-bold uppercase">
					{t("about.title")}
				</h3>
				<p className="text-lg text-zinc-400">
					{t("about.paragraphs.first")}
				</p>
				<p className="text-lg text-zinc-400">
					{t("about.paragraphs.second")}
				</p>
				<div className="flex gap-4"></div>
			</div>
		</section>
	);
};

export default About;
