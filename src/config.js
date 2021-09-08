import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCR4N_c0FsQqqmZv97SQaUA0nZsXsNcCzc",
  authDomain: "todo-app-cp-f2408.firebaseapp.com",
  projectId: "todo-app-cp-f2408",
  storageBucket: "todo-app-cp-f2408.appspot.com",
  messagingSenderId: "567164991854",
  appId: "1:567164991854:web:4a0ac056a77a3cf56a697f",
  measurementId: "G-TSDQNS28MR",
});

const db = firebaseApp.firestore();

export { db };
