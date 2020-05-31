import "../../styles/_global.scss";
import React from "react";
import Page from "../components/Page";

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
