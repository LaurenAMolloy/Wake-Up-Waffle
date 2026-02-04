import WaffleLogo from '../assets/waffle-logo-black-and-white.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router'

export default function Header() {
  const[isOpen,setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="flex items-center justify-between min-h-14 bg-gray-900 p-3">
      {/* logo */}
      <Link to="/">
        <img height={50} width={50} src={WaffleLogo}></img>
      </Link>
      

      {/* desktoplinks */}
      <div className ="hidden md:flex gap-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
        `text-white ${isActive ? "font-bold underline" : ""}`
        }
        >
        Home
        </NavLink>
        <NavLink
        to="/menu"
        className={({ isActive }) =>
        `text-white ${isActive ? "font-bold underline" : ""}`
        }
        >
        Menu
        </NavLink>
        <NavLink
        to="/cart"
        className={({ isActive }) =>
        `text-white ${isActive ? "font-bold underline" : ""}`
        }
        >
        Cart
        </NavLink>
      </div>
      
      {/* mobile icon */}
      <button
        onClick={handleNav}
        aria-label="Toggle navigation"
        className="md:hidden cursor-pointer"
        >
          {isOpen ? <ImCross className="text-white" size={42} /> : <RxHamburgerMenu className="text-white" size={42} />}
      </button>

      <div className={`flex flex-col items-center gap-5 pt-10 fixed top-0 left-0 w-[60%] h-screen bg-gray-900 md:hidden z-50 transition-all duration-500 ease-in
      ${isOpen ? 'translate-x-0' : '-translate-x-full' }`}>
        <NavLink
        to="/"
        className={({ isActive }) =>
        `text-white ${isActive ? "font-bold underline" : ""}`
        }
        >
        Home
        </NavLink>
      </div>
    </div>
  )}