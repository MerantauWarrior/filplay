import styled from "styled-components";
export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin: 0;
  font-size: 16px;
  line-height: 1.5em;
  border: none;
  background: ${(props) => props.bg || "white"};
  color: ${(props) => props.color || "black"};
`;
