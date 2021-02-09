import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import { firebaseReducer } from 'react-redux-firebase'
// import { firestoreReducer } from 'redux-firestore'
import { getFirebase } from "react-redux-firebase";

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    firebase: firebaseReducer
})

let store = createStore(
    reducers,
    applyMiddleware(thunk, thunk.withExtraArgument({ getFirebase }))
);

window.store = store

export default store