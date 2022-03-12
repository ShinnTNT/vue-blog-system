import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDqmL0TuM1TNwIW3Fw540XIrE3RkqUKO7k",
    authDomain: "vue-blog-system-main.firebaseapp.com",
    projectId: "vue-blog-system-main",
    storageBucket: "vue-blog-system-main.appspot.com",
    messagingSenderId: "423364489492",
    appId: "1:423364489492:web:4037e0c055a3d245d25201"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp

export {db,timestamp};