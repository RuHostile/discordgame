
import {useState} from "react";

import DropDownMenu from "./DropDownMenu";
function Header() {
   const [isDropdownVisible, setDropdownVisible] = useState(false);
 
   const handleMouseEnter = () => {
     setDropdownVisible(true);
   };
 
   const handleMouseLeave = () => {
     setDropdownVisible(false);
   };

   
   return (
     <div className='Menu'>
       <header>
         <h1>Discord Gatcha Game</h1>
 
         <div
           className="menu"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
         >
           <button>Dropdown Menu</button>
           {isDropdownVisible && <DropDownMenu />}
         </div>
       </header>
     </div>
   )
 }

 export default Header;