import firebase  from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDzsG2STpmfa1oTfxTkhng7tnFJFQttTrA",
  authDomain: "olx-project-ea848.firebaseapp.com",
  projectId: "olx-project-ea848",
  storageBucket: "olx-project-ea848.appspot.com",
  messagingSenderId: "1054710979823",
  appId: "1:1054710979823:web:a2bd8ce8580bd8e5d50f1a",
  measurementId: "G-YB4B31QMVL"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;