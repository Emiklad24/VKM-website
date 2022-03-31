import "@styles/globals.css";
import PageProgressTransition from "@util/pageTransitionLoader/pageTransitionLoader";
import Router from "next/router";
import { useQueryClientAndsettings } from "@util/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

PageProgressTransition.configure({
  showSpinner: false,
});
Router.events.on("routeChangeStart", () => PageProgressTransition.start());
Router.events.on("routeChangeComplete", () => PageProgressTransition.done());
Router.events.on("routeChangeError", () => PageProgressTransition.done());

function MyApp({ Component, pageProps, router }) {
  const { queryClient } = useQueryClientAndsettings();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
