import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const LoginGoogle = async () => {
  const response =  await signInWithGooglePopup()
  console.log(response)
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