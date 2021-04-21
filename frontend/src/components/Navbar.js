import React from 'react';

import './Navbar.css';


function Navbar() {
    return (
        <nav>
        <div className="nav-container">
       
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
        
          {/* <a href="#" className="">Logo</a> */}
          <ul id="nav-mobile" className="">
            {/* <li><a href="sass.html">Login</a></li> */}
            {/* <li><a href="badges.html">Sign up</a></li> */}
          </ul>
        </div>

        {/* <div className="nav-content">
            <ul className="tabs tabs-transparent">
                <li className="tab"><a className="#test1">Test 1</a></li>
                <li className="tab"><a className="active" href="#test2">Test 2</a></li>
                <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
                <li className="tab"><a href="#test4">Test 4</a></li>
            </ul>
        </div> */}


      </nav>
    )
}

export default Navbar