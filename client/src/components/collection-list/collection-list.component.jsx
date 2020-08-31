import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import { StyledCollectionList, Title, Preview } from "./collection-list.styles";

const CollectionList = ({ title, itemIds = [], numberOfItems }) => {
  const itemIdsToShow = numberOfItems
    ? itemIds.slice(0, numberOfItems)
    : itemIds;
  return (
    <StyledCollectionList>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {itemIdsToShow.map((id) => (
          <CollectionItem key={id} id={id} />
        ))}
      </Preview>
    </StyledCollectionList>
  );
};

export default CollectionList;
