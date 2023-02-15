import queryClient from "@/utils/client";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import NavBar from "@/components/navbar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="pb-24">
        <NavBar />
      </div>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
