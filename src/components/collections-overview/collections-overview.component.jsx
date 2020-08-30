import React from "react";

import CollectionList from "../collection-list/collection-list.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collection) => (
      <CollectionList key={collection.id} numberOfItems={4} {...collection} />
    ))}
  </div>
);

export default CollectionsOverview;
