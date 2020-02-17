import styled from "styled-components";

export const Content = styled.div`
  padding-top: ${props => (props.styles.showSidebar ? 20 : 40 + 20)}px;
  padding-bottom: ${props => (props.styles.show ? 20 : 50 + 20)}px;
  padding-right: 20px;
  padding-left: ${props => (props.styles.showSidebar ? 150 + 20 : 20)}px;
`;
