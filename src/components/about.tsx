import AboutImage from "../assets/about-us.png";

const About = () => {
	return (
		<section
			className="mx-auto grid grid-cols-1 items-center gap-8 px-4 pt-24 pb-16 text-center text-white md:grid-cols-2 md:pt-32 md:pb-20 lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="about"
		>
			<img
				src={AboutImage}
				alt="Imagem do Hero"
				className="mx-auto hidden md:flex"
			/>
			<div className="w-full space-y-4 text-start">
				<h3 className="text-2xl font-bold uppercase">
					Uma Breve introdução sobre mim
				</h3>
				<p className="text-lg text-zinc-400">
					Sou o Caio Maciel, Engenheiro de Dados e Desenvolvedor
					FullStack com mais de 5 anos de experiência construindo
					soluções robustas, escaláveis e voltadas para performance.
					Tenho paixão por dados, APIs bem feitas e arquitetura limpa,
					e isso se reflete nos projetos que desenvolvo, desde
					pipelines com Airflow, dbt e BigQuery até aplicações
					modernas em TypeScript, Go e Python.
				</p>
				<p className="text-lg text-zinc-400">
					Fora do teclado, sou apaixonado por esportes (vôlei
					principalmente 🏐), música (de sertanejo a Bruno Mars 🎵),
					violão e boas conversas. Acredito que a tecnologia é uma
					ponte e meu objetivo é construir caminhos que conectem
					dados, pessoas e resultados reais.
				</p>
				<div className="flex gap-4"></div>
			</div>
		</section>
	);
};

export default About;
