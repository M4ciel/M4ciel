import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/navbar.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<I18nextProvider i18n={i18n}>
				<Navbar />
				<App />
			</I18nextProvider>
		</QueryClientProvider>
	</StrictMode>,
);
