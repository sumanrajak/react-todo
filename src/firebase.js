import firebase from "firebase"; 


const firebaseApp= firebase.initializeApp( {

    apiKey: "AIzaSyDLSaQARfykMmy5iB8qR67foueO2-iLLG0",
    authDomain: "todoapp-ea18f.firebaseapp.com",
    databaseURL: "https://todoapp-ea18f.firebaseio.com",
    projectId: "todoapp-ea18f",
    storageBucket: "todoapp-ea18f.appspot.com",
    messagingSenderId: "727110423512",
    appId: "1:727110423512:web:a2f54c97e5b99544fcd8ad",
    measurementId: "G-WPEYD8T281"
  });

  const db = firebaseApp.firestore();

  export default db;