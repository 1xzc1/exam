import { combineReducers } from "redux";

import counterReducer from "./counter";
import userReducer from "./user";
import booksReducer from "./books"

const rootReducer = (combineReducers({
    counter: counterReducer,
    user: userReducer,
    books : booksReducer
}))

export default rootReducer;