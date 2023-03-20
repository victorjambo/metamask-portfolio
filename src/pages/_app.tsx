import Sidebar from "@/components/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Sidebar pageTitle={pageProps.pageTitle}>
      <Component {...pageProps} />
    </Sidebar>
  );
};

export default App;
