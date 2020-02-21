import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAxGZwgnAJ5ikb9-ZodusPVkPva01yHuQQ",
    authDomain: "crm-linkedin-9e871.firebaseapp.com",
    databaseURL: "https://crm-linkedin-9e871.firebaseio.com",
    projectId: "crm-linkedin-9e871",
    storageBucket: "crm-linkedin-9e871.appspot.com",
    messagingSenderId: "764892022405",
    appId: "1:764892022405:web:05f08cb6590752f4dacbec",
    measurementId: "G-9NE653X19M"
};

firebase.initializeApp(config);

export default firebase;