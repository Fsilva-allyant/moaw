"use client";
import { menuItemsData } from "@/common/menuItemsData";
import MenuItems from "./MenuItems";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  const depthLevel = 0;

  console.log(menuItemsData);
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
      <Button display={{ base: "none", md: "inline-flex" }} variant={"blue"}>
        Sign In
      </Button>
    </nav>
  );
};

export default Navbar;
