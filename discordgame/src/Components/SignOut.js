import React from "react";
import AuthFirebase from "../Helpers/AuthFirebase";

const auth = AuthFirebase();
function SignOut() {
   

   return auth.currentUser && (
      <li as="li" className="sign-out" onClick={() => auth.signOut()}>Sign Out</li>
   )
}

export default SignOut;