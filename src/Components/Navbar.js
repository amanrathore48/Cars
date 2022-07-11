import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>CARS</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Products</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
            <li className='btn'>
              <a href='/'>Buy Now</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
