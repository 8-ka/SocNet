import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMW from 'redux-thunk';
import { reducer as formReducer } from "redux-form";
import { authReducers } from "../data/auth_container/index.js";
import { messagesReducers } from "../data/messages_container/index.js";
import { profileReducers } from "../data/profile_container/index.js";
import { usersReducers } from "../data/users_container/index.js";
import { appReducers } from "../data/app_container/index.js";

const reducersRedux = combineReducers({
    profilePage: profileReducers.profilePageReducer,
    messagesPage: messagesReducers.messagesPageReducer,
    usersPage: usersReducers.usersReducer,
    auth: authReducers.authReducer,
    app: appReducers.appReducer,
    form: formReducer,
})

const store = createStore(reducersRedux, applyMiddleware(thunkMW));

window.store = store;

export default store;
