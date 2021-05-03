import firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyB3D4X-rjoZA8mFskd_wbMaZ0zc5faxRlM",
    authDomain: "home-page-db6ff.firebaseapp.com",
    projectId: "home-page-db6ff",
    storageBucket: "home-page-db6ff.appspot.com",
    messagingSenderId: "958706552017",
    appId: "1:958706552017:web:75af616986767ca5ec09f0"
};
const fire = firebase.default.initializeApp(firebaseConfig);

export default fire;