import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()  // gives the path of current url 

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location])
  
  return (
    <div>
        <div className='w-full bg-slate-800 py-3'>
            <div className='setWidth flex items-cente space-x-9'>
                <h1 className='font-semibold text-2xl text-white'><Link to='/'>iNotebook</Link></h1>
                <ul className='flex items-center space-x-6'>
                    <li className={`font-medium text-base ${location.pathname==="/"? "active": "text-gray-300"} hover:text-white`}><Link to="/">Home</Link></li>
                    <li className={`font-medium text-base ${location.pathname==="/about"? "active": "text-gray-300"} hover:text-white`}><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar