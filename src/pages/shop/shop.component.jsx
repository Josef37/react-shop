import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchShopDataStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collections.container";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchShopData();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={match.path}>
          <CollectionsOverviewContainer />
        </Route>
        <Route exact path={`${match.path}/:collectionId`}>
          <CollectionPageContainer />
        </Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchShopData: () => dispatch(fetchShopDataStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
