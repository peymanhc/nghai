import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import Order from "./Reducers/AddOrder";
import Lang from "./Reducers/Lang";
import Login from "./Reducers/Login";
import Profile from "./Reducers/Profile";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  Order: Order,
  Lang: Lang,
  Login: Login,
  Profile:Profile
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
