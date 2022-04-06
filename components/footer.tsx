/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import Container from './container';

export interface FooterLinkType {
  title: string;
  href: string;
}

export default function Footer(): React.ReactElement {
  const footerLinks: FooterLinkType[] = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Article',
      href: '/article',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
    },
  ];

  const socialMediaLinks: FooterLinkType[] = [
    {
      title: 'Github',
      href: 'https://github.com/andrianfaa',
    },
    {
      title: 'Instagram',
      href: 'https://instagram.com/andrianfaa_',
    },
    {
      title: 'Telegram',
      href: 'https://t.me/andrianfaa',
    },
    {
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/andrianfaa',
    },
    {
      title: 'Email',
      href: 'mailto:andrianfadhilla@gmail.com',
    },
  ];

  return (
    <footer className="footer border-t border-t-slate-800">
      <Container className="p-0">
        <Container id="footer-link-container" className="flex flex-row pb-0 pt-0 md:pt-4">
          <ul className="w-1/2">
            {socialMediaLinks.map((footerLink: FooterLinkType) => (
              <li key={footerLink.title} className="w-full my-4">
                <Link href={footerLink.href} passHref>
                  <a className="hover:text-blue-500 block py-1 text-sm md:text-base">{footerLink.title}</a>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="w-1/2">
            {footerLinks.map((footerLink: FooterLinkType) => (
              <li key={footerLink.title} className="w-full my-4">
                <Link href={footerLink.href} passHref>
                  <a className="hover:text-blue-500 block py-1 text-sm md:text-base">{footerLink.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>

        <Container>
          <p className="text-sm md:text-base mb-1">
            &copy;{new Date().getFullYear()} - andriann.co
          </p>
          <p className="text-sm md:text-base">
            Coded and designed with
            {' '}
            <BsFillHeartFill className="inline align-middle mx-0.5 w-4 h-4 text-red-500" />
            {' '}
            by <Link href="/about" passHref><a className="text-blue-500">Andrian Fadhilla</a></Link>
          </p>
        </Container>
      </Container>
    </footer>
  );
}
