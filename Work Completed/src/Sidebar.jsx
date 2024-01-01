import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillCircleFill, BsFillMicFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { BiBookOpen,BiUser } from 'react-icons/bi'
 import mylogo from './images/mylogo.png'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={mylogo} alt="" />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        <li className="sidebar-list-item">
            <a href="" className="flex items-center">
                <BsGrid1X2Fill className="icon" />
                <span className="ml-2">Dashboard</span>
            </a>
        </li>
            <li className='sidebar-list-item'>
                <a href="" className="flex items-center">
                <BsFillMicFill className="icon" /> 
                    <span className="ml-2">Quick Recordings</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className="flex items-center">
                    <BiBookOpen className='icon'/> 
                    <span className="ml-2">Learn Speaky</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className="flex items-center">
                    <BiUser className='icon'/> 
                    <span className="ml-2">AI Characters</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className="flex items-center">
                   <BsFillGrid3X3GapFill className='icon'/>    
                    <span className="ml-2">Templates</span>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className="flex items-center">
                    <BsFillArchiveFill className='icon'/> 
                    <span className="ml-2">Quick Recordings</span>
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar