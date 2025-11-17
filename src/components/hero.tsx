import HeroImage from "../assets/home-right.png";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import PT_DATA_CV from "../assets/files/pt/cv_dados.pdf";
import PT_DEV_CV from "../assets/files/pt/cv_dev.pdf";
import EN_DATA_CV from "../assets/files/en/cv_data.pdf";
import EN_DEV_CV from "../assets/files/en/cv_dev.pdf";

const Hero = () => {
	const { t, i18n } = useTranslation();
	const isPT = i18n.language === "pt";
	const dataCv = isPT ? PT_DATA_CV : EN_DATA_CV;
	const devCv = isPT ? PT_DEV_CV : EN_DEV_CV;
	const today = new Date();
	const formattedDate = today.toISOString().split("T")[0];

	return (
		<section className="mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-24 pb-16 text-center text-white md:grid-cols-2 md:pt-32 md:pb-20 md:text-left lg:max-w-4xl lg:px-0 xl:max-w-7xl">
			<div className="w-full space-y-4 text-start">
				<div className="flex items-center gap-4">
					<h3 className="text-2xl font-semibold uppercase">
						{t("hero.greeting")}
					</h3>
					<Separator className="w-full max-w-52 sm:max-w-xs lg:max-w-sm xl:max-w-md" />
				</div>

				<h1 className="text-3xl font-extrabold uppercase md:text-5xl">
					{t("hero.title")}
				</h1>
				<p className="text-lg">{t("hero.role")}</p>
				<div className="flex gap-4">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className="cursor-pointer rounded-none bg-linear-150 from-blue-400 from-0% to-blue-600 to-100% uppercase transition-colors hover:from-white hover:to-zinc-300 hover:text-zinc-900">
								{t("hero.downloadButton.title")}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<a
								href={dataCv}
								download={`${t("hero.downloadButton.data.file")}_${formattedDate}`}
								target="_blank"
							>
								<DropdownMenuItem>
									{t("hero.downloadButton.data.title")}
								</DropdownMenuItem>
							</a>
							<a
								href={devCv}
								download={`${t("hero.downloadButton.dev.file")}_${formattedDate}`}
								target="_blank"
							>
								<DropdownMenuItem>
									{t("hero.downloadButton.dev.title")}
								</DropdownMenuItem>
							</a>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
			<img src={HeroImage} alt={t("hero.altImg")} className="mx-auto" />
		</section>
	);
};

export default Hero;
