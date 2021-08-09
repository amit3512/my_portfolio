import React from 'react';
import amit from '../img/amit.JPG';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return (
        <div className="NavBar">
            

            <nav className='nav'>
                    <div className="profile">
                              <img src={amit} alt="" />
                    </div>
                   <ul className="nav-items">
                       <li className="nav-item">
                            <NavLink to="/" exact activeclassname="active">Home</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink to="/about" exact activeclassname="active">About</NavLink>
                       </li>
                       <li className="nav-item">
                            <NavLink to="/portfolio" exact activeclassname="active">Portfolio</NavLink>
                       </li>
                       {/* <li className="nav-item">
                            <NavLink to="/blogs" exact activeclassname="active">Blogs</NavLink>
                       </li> */}
                       <li className="nav-item">
                            <NavLink to="/contact" exact activeclassname="active">Contact</NavLink>
                       </li>
                       
                   </ul>
            </nav>
            <footer className="footer">
                    <p>
                       @AmitShrestha
                    </p>
            </footer>
        </div>
    )
    
}

export default NavBar;
