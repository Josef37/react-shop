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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // No user provied, bail!
  if (!userAuth) return;

  // Get the user from firebase.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // Create the user, if it did not exist.
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

const fetchData = async (collectionPath, docTransform) => {
  const colRef = firestore.collection(collectionPath);
  const snapshot = await colRef.get();
  return Object.fromEntries(
    snapshot.docs.map((doc) => docTransform(doc.data()))
  );
};

export const fetchCollections = () => {
  return fetchData("collections", (coll) => [coll.routeName, coll]);
};

export const fetchItems = () => {
  return fetchData("items", (item) => [item.id, item]);
};

export default firebase;
