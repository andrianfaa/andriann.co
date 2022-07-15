import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

type FooterMenuType = {
  label: string
  href: string
}

function Footer() {
  const router = useRouter();

  const footerMenu: FooterMenuType[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "https://andrianfaa.medium.com",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <footer className="border-t border-t-black-700 py-6 mt-4">
      <div className="container p-6 text-center flex flex-col sm:flex-row sm:justify-between gap-6">
        <Link href="/" passHref>
          <a className="font-semibold text-black-100 text-lg" title={router.pathname !== "/" ? "Back to Home" : "Home"}>
            @andrianfaa
          </a>
        </Link>

        <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6 py-2 sm:py-0">
          {footerMenu.map(({ label, href }) => (
            <li key={label} className={href === "/" ? "sm:hidden" : ""}>
              <Link href={href} passHref>
                <a
                  className={`hover:text-black-100 font-medium ${router.pathname === href ? "text-primary" : ""}`}
                  title={label}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:andrianfadhilla@gmail.com"
          title="Email me"
          className="font-medium hover:text-black-100 focus:text-black-100"
        >
          andrianfadhilla@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
