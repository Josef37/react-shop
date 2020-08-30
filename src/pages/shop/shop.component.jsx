import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchShopData } from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchShopData } = this.props;
    fetchShopData();
  }

  render() {
    const { match, isFetchingShopData } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={match.path}>
          <CollectionsOverviewWithSpinner loading={isFetchingShopData} />
        </Route>
        <Route exact path={`${match.path}/:collectionId`}>
          <CollectionPageWithSpinner loading={isFetchingShopData} />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingShopData: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShopData: () => dispatch(fetchShopData()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopPage)
);
