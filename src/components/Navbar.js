import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // gives the path of current url
  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location])

  return (
    <div className="w-full bg-slate-800 py-3">
      <div className="setWidth flex items-cente space-x-9 justify-between">
        <div className="flex items-center gap-x-6">
          <h1 className="font-semibold text-2xl text-white">
            <Link to="/"><code>{"<NoteHub/>"}</code></Link>
          </h1>
          <ul className="flex items-center space-x-6">
            <li className={`font-medium text-base ${location.pathname === "/" ? "active" : "text-gray-300"} hover:text-white`}>
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-medium text-base ${location.pathname === "/about" ? "active" : "text-gray-300"} hover:text-white`}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        
        {!localStorage.getItem('token')? <div className="flex items-center gap-x-4">
          <Link to="/login" className='bg-blue-600 text-white px-3 py-1.5 rounded-xl hover:bg-blue-700 font-medium'>Login</Link>
          <Link to="/signup" className='bg-white text-blue-600 px-3 py-1.5 rounded-xl hover:bg-slate-200 font-medium'>Sign up</Link>
        </div>: <button className='bg-white text-blue-600 px-3 py-1.5 rounded-xl hover:bg-slate-200 font-medium' onClick={handleClick}>Logout</button>}
      </div>
    </div>
  );
};

export default Navbar;
