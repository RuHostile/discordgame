import React from "react";
import firebase from "firebase/compat/app";
import AuthFirebase from "../Helpers/AuthFirebase";

const auth = AuthFirebase();
function SignIn() {
   const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
   }

  return (
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )

}

export default SignIn;