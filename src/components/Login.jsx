import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import NoteAlert from '../context/notes/NoteAlert'

function Login() {
    const context = useContext(NoteAlert)
    const {alertTime} = context

    const [credentials, setCredentials] = useState({email: "", password: ""})

    const navigate = useNavigate()

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
          });
          const json = await response.json()
          console.log(json)
          if (json.success  ) {
            localStorage.setItem("token", json.authtoken);
            alertTime(true, "Success", "Login Successfully", "bg-green-200")
            navigate('/')
          }
          else {
            alertTime(true, "Fail", "Enter The Correct Credentials", "bg-red-300")
          }
    }

  return (
    <div>
        <form onSubmit={handleClick}>
            <div className='w-full flex items-center justify-center'>
                <div className='bg-white drop-shadow-2xl rounded-xl w-[27%] flex flex-col justify-center gap-y-3 px-7 py-12 mt-24'>
                    <h1 className='font-bold text-3xl'>Login</h1>
                    <p className='font-medium text-slate-700 -mt-2 mb-3'>Access Your Notes, Anytime, Anywhere</p>
                    <div className='info w-full relative mb-3'>
                        <input id='email' className='w-full rounded-lg h-14 border-[1.5px] border-slate-500 px-3' name='email' value={credentials.email} type="text" onChange={onChange} required placeholder=''/>
                        <label htmlFor="email" className='pointer-events-none absolute top-[50%] translate-y-[-50%]  left-3'>Email</label>
                    </div>
                    <div className='info password w-full relative'>
                        <input  className='w-full rounded-lg h-14 border-[1.5px] border-slate-500 px-3' name='password' value={credentials.password} type="password" onChange={onChange} required placeholder=''/>
                        <label htmlFor="password" className='pointer-events-none absolute top-[50%] translate-y-[-50%] left-3'>Password</label>
                    </div>
                    <div className='w-full mt-2'>
                        <button type='submit' className='w-full rounded-full bg-blue-700 text-white font-medium text-xl py-3'>Login</button>
                        <p className='text-center mt-3'>Don't have a account? <Link to="/signup" className='font-bold'>Register</Link></p>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login