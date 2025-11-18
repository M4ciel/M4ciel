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
		<div
			className="fixed bottom-6 right-6 z-50 rounded-full p-[2px] shadow-lg shadow-blue-500/20 transition hover:scale-105"
			style={{
				background: `conic-gradient(#3b82f6 ${progressDegrees}deg, rgba(255,255,255,0.15) ${progressDegrees}deg)`,
			}}
		>
			<Button
				onClick={smoothScrollToTop}
				className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:-translate-y-1 cursor-pointer"
				aria-label="Back to top"
				size="icon"
			>
				<ArrowUp className="size-5 animate-bounce" />
			</Button>
		</div>
	);
};

export default ScrollToTopButton;
