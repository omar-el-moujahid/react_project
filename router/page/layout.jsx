import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css';
export default function Layout() {
  const navStyle = {
    color: 'yellow'
}
  return (
    
    <>
        <ul
            className="nav justify-content-center custom-nav " 
            style={{color: 'yellow'}}
        >
            <li className="nav-item">
                <Link to={'/'} className={'nav-link'}>Home</Link>
            </li>
            <li className="nav-item">
            <Link to={'/blogs'} className={'nav-link'}>Blog</Link>
               
            </li>
            <li className="nav-item">
            <Link to={'/contact'} className={'nav-link'}>Contact</Link>
            </li>
        </ul>
        
        <div className=' container-fluid w-75 mx-auto' >
            <Outlet/>
        </div>
    </>
  )
}

