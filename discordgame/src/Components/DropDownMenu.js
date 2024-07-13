import react from 'react';
import SignOut from './SignOut';

function DropDownMenu(){
   
   return (
    <div className='dropdown-menu'>
      <ul>
        <li>Chat Room</li>
        <li>Game</li>
        <SignOut>Sign Out</SignOut>
      </ul>
    </div>
  )
}

export default DropDownMenu;