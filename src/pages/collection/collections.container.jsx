import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

import CollectionPage from "./collection.component";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = (state, ownProps) => ({
  loading: selectIsFetching(state),
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);
