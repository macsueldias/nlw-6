import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';



<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBaP6AK2fJNtMgBMUvA7H8FJXia2dK7bEI",
    authDomain: "leatmeask-c55ec.firebaseapp.com",
    databaseURL: "https://leatmeask-c55ec-default-rtdb.firebaseio.com",
    projectId: "leatmeask-c55ec",
    storageBucket: "leatmeask-c55ec.appspot.com",
    messagingSenderId: "361399388266",
    appId: "1:361399388266:web:717da1c8fe240c02706213"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>





var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

