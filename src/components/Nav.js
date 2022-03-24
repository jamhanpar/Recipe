import React from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
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

Nav.propTypes = {};

export default Nav;
