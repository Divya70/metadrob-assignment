import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./appReducer/reducer";

const rootReducer = combineReducers({
  appReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
