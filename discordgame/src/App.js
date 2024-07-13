import React from 'react';
import './App.css';

import AuthFirebase from './Helpers/AuthFirebase';
import ChatRoom from './Components/ChatRoom';
import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';

import { useAuthState } from 'react-firebase-hooks/auth';

const auth = AuthFirebase();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Discord Gatcha Game</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;