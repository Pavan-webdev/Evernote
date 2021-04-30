import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChl4JlIbsPSIN13ZVRgYSZMbUx7lcLQ-s",
  authDomain: "ever-note-a14bd.firebaseapp.com",
  projectId: "ever-note-a14bd",
  storageBucket: "ever-note-a14bd.appspot.com",
  messagingSenderId: "707031027881",
  appId: "1:707031027881:web:fe9bd3f7aa114c42fd19b8",
  measurementId: "G-WD58KYZS9V"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
