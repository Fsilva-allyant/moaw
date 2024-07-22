"use client";
import MobileNav from "./Navbar/MobileNav";
import Navbar from "./Navbar/Navbar";
import { Button, Link, Image } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/">
          <Image src="/moaw_dark.png" alt="Museum of Accessibility Woes" />
        </Link>
        <Navbar />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
