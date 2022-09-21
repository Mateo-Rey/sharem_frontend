import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA8f7gjr6K7vK463kmh9-VuZv2U38oxgd4",
  authDomain: "meta-social-media.firebaseapp.com",
  projectId: "meta-social-media",
  storageBucket: "meta-social-media.appspot.com",
  messagingSenderId: "229792464723",
  appId: "1:229792464723:web:463ad60c975646cba0aba6"
  });

export const auth = app.auth()