import React, { useRef, useState } from 'react';
import firebase from 'firebase/compat/app';
import AuthFirebase from '../Helpers/AuthFirebase';
import ChatMessage from './ChatMessage';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = AuthFirebase();
const firestore = firebase.firestore();

function ChatRoom() {
   const dummy = useRef();
   const messagesCollection = firestore.collection('messages');
   const query = messagesCollection.orderBy('createdAt').limit(25);
 
   const [messages] = useCollectionData(query, { idField: 'id' });
 
   const [formValue, setFormValue] = useState('');
 
 
   const sendMessage = async (e) => {
     e.preventDefault();
 
     const { uid, photoURL } = auth.currentUser;
 
     await messagesCollection.add({
       text: formValue,
       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
       uid,
       photoURL
     })
 
     setFormValue('');
     dummy.current.scrollIntoView({ behavior: 'smooth' });
   }
   return (<>
     <main>
 
       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
 
       <span ref={dummy}></span>
 
     </main>
 
     <form onSubmit={sendMessage}>
 
       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="New message" />
 
       <button type="submit" disabled={!formValue}>🕊️</button>
 
     </form>
   </>)
 }

 export default ChatRoom;