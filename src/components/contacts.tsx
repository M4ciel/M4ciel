import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { CalendarDays, Loader2, SendHorizontal } from "lucide-react";

type ContactFormFields = {
	name: string;
	email: string;
	message: string;
};

type FormStatus = "idle" | "success" | "error" | "missingEndpoint";

const initialFormState: ContactFormFields = {
	name: "",
	email: "",
	message: "",
};

const Contacts = () => {
	const { t } = useTranslation();
	const [formData, setFormData] =
		useState<ContactFormFields>(initialFormState);
	const [errors, setErrors] = useState<Partial<ContactFormFields>>({});
	const [status, setStatus] = useState<FormStatus>("idle");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

	const handleChange = (field: keyof ContactFormFields, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		setErrors((prev) => ({ ...prev, [field]: "" }));
		setStatus("idle");
	};

	const validateForm = () => {
		const newErrors: Partial<ContactFormFields> = {};
		if (formData.name.trim().length < 2) {
			newErrors.name = t("contacts.form.validation.name");
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email.trim())) {
			newErrors.email = t("contacts.form.validation.email");
		}
		if (formData.message.trim().length < 10) {
			newErrors.message = t("contacts.form.validation.message");
		}
		return newErrors;
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validationErrors = validateForm();
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length > 0) {
			return;
		}

		if (!formEndpoint) {
			setStatus("missingEndpoint");
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch(formEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Failed to submit form");
			}

			setStatus("success");
			setFormData(initialFormState);
		} catch (error) {
			console.error(error);
			setStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			className="relative mx-auto w-full px-4 pb-20 text-white lg:max-w-4xl lg:px-0 xl:max-w-7xl"
			id="contact"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-0 top-6 h-64 w-64 rounded-full bg-blue-500/15 blur-[120px]" />
				<div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/15 blur-[140px]" />
			</div>
				<div className="relative mb-10 space-y-3 text-center">
					<h2 className="text-3xl font-bold">
						{t("contacts.title")}
					</h2>
					<p className="text-base text-zinc-300">
						{t("contacts.description")}
					</p>
				</div>

				<div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
					<form
						onSubmit={handleSubmit}
						className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur"
					noValidate
				>
					<div>
						<label className="text-sm font-semibold uppercase tracking-widest text-blue-200">
							{t("contacts.form.name")}
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={(event) =>
								handleChange("name", event.target.value)
							}
							placeholder={t("contacts.form.placeholders.name")}
							className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-hidden"
							aria-invalid={Boolean(errors.name)}
						/>
						{errors.name && (
							<p className="mt-1 text-sm text-rose-300">
								{errors.name}
							</p>
						)}
					</div>
					<div>
						<label className="text-sm font-semibold uppercase tracking-widest text-blue-200">
							{t("contacts.form.email")}
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={(event) =>
								handleChange("email", event.target.value)
							}
							placeholder={t("contacts.form.placeholders.email")}
							className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-hidden"
							aria-invalid={Boolean(errors.email)}
						/>
						{errors.email && (
							<p className="mt-1 text-sm text-rose-300">
								{errors.email}
							</p>
						)}
					</div>
					<div>
						<label className="text-sm font-semibold uppercase tracking-widest text-blue-200">
							{t("contacts.form.message")}
						</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={(event) =>
								handleChange("message", event.target.value)
							}
							placeholder={t(
								"contacts.form.placeholders.message",
							)}
							rows={6}
							className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-hidden"
							aria-invalid={Boolean(errors.message)}
						/>
						{errors.message && (
							<p className="mt-1 text-sm text-rose-300">
								{errors.message}
							</p>
						)}
					</div>
					<div className="space-y-3">
						<Button
							type="submit"
							className="w-full justify-center rounded-2xl bg-blue-500/80 px-6 py-3 text-base font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<>
									<Loader2 className="size-4 animate-spin" />
									<span>{t("contacts.form.submit")}</span>
								</>
							) : (
								<>
									<SendHorizontal className="size-4" />
									<span>{t("contacts.form.submit")}</span>
								</>
							)}
						</Button>
						{status !== "idle" && (
							<div
								className={`rounded-lg border px-4 py-3 text-sm ${
									status === "success"
										? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
										: status === "missingEndpoint"
											? "border-amber-500/40 bg-amber-500/10 text-amber-200"
											: "border-rose-500/40 bg-rose-500/10 text-rose-200"
								}`}
								aria-live="polite"
							>
								{status === "success" &&
									t("contacts.form.success")}
								{status === "error" &&
									t("contacts.form.error")}
								{status === "missingEndpoint" &&
									t("contacts.form.missingEndpoint")}
							</div>
						)}
					</div>
				</form>

				<div className="space-y-6 rounded-[2rem] border border-white/10 bg-black/40 p-6 text-center shadow-xl shadow-black/30 backdrop-blur lg:text-left">
					<div className="space-y-4">
						<p className="text-sm uppercase tracking-[0.4rem] text-blue-200">
							{t("contacts.buttons.email")}
						</p>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
							<a
								href="mailto:caiolmaciell@gmail.com"
								target="_blank"
								className="flex-1"
							>
								<Button className="w-full rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/20">
									{t("contacts.buttons.email")}
								</Button>
							</a>
							<a
								href="https://www.linkedin.com/in/caio-maciel"
								target="_blank"
								className="flex-1"
							>
								<Button className="w-full rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/20">
									{t("contacts.buttons.linkedin")}
								</Button>
							</a>
						</div>
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								className="w-full justify-center gap-2 rounded-2xl border-blue-500/40 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20"
							>
								<CalendarDays className="size-4" />
								{t("contacts.calendly.cta")}
							</Button>
						</SheetTrigger>
						<SheetContent
							side="bottom"
							className="flex h-[85vh] flex-col border-t border-white/10 bg-slate-950/90 text-white backdrop-blur-xl sm:h-[70vh]"
						>
							<div className="overflow-y-auto px-1">
								<SheetHeader className="text-left">
									<SheetTitle className="text-2xl font-bold">
										{t("contacts.calendly.title")}
									</SheetTitle>
									<SheetDescription className="text-base text-zinc-300">
										{t("contacts.calendly.subtitle")}
									</SheetDescription>
								</SheetHeader>
								<p className="mt-4 text-sm text-zinc-400">
									{t("contacts.calendly.description")}
								</p>
								<div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/40">
									<div className="relative w-full pt-[125%] sm:pt-[65%]">
										<iframe
											src="https://calendly.com/caiolmaciell/30min"
											title="Calendly scheduling"
											className="absolute inset-0 h-full w-full"
											frameBorder="0"
											allowFullScreen
										/>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
