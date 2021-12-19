import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {commentsReducer} from './comments/reducer';

const reducer = combineReducers({
  state: commentsReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
