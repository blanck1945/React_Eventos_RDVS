import * as React from "react";
import * as reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import HomeNavbar from "./components/home_navbar/HomeNavbar";
import Login from "./pages/login/Login";
import { Home_Page } from "./pages/home/Home_Page";
import { Provider, useDispatch } from "react-redux";
import { store as Redux_Store } from "./Redux_Store/store";
import About from "./pages/about/About";
import Single_Event from "./pages/single_event/Single_Event";
import User_Home from "./pages/user_views_apges/user_home/User_Home";
import Wish_List from "./pages/user_views_apges/wish_list/Wish_List";
import Global_Help from "./pages/user_views_apges/user_help/Global_Help";
import User_Single_Event from "./pages/user_views_apges/single_event/User_Single_Event";

import "./main.scss";
import "./scss/variables.scss";
import Promotor_Dash from "./pages/user_views_apges/promotor_dash/Promotor_Dash";
import { setLogUser } from "./Redux_Store/actions/user_actions/user_actions";
import Protected_Route from "./components/protected_route/Protected_Route";
import Search_Page from "./pages/user_views_apges/search_page/Search_Page";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const checkLogUser = async () => {
      await dispatch(setLogUser());
    };
    if (window.localStorage.getItem("token")) {
      checkLogUser();
    }
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={User_Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/credits" component={HomeNavbar} />
        <Route path="/single_event" component={Single_Event} />
        <Route path="/dash" component={Home_Page} />
        <Route path="/help" component={Global_Help} />
        <Route path="/user_single" component={User_Single_Event} />
        <Route path="/search_page" component={Search_Page} />
        <Protected_Route
          path={"/promotor_dash"}
          component={Promotor_Dash}
          exact={true}
        />
        <Protected_Route path={"/wish"} component={Wish_List} exact={true} />
      </Switch>
      <Footer />
    </>
  );
};

reactDOM.render(
  <Provider store={Redux_Store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
