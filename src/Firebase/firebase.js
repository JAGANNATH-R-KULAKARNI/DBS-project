import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA9E6nwCgNYGcufVciH37Naokk4o_wq_SQ",
  authDomain: "meme-generator-c0524.firebaseapp.com",
  projectId: "meme-generator-c0524",
  storageBucket: "meme-generator-c0524.appspot.com",
  messagingSenderId: "1086016412780",
  appId: "1:1086016412780:web:e4e0f53ff3c4d5120c8c49",
  measurementId: "G-CWCT3CPZSH"
};
// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);

export default fire;