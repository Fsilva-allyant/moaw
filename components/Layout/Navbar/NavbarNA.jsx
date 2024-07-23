"use client";
import { Button } from "@chakra-ui/react";

import MenuItems from "./MenuItems";
import { menuItemsData } from "@/common/menuItemsData";

const Navbar = () => {
  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
      <Button display={["none", "inline-flex"]} variant="blue">
        Sign In
      </Button>
    </nav>
  );
};

export default Navbar;
