import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    
    <>
    <div className=' container-fluid w-75 mt-5' >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={'/'} className='nav-link'> Users Liste </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Add_User'} className='nav-link'> Add User </Link>
                </li>
              </ul>
            </div>
        </nav>
    </div>
      

      <div className=' container-fluid w-75 mx-auto mt-3' >
            <Outlet/>
        </div>
    </>
  )
}

