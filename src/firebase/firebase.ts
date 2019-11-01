import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// const prodConfig = {
//   apiKey: process.env.REACT_APP_PROD_API_KEY,
//   authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROD_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
// };

// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };

// const config =
//   process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

const config = {
    apiKey: "AIzaSyCJ5HY_ZV9ZUy2M1cxIxQq7fP1ITdZ2I9E",
    authDomain: "marvelchallenger.firebaseapp.com",
    databaseURL: "https://marvelchallenger.firebaseio.com",
    projectId: "marvelchallenger",
    storageBucket: "marvelchallenger.appspot.com",
    messagingSenderId: "309063076226",
    appId: "1:309063076226:web:37a9278c18e7c588dee79b",
    measurementId: "G-RKL1KT2TH2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();