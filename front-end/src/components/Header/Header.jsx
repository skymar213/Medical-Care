import React, {  useState } from 'react';
import { NavLink,Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect,useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import {BiMenu} from 'react-icons/bi';
const Header = () => {
  const userinfo = JSON.parse(localStorage.getItem('userinfo'));
  const userRole = userinfo?.role; // A
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const navLinks = [
  
    {path: '/',
    display: 'Home'},
    {
        path: '/doctors',
        display: 'Find a Doctor'
    },
    {
      path: '/neardoctors',
      display: 'Find nearby doctors'
    },
   
    {
        path: '/contact',
        display: 'Contact'
    }
  
  ];

  const headerRef= useRef(null);
  const menuRef=useRef(null);

  const handleStickyheader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    handleStickyheader()
    return ()=>window.removeEventListener('scroll',handleStickyheader)
  })

  const toggleMenu = ()=> {if (menuRef.current) {
    menuRef.current.classList.toggle('show_menu');
  }
}

  useEffect(() => {
    // Check if user is logged in by looking for a specific flag in localStorage
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    };

    // Call the function to update login status
    checkLoginStatus();

    // Add an event listener to update login status when localStorage changes
    window.addEventListener('storage', checkLoginStatus);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  const handleLogout = () => {
    // Clear user info from localStorage and update login state
    localStorage.removeItem('userinfo');
    localStorage.setItem('isLoggedIn', 'false');
    logout();
    navigate('/login');
  };

  return (
    <header className="header flex items-center" ref={headerRef} >
      <nav>
        {isLoggedIn ? (
          <>
             <div className="container">
  <div className="flex items-center justify-between">
    {/* logo */}
    <Link to='/'>
      <div>
        <img src={logo} alt='logo' />
      </div>
    </Link>
    {/*menu*/}
    <div>
      <div className="navigation" ref={menuRef} onClick={toggleMenu}>
        <ul className="menu flex items-center gap-[2.7rem]">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]" 
                : "text-textColor text-[16px] leading-7 font-[500] hover:text-red-400"}
              >
                {link.display}
              </NavLink>

            </li>
          ))}
             {userRole === 'medecin' && (
               <Link to="/dashboard" className='hover:text-red-400'>Dashboard</Link>
                   )}
        </ul>
      </div>
    </div>
    {/*right Nav*/}
    <div className="flex items-center gap-4">
      <div className="hidden">
        <Link to="/users/profile/me">
          <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
            <img src={userImg} className="w-full rounded-full" alt="" />
          </figure>
        </Link>
      </div>
      <Link to="users/profile/me">
        <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
          Profile
        </button>
      </Link>
      {/* Logout Button */}
      <button onClick={handleLogout} className="bg-red-500 py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
        Logout
      </button>
      <span className="md:hidden" onClick={toggleMenu}>
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
    </div>
  </div>
</div>
          </>
        ) : (
          <>
           <div className="container">
           <div className="flex items-center justify-between">
           {/* logo */}
           <Link to='/'>
            <div>
              <img src={logo} alt='logo' />
            </div></Link>
              {/*menu*/}
              <div>
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                  <ul className="menu flex items-center gap-[2.7rem]">
                    {navLinks.map((link, index) => (
                      <li key={index}>
                          <NavLink
                            to={link.path}
                            className={navClass=>navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]" 
                            : "text-textColor text-[16px] leading-7 font-[500] hover:text-red-400"}
                          >
                            {link.display}
                          </NavLink>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              {/*right Nav*/}
              <div className="flex items-center gap-6">
                <div className="hidden">
                  <Link to="/users/profile/me">
                    <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                      <img src={userImg} className="w-full rounded-full" alt="" />
                    </figure>
                  </Link>
                </div>
                <Link to="/login">
                  <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                    Login
                  </button>
                </Link>
                <span className="md:hidden" onClick={toggleMenu}>
                  <BiMenu className="w-6 h-6 cursor-pointer" />
                </span>
              </div>


            </div>
           </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;