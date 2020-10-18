import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import "@firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDegesjiWdLCNwzo6h_G-8lov1Pei2y9FA",
  authDomain: "ikashiaihealthcareapp.firebaseapp.com",
  databaseURL: "https://ikashiaihealthcareapp.firebaseio.com",
  projectId: "ikashiaihealthcareapp",
  storageBucket: "ikashiaihealthcareapp.appspot.com",
  messagingSenderId: "1078396750296",
  appId: "1:1078396750296:web:7292cbc9284ac60679caad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
