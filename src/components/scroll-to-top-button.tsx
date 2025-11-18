import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const ratio = docHeight > 0 ? scrolled / docHeight : 0;
			setProgress(Math.min(Math.max(ratio, 0), 1));
			setIsVisible(scrolled > 400);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const smoothScrollToTop = () => {
		const duration = 700;
		const start = window.scrollY;
		const distance = -start;
		let startTime: number | null = null;
		const easeInOutCubic = (t: number) =>
			t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

		const animationStep = (currentTime: number) => {
			if (startTime === null) startTime = currentTime;
			const progressTime = Math.min(
				(currentTime - startTime) / duration,
				1,
			);
			const eased = easeInOutCubic(progressTime);
			window.scrollTo({ top: start + distance * eased });
			if (progressTime < 1) {
				requestAnimationFrame(animationStep);
			}
		};

		requestAnimationFrame(animationStep);
	};

	if (!isVisible) {
		return null;
	}

	const progressDegrees = progress * 360;

	return (
		<div className="fixed bottom-8 right-6 z-50">
			<div
				className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_10px_50px_rgba(23,37,84,0.6)] backdrop-blur transition hover:-translate-y-1"
				style={{
					backgroundImage: `conic-gradient(rgba(59,130,246,0.4) ${progressDegrees}deg, rgba(255,255,255,0.1) ${progressDegrees}deg)`,
				}}
			>
				<Button
					onClick={smoothScrollToTop}
					className="group flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white transition hover:bg-blue-600 cursor-pointer"
					size="icon"
					aria-label="Back to top"
				>
					<ArrowUp className="size-5 transition group-hover:-translate-y-1" />
				</Button>
			</div>
			<p className="mt-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.4rem] text-blue-200">
				Top
			</p>
		</div>
	);
};

export default ScrollToTopButton;
