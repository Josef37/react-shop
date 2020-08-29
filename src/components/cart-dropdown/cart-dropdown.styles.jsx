import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const StyledCartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 100%;
  right: 0;
  z-index: 5;
`;

export const CartItems = styled.div`
  flex-grow: 1;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const StyledCustomButton = styled(CustomButton)`
  width: 100%;
`;