import {
  legacy_createStore as createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
const rootreducer = combineReducers({
    auth:authReducer,
})
export const store = createStore(rootreducer, compose(applyMiddleware(thunk)));
