// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider //class
    
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:'AIzaSyA3qxZiTJp14pERpa4rQgoZivHlZBs8QK8',
    authDomain:'swag-v2-eccomerce.firebaseapp.com',
    projectId:'swag-v2-eccomerce',
    storageBucket:'swag-v2-eccomerce.appspot.com',
    messagingSenderId: '1035209681336',
    appId: '1:1035209681336:web:c7fa0d6a7f04ba7b38c74d'

}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


//creating a new instance of the google auth provider
const provider = new GoogleAuthProvider()

//this forces a user to select an account each time
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth =  getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth , provider)

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
