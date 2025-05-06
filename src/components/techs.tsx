import { useTechsHook } from "../hooks/useTechs.hook";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

const Techs = () => {
	const { techs } = useTechsHook();

	return (
		<TooltipProvider>
			<section
				className="mx-auto grid max-w-7xl grid-cols-3 gap-20 py-12"
				id="techs"
			>
				<div className="col-span-2 grid w-full grid-cols-4 gap-8">
					{techs.map((tech) => (
						<Tooltip key={tech.name}>
							<TooltipTrigger className="size-40 border border-zinc-500 p-12">
								<img
									src={`src/assets/techs/${tech.image}`}
									alt={tech.name}
								/>
							</TooltipTrigger>
							<TooltipContent>
								<p>{tech.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
				<div className="grid min-w-80 grid-rows-2 space-y-12 bg-zinc-600 p-4">
					<div className="grid grid-cols-2 items-center justify-items-center">
						<h1 className="text-7xl font-extrabold text-blue-500">
							+5
						</h1>
						<h3 className="text-xl text-white">
							Anos de Experiencia Profissional
						</h3>
					</div>
					<div className="mt-8 space-y-2 text-sm text-zinc-200">
						<p className="text-lg">
							🚀 Foco em performance e escalabilidade
						</p>
						<p className="text-lg">🤝 Colaboração e comunicação</p>
						<p className="text-lg">
							🔍 Atenção a detalhes e qualidade
						</p>
					</div>
				</div>
			</section>
		</TooltipProvider>
	);
};

export default Techs;
