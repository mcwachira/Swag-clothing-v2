import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const LoginGoogle = async () => {
  const {user} =  await signInWithGooglePopup()
createUserDocumentFromAuth(user)
}

const SignIn = () => {
  return (
    <div>
        <h1> sign in </h1>
        <button onClick={LoginGoogle}> sign in with google</button>
    </div>
  )
}

export default SignIn