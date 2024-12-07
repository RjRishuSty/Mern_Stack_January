import React from "react";
import Styles from "./MenuItems.module.css";
import { Box, MenuItem } from "@mui/material";

const MenuItems = ({ isMobile }) => {
  const menu = [
    { menuItem: "Home" },
    { menuItem: "About" },
    { menuItem: "Contact" },
    { menuItem: "Sprint" },
    { menuItem: "DSA" },
    { menuItem: "HRML" },
    { menuItem: "CSS" },
  ];
  return (
    <Box className={isMobile ? Styles.isMobileMenu : Styles.menu}>
      {menu &&
        menu.map((item) => (
          <MenuItem
            className={isMobile ? Styles.mobileItem : Styles.menuItem}
            key={item.menuItem}
          >
            {item.menuItem}
          </MenuItem>
        ))}
    </Box>
  );
};

export default MenuItems;
