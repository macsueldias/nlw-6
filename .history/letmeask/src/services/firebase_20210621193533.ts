import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.,
    databaseURL: process.env.,
    projectId: process.env.,
    storageBucket: "leatmeask-c55ec.appspot.com",
    messagingSenderId: "361399388266",
    appId: "1:361399388266:web:717da1c8fe240c02706213"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const database = firebase.database();

