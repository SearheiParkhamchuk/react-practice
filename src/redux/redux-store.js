import { createStore, combineReducers } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
 });

const store = createStore(reducers);

export default store;