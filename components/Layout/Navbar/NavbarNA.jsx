"use client";
import { Button } from "@chakra-ui/react";

import MenuItemsNA from "./MenuItemsNA";
import { menuItemsData } from "@/common/menuItemsData";

export default function NavbarNA() {
  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItemsNA items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
      <Button
        display={["none", "inline-flex"]}
        variant="blue"
        _focus={{ bg: "blue.bold !important" }}
      >
        Sign In
      </Button>
    </nav>
  );
}
