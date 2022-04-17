import { createStore, applyMiddleware } from "redux";
import logger from "./middleware/logging";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducers";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
