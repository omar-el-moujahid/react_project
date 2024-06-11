import React from 'react'
import pagenotfound from './pagenotfound.jpeg';
export default function PageNotFound() {
  
  return (
    
    <>
    <img src={pagenotfound} alt="" className="img-fluid" />
    <div  className="d-flex justify-content-left align-items-center">
        <div className='w-50 d-flex justify-content-center '>
            <a 
            role="button"
            className="btn btn-primary w-50 mx-5"
            href='/'
            >
                Return
            </a>
        </div>
    
    </div>
    
    
    </>
  )
}

