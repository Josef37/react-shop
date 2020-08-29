import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const Image = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  flex-grow: 1;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const StyledCustomButton = styled(CustomButton)`
  position: absolute;
  top: 240px;
  opacity: 0;
  visibility: hidden;
`;

export const StyledCollectionItem = styled.div`
  width: 22%;
  margin: 0 1.5%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${Image} {
      transition: opacity 0.7s ease-out;
      opacity: 0.85;
    }

    ${StyledCustomButton} {
      transition: opacity 0.3s ease-out;
      opacity: 1;
      visibility: visible;
    }
  }
`;
