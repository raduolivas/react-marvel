import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

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