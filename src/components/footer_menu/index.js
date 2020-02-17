import React from "react";
import {
  FooterWrapper,
  FooterMenu,
  FooterIcon
} from "../../styled_fragments/styled_footer_menu";

const FooterMenuComponent = ({ menuItems, styles }) => {
  return (
    <FooterWrapper styles={styles}>
      {menuItems.map((item, i) => {
        return (
          <FooterMenu key={i}>
            <FooterIcon>{item.icon}</FooterIcon>
            {styles.showFooterMenuText && item.text}
          </FooterMenu>
        );
      })}
    </FooterWrapper>
  );
};

export default FooterMenuComponent;
