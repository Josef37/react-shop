import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/preview-collection/collection-preview.component";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});

export default connect(mapStateToProps)(ShopPage);
