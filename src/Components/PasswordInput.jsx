import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
const PasswordInput = ({placeholder}) => {
  return (
    <div>
        <div className='flex items-center border border-violet-400 p-3'>
            <i className='ml-2 text-2xl'><FaEyeSlash></FaEyeSlash></i>
            <input type='password' placeholder={placeholder} className='focus:outline-none px-3 w-full'></input>
        </div>
    </div>
  )
}

export default PasswordInput