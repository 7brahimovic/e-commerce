import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBX8WwxQcFf9drOm78UcSEg7riICdc6bHk",
    authDomain: "mion-6c8f7.firebaseapp.com",
    projectId: "mion-6c8f7",
    storageBucket: "mion-6c8f7.appspot.com",
    messagingSenderId: "705980327503",
    appId: "1:705980327503:web:d18806a596de22bbd92c3a",
    measurementId: "G-ZK047RE1D3"

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;