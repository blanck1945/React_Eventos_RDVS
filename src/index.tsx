import * as React from "react";
import * as reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/navbar";
import Footer from "./layouts/Footer/Footer";
import HomeNavbar from "./components/home_navbar/HomeNavbar";
import Login from "./pages/login/Login";
import { Home_Page } from "./pages/home/Home_Page";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store as Redux_Store } from "./Redux_Store/store";
import About from "./pages/about/About";
import Single_Event from "./pages/single_event/Single_Event";
import User_Home from "./pages/user_views_apges/user_home/User_Home";
import Wish_List from "./pages/user_views_apges/wish_list/Wish_List";
import Global_Help from "./pages/user_views_apges/user_help/Global_Help";
import User_Single_Event from "./pages/user_views_apges/single_event/User_Single_Event";

import "./main.scss";
import "./scss/variables.scss";
import { FetchAllEvents } from "./Redux_Store/actions/event_actions/axios";
import { GlobalState } from "./interfaces/state";
import Register from "./pages/login/register/Register";
import Promotor_Dash from "./pages/user_views_apges/promotor_dash/Promotor_Dash";
import { setLogUser } from "./Redux_Store/actions/user_actions/user_actions";
import Protected_Route from "./components/protected_route/Protected_Route";

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
        <Protected_Route path={"/promotor_dash"} component={Promotor_Dash} exact={true}/>
        <Protected_Route path={"/wish"} component={Wish_List} exact={true}/>
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
