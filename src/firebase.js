import * as firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvtBUHH5JYir_mdJZLrvrxs-sCEINqzcc",
    authDomain: "myschool-a50c9.firebaseapp.com",
    databaseURL: "https://myschool-a50c9.firebaseio.com",
    projectId: "myschool-a50c9",
    storageBucket: "myschool-a50c9.appspot.com",
    messagingSenderId: "283703638616",
    appId: "1:283703638616:web:1bd0b7189ca09e040c282d",
    measurementId: "G-RM6M76WTPN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();