import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<section
			className="mx-auto px-6 py-16 text-center lg:max-w-4xl xl:max-w-7xl"
			id="contact"
		>
			<h2 className="mb-6 text-3xl font-bold">
				{t("contacts.title")}
			</h2>
			<div className="flex justify-center gap-6">
				<a href="mailto:caiolmaciell@gmail.com" target="_blank">
					<Button variant="default">
						{t("contacts.buttons.email")}
					</Button>
				</a>
				<a
					href="https://www.linkedin.com/in/caio-maciel"
					target="_blank"
				>
					<Button variant="default">
						{t("contacts.buttons.linkedin")}
					</Button>
				</a>
			</div>
		</section>
	);
};

export default Contacts;
