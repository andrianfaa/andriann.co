/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../atoms/button";

type MenuType = {
  title: string;
  href: string;
  animationDelay?: string;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const navbarMenu: MenuType[] = [
    {
      title: "Home",
      href: "/",
      animationDelay: "250ms",
    },
    {
      title: "Projects",
      href: "/projects",
      animationDelay: "500ms",
    },
    {
      title: "Blog",
      href: "https://andrianfaa.medium.com/",
      animationDelay: "750ms",
    },
    {
      title: "About",
      href: "/about",
      animationDelay: "1000ms",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container px-6">
        <Link href="/" passHref>
          <a className="navbar-brand">
            @andrianfaa.
          </a>
        </Link>

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {navbarMenu.map(({ href, title, animationDelay }) => (
            <li
              key={title.toLowerCase()}
              style={{
                animationDelay: `${animationDelay}`,
              }}
              className={`navbar-menu-item ${title.toLowerCase() === "home" ? "sm:hidden" : ""}`}
            >
              <Link href={href} passHref>
                <a
                  onClick={() => handleClick(href)}
                  className={router.pathname === href ? "active"
                    : ""}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <Button.Base
          className={`navbar-toggler ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          title="Open menu"
        >
          <span className="navbar-toggler__icon" />
          <span className="navbar-toggler__icon" />
        </Button.Base>
      </div>
    </nav>
  );
}

export default Navbar;
