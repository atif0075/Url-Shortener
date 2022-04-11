
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {
    getAuth,
    getRedirectResult,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    GithubAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC21SriKJH1DqYdJUiYIsCQELAvYjNdkJ8",
    authDomain: "urlshorten-31cbf.firebaseapp.com",
    projectId: "urlshorten-31cbf",
    storageBucket: "urlshorten-31cbf.appspot.com",
    messagingSenderId: "318194017504",
    appId: "1:318194017504:web:062db8d75cd106e2291c85"
};

const provider = new GoogleAuthProvider();
const Gitprovider = new GithubAuthProvider();


const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {
    db,
    auth,
    provider,
    getRedirectResult,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    Gitprovider,
    GithubAuthProvider
}

