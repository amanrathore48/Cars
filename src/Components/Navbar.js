import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { CgGitFork } from "react-icons/cg";
import { CgFileDocument } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillCar
} from "react-icons/ai";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={`navbar nav-foot-${props.mode}`}>
        <div className='navbar-container'>
          <a href='/' className={`navbar-logo logo text`} onClick={closeMobileMenu}>
            <AiFillCar style={{ marginRight: "4px" }} />  CARS
          </a>
          <div className={`menu-icon`} onClick={handleClick}>
            <i className={click ? `fas fa-times text` : `fas fa-bars text`} />
          </div>
          <ul className={click ? `nav-menu active` : 'nav-menu'}>
            <li className='nav-item'>
              <a href='/' className={`nav-links text`} onClick={closeMobileMenu}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/aboutus'
                className={`nav-links text`}
                onClick={closeMobileMenu}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://drive.google.com/file/d/1LeFUCSkegSlLOlkDuJEPbiZFY740Idlj/view?usp=sharing'
                target= "_blank"
                rel="noreferrer"
                className={`nav-links text`}
                onClick={closeMobileMenu}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </a>
            </li>

            <li>
              <a
                href='https://github.com/amanrathore48/Cars'
                className={`nav-links-mobile text`}
                onClick={closeMobileMenu}
                target='_blank'
                rel="noreferrer"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
              </a>
            </li>
          </ul>
          {button && <button className='btn--outline'>
            <a
              href='https://github.com/amanrathore48/Cars'
              onClick={closeMobileMenu}
              target='_blank'
              rel="noreferrer"
            ><i className={`fab fa-github git-clr`}></i>
            </a>
          </button>}


        </div>
      </nav>
    </>
  );
}

export default Navbar;
