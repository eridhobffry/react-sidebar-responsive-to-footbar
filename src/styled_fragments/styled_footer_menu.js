import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: ${props => props.styles.footerMenuHeight}px;
  background-color: #333;
  color: white;
  position: fixed;
  bottom: 0;
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FooterIcon = styled.span`
  margin-right: 5px;
  font-size: 20px;
`;
