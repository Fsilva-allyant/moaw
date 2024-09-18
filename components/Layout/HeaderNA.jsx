"use client";

import { Link, Image } from "@chakra-ui/react";

import NavbarNA from "./Navbar/NavbarNA";
import MobileNavNA from "./Navbar/MobileNavNA";

import prodUrl from "@/common/prodUrl";

export default function HeaderNA({ props }) {
  console.log("header", props);
  return (
    <div>
      <Link display="none" href="#main">
        Skip to main content
      </Link>
      <div className="nav-area">
        <Link className="no-focus-indicator" href={prodUrl("/")}>
          <Image
            src={props?.logo?.header !== undefined ? props?.logo?.header : "/moaw_dark.png"}
            alt="company logo"
          />
        </Link>
        <NavbarNA />
        <MobileNavNA />
      </div>
    </div>
  );
}
