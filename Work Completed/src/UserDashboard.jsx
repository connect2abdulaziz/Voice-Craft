import { useState } from 'react'
import './styles.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

function UserDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Dashboard />
    </div>
  )
}

export default UserDashboard;