"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./MenuItemsNA.module.scss";

import DropdownNA from "./DropdownNA";

import prodUrl from "@/common/prodUrl";

const MenuItemsNA = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items menu-items-na"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <a href="#">
            <span>{items.title}</span>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className={styles.arrowNA} />}
          </a>
          <DropdownNA depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <a href="#">
            {items.title}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className={styles.arrowNA} />}
          </a>
          <DropdownNA depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={prodUrl(`${items.url}`)}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItemsNA;
