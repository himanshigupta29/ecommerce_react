import React from 'react';

import './Navbar.css';

import logo from '../logo.svg'

function Navbar() {
    return (
        <nav>
        <div className="nav-container">

             <img src= {logo} 
              height="50" width = "50" 
              className="logo" />

            <div>
                <form>
                    <div className="input-field">
                    <input aria-label = "search" 
                    id="search" type="search" 
                    placeholder="Search"
                    autoFocus
                    required />
                    </div>
                </form>
            </div>
        
          

              
            {/* <ul id="nav-mobile" className="">
            <li><a href="sass.html">Login</a></li>
            <li><a href="badges.html">Sign up</a></li>
          </ul> */}

        </div>

 


      </nav>
    )
}

export default Navbar
