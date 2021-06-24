import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDrLs8ZVtIIQpaJN-j9QEzUBNlcgs1oafw",
  authDomain: "cricketstatsmanagementsystem.firebaseapp.com",
  projectId: "cricketstatsmanagementsystem",
  storageBucket: "cricketstatsmanagementsystem.appspot.com",
  messagingSenderId: "681863873617",
  appId: "1:681863873617:web:76fea1b4190fc0616ba470",
  measurementId: "G-CXVWNNZ6DL"
};

const fire=firebase.initializeApp(firebaseConfig);

export default fire;