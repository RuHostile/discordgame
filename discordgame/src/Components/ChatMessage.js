import React from 'react';
import AuthFirebase from '../Helpers/AuthFirebase';

const auth = AuthFirebase();

function ChatMessage(props) {
   const { text, uid, photoURL } = props.message;
   const placeholderphoto = '../public/pfp-pic.png';
 
   const messageClassName = uid === auth.currentUser.uid ? 'sent' : 'received';
   return (
     <>
       <div className={`message ${messageClassName}`}>
         <img src={photoURL || placeholderphoto}/>
         <p>{text}</p>
       </div>
     </>
   )
 }

 export default ChatMessage;