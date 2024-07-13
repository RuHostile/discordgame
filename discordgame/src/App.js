import React from 'react';
import './App.css';
import AuthFirebase from './Helpers/AuthFirebase';
import ChatRoom from './Components/ChatRoom';
import SignIn from './Components/SignIn';
import Header from "./Components/Header";
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = AuthFirebase();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className='App'>

      {user ? <Header></Header> : <h1>Discord App</h1>}
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;