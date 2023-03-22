import Sidebar from "@/components/sidebar";
import PortfolioProvider from "@/context/portfolio";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PortfolioProvider>
      <Sidebar pageTitle={pageProps.pageTitle}>
        <Component {...pageProps} />
      </Sidebar>
    </PortfolioProvider>
  );
};

export default App;
