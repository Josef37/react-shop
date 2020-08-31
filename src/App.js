import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.comopnent";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.css";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/signin">
          {currentUser ? <Redirect to="/" /> : <SignInPage />}
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
