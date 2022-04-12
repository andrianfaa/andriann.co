import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from './container';

export interface NavbarMenuType {
  title: string;
  href: string;
  isActive: boolean;
}

export default function Navbar(): React.ReactElement {
  const router = useRouter();

  const { pathname } = router;

  const navigationLinks: NavbarMenuType[] = [
    {
      title: 'Home',
      href: '/',
      isActive: pathname === '/',
    },
    {
      title: 'Article',
      href: '/article',
      isActive: pathname.startsWith('/article'),
    },
    {
      title: 'About',
      href: '/about',
      isActive: pathname === '/about',
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
      isActive: pathname.startsWith('/portfolio'),
    },
  ];

  return (
    <nav className="border-b border-b-custom-black-700 fixed z-50 top left-0 w-full bg-custom-black bg-opacity-75 backdrop-blur-md">
      <Container className="flex items-center py-0 h-[60px]">
        <ul className="flex items-center justify-center gap-2 overflow-x-auto h-[60px] w-full">

          {navigationLinks.flatMap(({ title, href, isActive }) => (
            <li key={title}>
              <Link href={href} passHref>
                <span className={`cursor-pointer font-medium transition-all duration-300 ease-in-out inline-block py-1 px-2.5 rounded text-sm hover:text-custom-text-light ${isActive ? 'text-custom-text-light bg-white bg-opacity-10' : ''}`}>{title}</span>
              </Link>
            </li>
          ))}

        </ul>
      </Container>
    </nav>
  );
}
