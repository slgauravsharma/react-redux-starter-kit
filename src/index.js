import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import routes from "./routes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const store = configureStore;
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>{routeComponents}</div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
