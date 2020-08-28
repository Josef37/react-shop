import React from "react";

import "./collection-list.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionList = ({ title, itemIds, numberOfItems }) => {
  const itemIdsToShow = numberOfItems
    ? itemIds.slice(0, numberOfItems)
    : itemIds;
  return (
    <div className="collection-list">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {itemIdsToShow.map((id) => (
          <CollectionItem key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
