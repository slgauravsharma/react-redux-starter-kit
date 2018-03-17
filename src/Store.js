import rootReducer from "./redux/index";
import { createStore, applyMiddleware, compose } from "redux";

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
