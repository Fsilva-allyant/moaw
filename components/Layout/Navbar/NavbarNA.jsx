"use client";
import { Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import MenuItemsNA from "./MenuItemsNA";
import { menuItemsDataNA } from "@/common/menuItemsDataNA";
import { menuItemsDataSchneider } from "@/common/menuItemsDataSchneider";
console.log(menuItemsDataNA);

export default function NavbarNA({ theme }) {
  const isSchneider = usePathname().includes("schneider");

  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      {isSchneider ? (
        <ul className="menus">
          {menuItemsDataSchneider.map((menu, index) => {
            return <MenuItemsNA theme={theme} items={menu} key={index} depthLevel={depthLevel} />;
          })}
        </ul>
      ) : (
        <ul className="menus">
          {menuItemsDataNA.map((menu, index) => {
            return <MenuItemsNA theme={theme} items={menu} key={index} depthLevel={depthLevel} />;
          })}
        </ul>
      )}
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
