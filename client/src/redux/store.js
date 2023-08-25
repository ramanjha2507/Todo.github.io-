import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { todosReducers } from "./reduces/todosReducer";
import { tabReducer } from "./reduces/tabReducers";

const reducer = combineReducers({
  // reducers
  todos: todosReducers,
  currentTab: tabReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
