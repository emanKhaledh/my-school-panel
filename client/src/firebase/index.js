import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyC6SeQJkSM2B_KeRBJeA4oei8sQJmbamiY",
  authDomain: "school-34df0.firebaseapp.com",
  databaseURL: "https://school-34df0.firebaseio.com",
  projectId: "school-34df0",
  storageBucket: "school-34df0.appspot.com",
  messagingSenderId: "1070491876409",
  appId: "1:1070491876409:web:3619332fc57c02ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
   const storage = firebase.storage()
  export {
      storage, firebase as default
  }

