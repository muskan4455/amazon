import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdcRtabw4u__0ySF9c26go1G1tkcxmV88",
  authDomain: "fir-653ea.firebaseapp.com",
  projectId: "fir-653ea",
  storageBucket: "fir-653ea.appspot.com",
  messagingSenderId: "708728687083",
  appId: "1:708728687083:web:ccce9768bd2a5fe8a531ae",
  measurementId: "G-28PM8QMSTE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
