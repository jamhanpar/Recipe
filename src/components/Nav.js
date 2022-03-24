import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav>
        <div>
          <h1>
            <a href="/">Food Ninja</a>
          </h1>
        </div>
        <ul>
          <li>
            <a href="#">
              <span>home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>about</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
