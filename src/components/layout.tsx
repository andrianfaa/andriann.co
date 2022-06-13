import { ReactNode } from "react";
import { Navbar, Footer } from "./organisms";

interface PageLayoutProps {
  children: ReactNode
}

function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;
