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
				className="mx-auto grid grid-cols-1 gap-12 px-4 py-12 lg:max-w-4xl lg:grid-cols-3 xl:max-w-7xl"
				id="techs"
			>
				<div className="grid grid-cols-3 gap-6 lg:col-span-2 lg:grid-cols-4">
					{techs.map((tech) => (
						<Tooltip key={tech.name}>
							<TooltipTrigger className="flex aspect-square items-center justify-center border border-zinc-500 p-6">
								<img
									src={`src/assets/techs/${tech.image}`}
									alt={tech.name}
									className="max-h-full max-w-full object-contain"
								/>
							</TooltipTrigger>
							<TooltipContent>
								<p>{tech.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
				<div className="grid min-w-full grid-rows-2 space-y-12 rounded-md bg-zinc-600 p-6 lg:min-w-80">
					<div className="grid grid-cols-2 items-center justify-items-center">
						<h1 className="text-7xl font-extrabold text-blue-500">
							+5
						</h1>
						<h3 className="text-xl text-white">
							Anos de Experiencia Profissional
						</h3>
					</div>
					<div className="space-y-3 text-sm text-zinc-200 lg:mt-8">
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
