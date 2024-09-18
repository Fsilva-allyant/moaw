"use client";

import { Link, Image } from "@chakra-ui/react";

import Navbar from "./Navbar/Navbar";
import MobileNav from "./Navbar/MobileNav";

import prodUrl from "@/common/prodUrl";

export default function Header({ props }) {
  return (
    <header>
      <Link id="skip-link" href="#main">
        Skip to main content
      </Link>
      <div className="nav-area">
        <Link href={prodUrl("/")}>
          <Image
            src={props?.logo.header !== undefined ? props?.logo.header : "/moaw_dark.png"}
            alt="Museum of Accessibility Woes homepage"
          />
        </Link>
        <Navbar />
        <MobileNav />
      </div>
    </header>
  );
}
