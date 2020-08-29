import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsAsArray } from "../../redux/shop/shop.selectors";

import CollectionList from "../collection-list/collection-list.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collection) => (
      <CollectionList key={collection.id} numberOfItems={4} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
