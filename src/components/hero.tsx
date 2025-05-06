import HeroImage from "../assets/home-right.png";
import CV from "../assets/files/cv.pdf";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Hero = () => {
	const today = new Date();
	const formattedDate = today.toISOString().split("T")[0];

	return (
		<section className="mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-24 pb-16 text-center text-white md:grid-cols-2 md:pt-32 md:pb-20 md:text-left lg:max-w-4xl lg:px-0 xl:max-w-7xl">
			<div className="w-full space-y-4 text-start">
				<div className="flex items-center gap-4">
					<h3 className="text-2xl font-semibold uppercase">Olá!</h3>
					<Separator className="w-full max-w-52 sm:max-w-xs lg:max-w-sm xl:max-w-md" />
				</div>

				<h1 className="text-3xl font-extrabold uppercase md:text-5xl">
					Eu sou Caio Maciel
				</h1>
				<p className="text-lg">
					Engenheiro de Dados e Desenvolvedor FullStack
				</p>
				<div className="flex gap-4">
					<a
						href={CV}
						download={`cv_caio-maciel_${formattedDate}`}
						target="_blank"
					>
						<Button className="cursor-pointer rounded-none bg-linear-150 from-blue-400 from-0% to-blue-600 to-100% uppercase transition-colors hover:from-white hover:to-zinc-300 hover:text-zinc-900">
							Baixar meu CV
						</Button>
					</a>
				</div>
			</div>
			<img src={HeroImage} alt="Imagem do Hero" className="mx-auto" />
		</section>
	);
};

export default Hero;
