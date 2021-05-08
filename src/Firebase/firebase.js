import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBMEtBBrtJt0gLkh1PsekHwLPBaLWDBOEo",
  authDomain: "connect-ca4c1.firebaseapp.com",
  projectId: "connect-ca4c1",
  storageBucket: "connect-ca4c1.appspot.com",
  messagingSenderId: "722283663185",
  appId: "1:722283663185:web:c2b139cda70ae6d130cd70",
  measurementId: "G-RFYQ87VT14"
};

// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);

export default fire;