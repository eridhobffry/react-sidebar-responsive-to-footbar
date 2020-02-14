import styled from "styled-components";

export const Content = styled.div`
  padding-top: ${props =>
    props.styles.showSidebar ? 20 : props.styles.topBarHeight + 20}px;
  padding-bottom: ${props =>
    props.styles.showSidebar ? 20 : props.styles.footerMenuHeight + 20};
  padding-right: 20px;
  padding-left: ${props =>
    props.styles.showSidebar ? props.styles.sidebarWidth + 20 : 20};
`;
