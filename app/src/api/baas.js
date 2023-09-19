import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB_PV5sScv7VLChkgY_OzGAQgVXitnSVmc",
    authDomain: "eccomerce-store.firebaseapp.com",
    databaseURL: "https://eccomerce-store-default-rtdb.firebaseio.com",
    projectId: "eccomerce-store",
    storageBucket: "eccomerce-store.appspot.com",
    messagingSenderId: "936532542071",
    appId: "1:936532542071:web:8760b3b86fb0ef97a0bc72",
    measurementId: "G-GJQJLBYK8P"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
 const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth,provider };