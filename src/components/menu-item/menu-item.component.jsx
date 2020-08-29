import React from "react";
import { withRouter } from "react-router-dom";

import {
  StyledMenuItem,
  BackgroundImage,
  Content,
  Title,
  Subtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <StyledMenuItem
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage imageUrl={imageUrl} />
    <Content>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </StyledMenuItem>
);

export default withRouter(MenuItem);
