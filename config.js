import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBChyI6zJi6_P0rIND150X1QnDgbCMEkek",
    authDomain: "e-rider-8feed.firebaseapp.com",
    projectId: "e-rider-8feed",
    storageBucket: "e-rider-8feed.appspot.com",
    messagingSenderId: "920855386269",
    appId: "1:920855386269:web:8dc591a7d147a93e165c74"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
