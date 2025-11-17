import { useTranslation } from "react-i18next";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const LANGUAGES = [
	{ code: "pt", label: "Português (BR)", flag: "🇧🇷" },
	{ code: "en", label: "English (US)", flag: "🇺🇸" },
];

export const LanguageSwitcher = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage =
		LANGUAGES.find((language) => language.code === i18n.language) ??
		LANGUAGES[0];

	const handleLanguageChange = (code: string) => {
		i18n.changeLanguage(code);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="flex items-center gap-2 border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
				>
					<span className="text-xl" aria-hidden>
						{currentLanguage.flag}
					</span>
					<span className="text-xs uppercase">
						{t("navbar.language")}
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="border-zinc-700 bg-zinc-900 text-white">
				{LANGUAGES.map((language) => (
					<DropdownMenuItem
						key={language.code}
						onSelect={() => handleLanguageChange(language.code)}
						className="flex cursor-pointer items-center gap-2 focus:bg-zinc-800"
					>
						<span className="text-xl" aria-hidden>
							{language.flag}
						</span>
						<span>{language.label}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
