import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDYxfiXjZCoat_s-xjzi3z6TegP3IHCS1s",
  authDomain: "react-shop-cdaa4.firebaseapp.com",
  databaseURL: "https://react-shop-cdaa4.firebaseio.com",
  projectId: "react-shop-cdaa4",
  storageBucket: "react-shop-cdaa4.appspot.com",
  messagingSenderId: "433078883023",
  appId: "1:433078883023:web:6a7ae8ffa35f8ac1661dba",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;
