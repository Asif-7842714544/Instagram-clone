import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/storage";

firebase.initializeApp({
    apiKey: "AIzaSyAIY4hgo7u2nl2ePIPcayciT5Xpw3xF-d0",
    authDomain: "instaclone-4dbf7.firebaseapp.com",
    projectId: "instaclone-4dbf7",
    storageBucket: "instaclone-4dbf7.appspot.com",
    messagingSenderId: "197828782990",
    appId: "1:197828782990:web:4e458974d5e2b5dbf812df"
  });

const auth= firebase.auth();
const storage= firebase.storage();

export {storage,auth};