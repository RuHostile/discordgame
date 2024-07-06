import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const [user] = useAuthState(auth);

firebase.initializeApp({
  apiKey: "AIzaSyD4WRGW0K__0jn7KhBXKHNKhaI4v3m4B1Q",
  authDomain: "discordgame-c793c.firebaseapp.com",
  projectId: "discordgame-c793c",
  storageBucket: "discordgame-c793c.appspot.com",
  messagingSenderId: "423967732247",
  appId: "1:423967732247:web:6b159ce739b086129fa252"
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>

      <div>

      </div>
    </>
  )

}

function ChatMessage(props) {
  const { text, uid } = props.message;

  return <p>{text}</p>
}



export default App;
