import React from "react";
import Footer from "./component/layouts/Footer/Footer";
import Header from "./component/layouts/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import "./App.css";
import Products from "./component/Product/Products";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile";
import { load_UserProfile } from "./actions/userAction";
import store from "./store";
import { useSelector } from "react-redux";
import UserOptions from "./component/layouts/Header/UserOptions";
import PrivateRoute from "./component/Route/PrivateRoute";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.userData);

  React.useEffect(() => {
    // this is for user data load for profile section if user logged in
    store.dispatch(load_UserProfile());
  }, []);
  return (
    <>
      <Router>
        <Header />
        {/* if user lggedin the show UserOptions component for user options  */}
        {isAuthenticated && <UserOptions user={user} />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/product/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:keyword">
            <Products />
          </Route>
          <Route exact path="/login">
            <LoginSignUp />
          </Route>

          <PrivateRoute exact path="/account" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
