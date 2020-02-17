import styled from "styled-components";

export const Content = styled.div`
  padding-top: ${styles =>
    styles.showSidebar ? 20 : styles.topBarHeight + 20}px;
  padding-bottom: ${styles =>
    styles.showSidebar ? 20 : styles.footerMenuHeight + 20}px;
  padding-right: 20px;
  padding-left: ${styles =>
    styles.showSidebar ? styles.sidebarWidth + 20 : 20}px;
`;
