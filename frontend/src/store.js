import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {complaintDetailsReducer, complaintReducer, complaintsReducer, newComplaintReducer} from './reducers/complaintReducer'
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    complaints:complaintsReducer,
    newComplaint:newComplaintReducer,
    complaint:complaintReducer,
    user:userReducer,
    complaintDetails:complaintDetailsReducer
});

let initialState = {};

const middleWare = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)));

export default store