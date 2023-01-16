import React from "react";
import { NavLink } from "react-router-dom";
import './styles.css'

const Header = (props) => {
  const { login, isAuth, setLogOut } = props;
  
  return (
    <div className="header-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZsW_sjb-tTvyqY1UFlWuBi9el6mBTNG60A&usqp=CAU" alt='img' className='header__logo' />
      <div>
        <span>Header</span>
        <span>{isAuth 
          ? <div>{login}<button onClick={setLogOut}>{'Log Out'}</button></div>
          : <NavLink to={"/login"}>Login</NavLink>}</span>
      </div>
    </div>

  );
}

export default Header;