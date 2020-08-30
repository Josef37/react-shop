import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsFetching } from "../../redux/shop/shop.selectors";
import { selectShopCollectionsAsArray } from "../../redux/shop/shop.selectors";

import withSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching,
  collections: selectShopCollectionsAsArray,
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);
