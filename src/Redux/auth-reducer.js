import firebase from 'firebase';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA'


let initialState = {
    uid: null,
    name: null,
    email: null,
    photoUrl: null,
    emailVerified: null,
    isAuth: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (uid, name, email, photoUrl, emailVerified, isAuth) => ({
    type: SET_USER_DATA, payload: { uid, name, email, photoUrl, emailVerified, isAuth }
})

export const signIn = (email, password) => (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            dispatch(setAuthUserData(
                userCredential.user.uid,
                userCredential.user.displayName,
                userCredential.user.email,
                userCredential.user.photoURL,
                userCredential.user.emailVerified,
                true))
            console.log('signInSuccess =>', userCredential.user)
        })
        .catch(error => {
            dispatch(stopSubmit("signIn", { _error: error.message }))
            console.log('signInError =>', error.code)
        })
}

export const signUp = (email, password) => (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            dispatch(setAuthUserData(
                userCredential.user.uid,
                userCredential.user.displayName,
                userCredential.user.email,
                userCredential.user.photoURL,
                userCredential.user.emailVerified,
                true))
            console.log('signUpSuccess =>', userCredential.user)
        })
        .catch(error => {
            dispatch(stopSubmit("signUp", { _error: error.message }))
            console.log('signUpError =>', error.code)
        })
}

export const signOut = () => (dispatch) => {
    firebase.auth().signOut()
        .then(() => {
            console.log('then signOutSuccess =>');
            dispatch(setAuthUserData(null, null, null, null, null, false))
        })
        .catch(error => {
            console.log('catch signOutError =>', error)
        })
};

export const getAuthUserData = () => (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('User is signed in', user.uid, user.displayName, user.email, user.photoURL, user.emailVerified, true);
            dispatch(setAuthUserData(user.uid, user.displayName, user.email, user.photoURL, user.emailVerified, true))
        } else {
            console.log('No user is signed in')
        }
    })
}

export const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('User is signed in', user.uid, user.displayName, user.email, user.photoURL, user.emailVerified, true);
            setAuthUserData(user.uid, user.displayName, user.email, user.photoURL, user.emailVerified, true)

        } else {
            // dispatch(setAuthUserData(null, null, null, null, null, false))
            console.log(' No user is signed in')
        }
    });


}

export const getUser1 = () => (dispatch) => {
    const user = firebase.auth().currentUser

    console.log('User is signed in', user.uid, user.displayName, user.email, user.photoURL, user.emailVerified, true);

    dispatch(setAuthUserData(user.uid, user.displayName, user.email, user.photoURL, user.emailVerified, true))


    // dispatch(setAuthUserData(null, null, null, null, null, false))
    console.log(' No user is signed in')

}


export default authReducer