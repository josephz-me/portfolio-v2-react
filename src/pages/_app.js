import "../../styles/_global.scss";
import React from "react";
import ReactGA from "react-ga";
import Page from "../components/Page";

function initializeReactGA() {
  ReactGA.initialize("UA-123791717-1");
  ReactGA.pageview("/homepage");
  console.log("brain");
}

export default function App({ Component, pageProps }) {
  initializeReactGA();
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
