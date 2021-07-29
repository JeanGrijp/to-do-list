import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCsBSMpNxtVEf7uuX_aBKL9FMt2tBL_P74",
  authDomain: "to-do-list-if977.firebaseapp.com",
  databaseURL: "https://to-do-list-if977-default-rtdb.firebaseio.com",
  projectId: "to-do-list-if977",
  storageBucket: "to-do-list-if977.appspot.com",
  messagingSenderId: "182237124833",
  appId: "1:182237124833:web:68cf85ed9114dd9ccfffa0",
  measurementId: "G-S8BHDSXYZ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();