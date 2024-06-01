import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyC0NmOyzugGAphJh-jKyllEWlBaDPi_TUM",
    authDomain: "infinity-c494a.firebaseapp.com",
    projectId: "infinity-c494a",
    storageBucket: "infinity-c494a.appspot.com",
    messagingSenderId: "565473194098",
    appId: "1:565473194098:web:fb4fddad7d52a8f816d2eb",
    measurementId: "G-3N9BJC2111"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase