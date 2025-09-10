import { Footer } from "@widgets/Footer";
import { Navbar } from "@widgets/Navbar";
import type { FC, ReactNode } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <nav className="flex justify-center">
        <Navbar />
      </nav>
      <main className="flex justify-center">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
