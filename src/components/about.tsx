import AboutImage from "../assets/about-us.png";

const About = () => {
	return (
		<section
			className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-8 pt-32 pb-20 text-center text-white"
			id="about"
		>
			<img src={AboutImage} alt="Imagem do Hero" className="mx-auto" />
			<div className="w-full space-y-4 text-start">
				<h3 className="text-2xl font-bold uppercase">
					Uma Breve introdução sobre mim
				</h3>
				<p className="text-lg text-zinc-400">
					Engenheiro de Dados e Desenvolvedor FullStack com mais de 5
					anos de experiência no desenvolvimento de sistemas, com
					forte atuação em arquitetura de dados, pipelines ETL/ELT e
					modelagem analítica. Especializado em Airflow (Astro Python
					SDK), Airbyte, dbt e BigQuery, com expertise em migração de
					dados, escalabilidade e otimização de performance.
				</p>
				<p className="text-lg text-zinc-400">
					Possuo experiência em construção de arquiteturas Modern Data
					Stack, garantindo governança e eficiência no processamento e
					análise de dados. Tenho um perfil proativo e analítico,
					sempre buscando as melhores soluções para problemas
					complexos. Além disso, atuei na liderança técnica de times e
					projetos, promovendo boas práticas de engenharia de dados,
					CI/CD, versionamento e automação.{" "}
				</p>
				<div className="flex gap-4"></div>
			</div>
		</section>
	);
};

export default About;
