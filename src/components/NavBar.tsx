import WaffleLogo from '../assets/waffle-logo-black-and-white.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

export default function NavBar() {
  const[isOpen,setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className="flex items-center justify-between min-h-14 bg-slate-300 p-3">
      <img height={50} width={50} src={WaffleLogo}></img>
      <RxHamburgerMenu onClick={handleNav} size={42} />
      {isOpen && <div>Link</div>}
    </div>
  )
}