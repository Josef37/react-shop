import styled from "styled-components";

const mainColor = "black";
const subColor = "grey";

const shrinkLabelStyles = `
  top: -16px;
  font-size: 12px;
  color: ${mainColor};
`;

export const Label = styled.label`
  position: relative;
  margin: 45px 0;
  display: block;
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }
`;

export const Description = styled.span`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${(props) => props.shrink && shrinkLabelStyles}

  ${Input}:focus ~ & {
    ${shrinkLabelStyles}
  }
`;
