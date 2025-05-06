import HeroImage from "../assets/home-right.png";
import CV from "../assets/files/cv.pdf";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Hero = () => {
	const today = new Date();
	const formattedDate = today.toISOString().split("T")[0];

	return (
		<section className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-8 pt-32 pb-20 text-center text-white">
			<div className="w-full space-y-4 text-start">
				<div className="flex items-center gap-4">
					<h3 className="text-2xl font-semibold uppercase">Olá!</h3>
					<Separator className="max-w-md" />
				</div>

				<h1 className="text-5xl font-extrabold uppercase">
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
