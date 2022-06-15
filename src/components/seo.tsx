import Head from "next/head";

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  keywords?: string[];
}

function SEO({ data }: { data: SEOProps }) {
  const {
    title,
    description,
    image = "https://ik.imagekit.io/lzkn3c9xkpp/Portfolio/og-images/og-image--home_CT3S7585Bm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655090528763",
    url,
    keywords = [
      "Andrian Fadhilla",
      "User Interface Designer",
      "Front-End Developer",
      "Bekasi, Indonesia",
      "React.js",
      "Next.js",
      "Typescript",
      "andrianfaa",
      "andrianfadhilla",
    ],
  } = data;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:creator" content="@andrianfaa" />

      <link rel="canonical" href={url} />
    </Head>
  );
}

export default SEO;
