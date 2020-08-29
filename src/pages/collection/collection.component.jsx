import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionList from "../../components/collection-list/collection-list.component";

const CollectionPage = ({ collection }) => {
  return <CollectionList {...collection} />;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
