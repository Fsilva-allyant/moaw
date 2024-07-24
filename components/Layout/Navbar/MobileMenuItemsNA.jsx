"use client";
import { useState } from "react";

import MobileDropdownNA from "./MobileDropdownNA";

const MobileMenuItemsNA = ({ items, depthLevel, showMenu, setShowMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          <button type="button" aria-expanded={dropdown ? "true" : "false"}>
            <a to={items.url} onClick={closeDropdown}>
              {items.title}
            </a>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? <span className="arrow-close" /> : <span className="arrow" />}
            </div>
          </button>
          <MobileDropdownNA depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button type="button" aria-expanded={dropdown ? "true" : "false"}>
            {items.title}{" "}
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? <span className="arrow-close" /> : <span className="arrow" />}
            </div>
          </button>
          <MobileDropdownNA depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MobileMenuItemsNA;
