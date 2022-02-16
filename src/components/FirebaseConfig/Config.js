import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDUchy24M_i6MiHVfuBKBQHm0YRMoRLmts",
  authDomain: "mysaving-b9bfe.firebaseapp.com",
  projectId: "mysaving-b9bfe",
  storageBucket: "mysaving-b9bfe.appspot.com",
  messagingSenderId: "901797471220",
  appId: "1:901797471220:web:465fa4a299c5b5181d0fa1",
  measurementId: "G-73B7ZXPYN5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth , db ,storage , }