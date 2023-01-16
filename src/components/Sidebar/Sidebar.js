import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css';

const Sidebar = (props) => {
  const { className } = props;

  const navItems = ['Profile', 'Messages', 'Users', 'News', 'Music', 'Settings' ];

  return (
    <>
      <nav className={className}>
        {navItems.map((link, index) => (
          <div key={index.toString()} className="nav__item">
            <NavLink className='nav__item-link' to={`/${link.toLowerCase()}`}>
              {link}
            </NavLink>
          </div>
         )
        )}
      </nav>
    </>
  );
}

export default Sidebar;
