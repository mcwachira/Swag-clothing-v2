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


import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore'
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


//create a new instance of our firestore database
export const db =getFirestore();

//creating a new collection of users 
export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db ,'users',userAuth.uid )

    const userSnapShot = await getDoc(userDocRef)

    console.log(userSnapShot)

    //check if the userSnapshot does not exit 
    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{

            //set doc is used to create the individual document for our collection of users.
            //passing what you want the document to contain
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error){
            console.log('error creating a user', error)
        }


    }
    return userDocRef;
}