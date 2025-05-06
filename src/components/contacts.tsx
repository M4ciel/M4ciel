import { Button } from "./ui/button";

const Contacts = () => {
	return (
		<section
			className="px-6 py-16 text-center lg:max-w-4xl xl:max-w-7xl"
			id="contact"
		>
			<h2 className="mb-6 text-3xl font-bold">Entre em contato</h2>
			<div className="flex justify-center gap-6">
				<a href="mailto:caiolmaciell@gmail.com" target="_blank">
					<Button variant="default">Gmail</Button>
				</a>
				<a
					href="https://www.linkedin.com/in/caio-maciel"
					target="_blank"
				>
					<Button variant="default">LinkedIn</Button>
				</a>
			</div>
		</section>
	);
};

export default Contacts;
