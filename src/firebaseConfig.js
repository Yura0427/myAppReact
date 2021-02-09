import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAtAB2pg0qUtIljiJwYBcNM4meMTZNaT-k",
  authDomain: "myappreact-3f183.firebaseapp.com",
  databaseURL: "https://myappreact-3f183-default-rtdb.firebaseio.com",
  projectId: "myappreact-3f183",
  storageBucket: "myappreact-3f183.appspot.com",
  messagingSenderId: "172280822778",
  appId: "1:172280822778:web:c0b880a37e3862e9834243",
}
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;