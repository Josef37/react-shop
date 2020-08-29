import styled from "styled-components";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const borderStyle = "border-bottom: 2px solid #aaa;";
const tableStyle = `
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;

  > * {
    flex: 1 1 20%;
    text-align: center;
  }
`;

export const StyledCheckoutPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
`;

export const StyledCheckoutItem = styled(CheckoutItem)`
  ${tableStyle}
`;

export const CheckoutHeader = styled.div`
  padding-bottom: 20px;
  ${borderStyle}
  ${tableStyle}
`;

export const EmptyMessage = styled.span`
  display: inline-block;
  margin-bottom: 20px;
`;

export const CheckoutItems = styled.div`
  ${borderStyle}
`;

export const Total = styled.div`
  margin-top: 20px;
  font-size: 32px;
  text-align: right;
`;

export const TestPaymentNotice = styled.div`
  text-align: center;
  font-size: 20px;
`;

export const Payment = styled.div`
  text-align: right;
  margin: 20px 0 40px;
`;
