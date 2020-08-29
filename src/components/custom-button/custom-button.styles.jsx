import styled from "styled-components";

export const StyledCustomButton = styled.button`
  min-width: 165px;
  width: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }

  ${(props) => props.isGoogleSignIn && googleSignInStyles}
  ${(props) => props.isInverted && invertedStyles}
`;

const googleSignInStyles = `
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border-color: transparent;
  }
`;

const invertedStyles = `
  background-color: white;
  color: black;
  border-color: black;

  &:hover {
    background-color: black;
    color: white;
    border-color: transparent;
  }
`;
