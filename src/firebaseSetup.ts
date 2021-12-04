import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAy3jWSWSBD8CEqVID9e8uRxEbS166mR3s",
  authDomain: "pixelpooldanail.firebaseapp.com",
  projectId: "pixelpooldanail",
  storageBucket: "pixelpooldanail.appspot.com",
  messagingSenderId: "758108542898",
  appId: "1:758108542898:web:01961203bd009391a7b6ab",
  measurementId: "G-NW05EGK9CW",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();