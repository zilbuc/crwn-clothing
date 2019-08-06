import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { User } from 'firebase';
import { Item } from '../store/cart/index';

export type CollectionForFirebase = {
  title: string;
  items: Item[]
};

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

export const createUserProfileDocument = async (userAuth: User, additionalData: {}): Promise<firebase.firestore.DocumentReference> => {
  // if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // console.log('creating new user')
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: CollectionForFirebase[]) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj: CollectionForFirebase): void => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit()
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firebase };
