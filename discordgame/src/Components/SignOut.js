import React from "react";
import AuthFirebase from "../Helpers/AuthFirebase";

const auth = AuthFirebase();
function SignOut() {
   

   return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
   )
}

export default SignOut;