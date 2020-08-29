import styled from "styled-components";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

export const StyledCartIcon = styled.div`
  width: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingBagIcon)`
  width: 30px;
  height: 30px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 2px;
`;
