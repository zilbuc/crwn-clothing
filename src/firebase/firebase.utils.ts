import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crown-db910-76745.firebaseapp.com",
  databaseURL: "https://crown-db910-76745.firebaseio.com",
  projectId: "crown-db910",
  storageBucket: "",
  messagingSenderId: "442555555843",
  appId: "1:442555555843:web:5e413f479a97b4d4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebase };
