import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASURMENT_ID}`,
  databaseUrl:
    "https://mysaving-b9bfe-default-rtdb.europe-west1.firebasedatabase.app",
};
console.log(process.env.REACT_APP_API_KEY);
firebase.initializeApp(firebaseConfig);

const GoogleAuth = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();
export { firebase, auth, storage, GoogleAuth, database };
