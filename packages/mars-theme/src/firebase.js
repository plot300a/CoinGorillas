import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdWomER2prpa_7bVro6Ne_tbhPBbYRIPA",
  authDomain: "coingorillas.firebaseapp.com",
  projectId: "coingorillas",
  storageBucket: "coingorillas.appspot.com",
  messagingSenderId: "60301795068",
  appId: "1:60301795068:web:e8524cfecb50f7c65fc179",
  measurementId: "G-7K6W8EBRPJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
