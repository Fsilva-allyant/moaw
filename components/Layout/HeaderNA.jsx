"use client";

import { Link, Image } from "@chakra-ui/react";

import NavbarNA from "./Navbar/NavbarNA";
import MobileNavNA from "./Navbar/MobileNavNA";

export default function HeaderNA() {
  return (
    <header>
      <Link id="skip-link" href="#main">
        Skip to main content
      </Link>
      <div className="nav-area">
        <Link href="/">
          <Image src="/moaw_dark.png" alt="Museum of Accessibility Woes" />
        </Link>
        <NavbarNA />
        <MobileNavNA />
      </div>
    </header>
  );
}
