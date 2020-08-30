import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchShopData } from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchShopData } = this.props;
    fetchShopData();
  }

  render() {
    const { match, isFetchingShopData } = this.props;

    if (isFetchingShopData) {
      return <h1>I'm fetching, you @#*!</h1>;
    }

    return (
      <div className="shop-page">
        <Route exact path={match.path}>
          <CollectionsOverview />
        </Route>
        <Route exact path={`${match.path}/:collectionId`}>
          <CollectionPage />
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
