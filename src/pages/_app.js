import "@/styles/globals.css";
import React from "react";
import PageLayout from "./components/PageLayout";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <PageLayout>{page}</PageLayout>);
  return getLayout(<Component {...pageProps} />);
}

export default App;
