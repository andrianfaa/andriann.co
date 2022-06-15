import { useRouter } from "next/router";
import { Button } from "../components/atoms";
import type { SEOProps } from "../components/seo";
import SEO from "../components/seo";

function ErrorPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const SEOData: SEOProps = {
    title: "Andrian Fadhilla (andrianfaa) - 404",
    description: "This is a 404 page. The page you are looking for does not exist.",
    url: `https://www.andriann.co/${router.pathname}`,
    image: "https://ik.imagekit.io/lzkn3c9xkpp/Portfolio/og-images/og-image--404_7copRYr8C.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655090529268",
  };

  return (
    <div id="error-page">
      <SEO data={SEOData} />

      <h1>404</h1>
      <p>
        Page you are looking for does not exist.
        <br />
        You can go back to the home page by clicking the button below.
      </p>

      <Button.Base
        onClick={handleClick}
        title="Go back to home page"
      >
        Go back to home page
      </Button.Base>
    </div>
  );
}

export default ErrorPage;
