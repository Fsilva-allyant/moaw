"use client";
import { Button } from "@chakra-ui/react";

import MenuItemsNA from "./MenuItemsNA";
import { menuItemsData } from "@/common/menuItemsData";

export default function NavbarNA({ theme }) {
  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItemsNA theme={theme} items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
      <Button
        className="no-focus-indicator"
        _focus={
          theme
            ? {
                bg: `${theme} !important`,
              }
            : {
                bg: "blue.base",
              }
        }
        _hover={
          theme
            ? {
                bg: `${theme} !important`,
              }
            : {
                bg: "blue.base",
              }
        }
        display={["none", "inline-flex"]}
        variant="blue"
        backgroundColor={theme ? `${theme}` : "initial"}
        color={theme ? `black` : "initial"}
      >
        Sign In
      </Button>
    </nav>
  );
}
