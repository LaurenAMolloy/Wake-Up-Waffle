import WaffleLogo from '../assets/waffle-logo-black-and-white.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { Link } from 'react-router'

export default function NavBar() {
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
        <p>link</p>
        <p>link</p>
        <p>link</p>
        <p>link</p>
        <p>link</p>
        <p>link</p>
      </div>
      
      {/* mobile icon */}
      <button
        onClick={handleNav}
        aria-label="Toggle navigation"
        className="md:hidden cursor-pointer"
        >
          {isOpen ? <ImCross size={42} /> : <RxHamburgerMenu size={42} />}
      </button>

      <div className={`fixed top-0 left-0 w-[60%] h-screen bg-grey-900 md:hidden z-50 transition-all duration-500 ease-in
      ${isOpen ? 'translate-x-0' : '-translate-x-full' }`}>
        <p>link</p>
        <p>link</p>
        <p>link</p>
        <p>link</p>
        <p>link</p>
        <p>link</p>
      </div>
    </div>
  )}