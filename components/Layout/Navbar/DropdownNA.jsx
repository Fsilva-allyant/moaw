"use client";
import MenuItemsNA from "./MenuItems";

const DropdownNA = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul id="dropdown" className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItemsNA items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default DropdownNA;
