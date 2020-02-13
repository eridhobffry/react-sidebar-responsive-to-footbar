import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
  width: ${props => props.styles.sidebarWidth};
  position: fixed;
  background-color: ${props => props.styles.black(0.8)};
  padding-top: 40px;
`;

export const Icon = styled.span`
  font-size: 26px;
  margin-right: ${props => (props.styles.sidebarCollapsed ? 0 : 10)}px;
`;

export const Logo = styled.div`
  text-align: center;
  color: ${props => props.styles.white()};
  font-size: 34px;
  margin-bottom: 60px;
  font-weight: bold;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: ${props =>
    props.styles.sidebarCollapsed ? "center" : "flex-start"};
  align-items: center;
  padding: 4px ${props => (props.styles.sidebarCollapsed ? 0 : 10)}px;
  color: ${props => props.styles.white(0.9)};
`;
