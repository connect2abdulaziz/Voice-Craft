import React from 'react'
import
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import './styles.css';
function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className="header-right flex mr-3">
            <div className="mr-4"><BsFillBellFill className="icon"/></div>
            <div className="mr-4"><BsFillEnvelopeFill className="icon"/></div>
            <div><BsPersonCircle className="icon"/></div>
           
        </div>
    </header>
  )
}

export default Header;