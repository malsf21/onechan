import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBj4ccOkHKuMW3f_d67z8qzWFbA0fn5oTc",
    authDomain: "one-chan-playground.firebaseapp.com",
    databaseURL: "https://one-chan-playground.firebaseio.com",
    projectId: "one-chan-playground",
    storageBucket: "",
    messagingSenderId: "1032608414674"
};

firebase.initializeApp(config);

export default firebase;