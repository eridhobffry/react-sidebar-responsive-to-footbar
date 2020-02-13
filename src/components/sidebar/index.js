import React from "react";
import {
  Sidebar,
  Logo,
  MenuItem,
  Icon
} from "../../styled_fragments/styled_sidebar";

const SidebarComponent = ({ menuItems, styles }) => {
  return (
    <Sidebar styles={styles}>
      <Logo styles={styles}>{styles.sidebarCollapsed ? "A" : "App"}</Logo>
      {menuItems.map((item, index) => {
        return (
          <MenuItem key={index} styles={styles}>
            <Icon styles={styles}>{item.icon}</Icon>
            {!styles.sidebarCollapsed && item.text}
          </MenuItem>
        );
      })}
    </Sidebar>
  );
};

export default SidebarComponent;
