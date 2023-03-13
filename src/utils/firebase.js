import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC8NKG3CYQcydYmxfgd2QQWAXg9L8JUT2U",
    authDomain: "bookstore-db-d7a6a.firebaseapp.com",
    projectId: "bookstore-db-d7a6a",
    storageBucket: "bookstore-db-d7a6a.appspot.com",
    messagingSenderId: "606453962740",
    appId: "1:606453962740:web:1d038ad67f5ce9e0b90ba1"
};

export const app = initializeApp(firebaseConfig);
