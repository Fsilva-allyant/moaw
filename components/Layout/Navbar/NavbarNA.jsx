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
        className="no-focus-indicator"
        _focus={{
          bg: "blue.base",
        }}
        display={["none", "inline-flex"]}
        variant="blue"
      >
        Sign In
      </Button>
    </nav>
  );
}
