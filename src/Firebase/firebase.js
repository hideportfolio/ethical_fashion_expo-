import firebase from "firebase/app"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { initializeApp } from 'firebase/app';

// ☆各プロジェクトの設定を記述
const firebaseConfig = {
    apiKey: "AIzaSyCBKZLLgmZzWAsLUn4pf3K4hJMqIbDGOIc",
    authDomain: "test-eba94.firebaseapp.com",
    projectId: "test-eba94",
    storageBucket: "test-eba94.appspot.com",
    messagingSenderId: "833345045052",
    appId: "1:833345045052:web:4ea3a8bb2b5dd9ccc37939",
    measurementId: "G-ZH49PSTF5W"
};


if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig)
}