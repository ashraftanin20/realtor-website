import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
import "./nav.css";

export const Nav = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setClicked(!clicked);
    }
   
  return (
    <nav className='navbar'>
        <ul className={clicked ? "navbar navbar__list active" : "navbar navbar__list"}>
        <li className="navbar__items"><a href="#sell">Sell</a></li>
        <li className="navbar__items"><a href="#rent">Rent</a></li>
        <li className="navbar__items"><a href="#newbuilding">New Buildings</a></li>
        <li className="navbar__items"><a href="#realtor">Realtors</a></li>
        <li className="navbar__items"><a href="#agency">Agencies</a></li>
    </ul>
    <div className="navbar__mobile__button">
        {clicked ? (
            <VscClose onClick={handleClick} />
        ) : ( 
            <FiMenu onClick={handleClick} />
        )}
        
    </div>
        
    </nav>
  )
}
