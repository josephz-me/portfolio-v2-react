import Head from "next/head";

function Meta() {
  return (
    <Head>
      <meta key="charset" charSet="utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        key="description"
        name="description"
        content="Joseph is an interaction designer exploring how multimodal interactions can alleviate our dependency on attention-heavy technologies."
      />
      <title key="title">Joseph Z</title>
      <link
        key="favicon"
        rel="icon"
        href="/static/favicon.png"
        importance="low"
      />
      <link
        key="apple-touch-icon"
        rel="apple-touch-icon"
        href="/static/favicon.png"
      />
    </Head>
  );
}

export default Meta;
