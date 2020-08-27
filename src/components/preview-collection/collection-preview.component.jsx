import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, itemIds }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {itemIds.slice(0, 4).map((id) => (
          <CollectionItem key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
