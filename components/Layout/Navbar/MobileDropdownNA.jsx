"use client";
import MobileMenuItemsNA from "./MobileMenuItemsNA";

const MobileDropdownNA = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MobileMenuItemsNA items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default MobileDropdownNA;
