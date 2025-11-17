import {
	QueryClient,
	type DefaultOptions,
} from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const defaultOptions: DefaultOptions = {
		queries: {
			staleTime: 1000 * 60 * 60, // cache GitHub repos for 1 hour
			gcTime: 1000 * 60 * 60 * 24, // drop cached results after 24 hours
		refetchOnWindowFocus: false,
		retry: 1,
	},
};

export const queryClient = new QueryClient({ defaultOptions });

if (typeof window !== "undefined") {
	const persister = createSyncStoragePersister({
		storage: window.localStorage,
		key: "portfolio-query-cache",
	});

	void persistQueryClient({
		queryClient,
		persister,
		maxAge: defaultOptions.queries?.gcTime ?? (1000 * 60 * 60 * 24),
	});
}
