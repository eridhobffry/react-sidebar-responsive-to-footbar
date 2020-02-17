import styled from "styled-components";

export const Topbar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${props => props.styles.topBarHeight}px;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
  font-weight: bold;
  padding: 10px 20px;
  box-sizing: border-box;
`;
