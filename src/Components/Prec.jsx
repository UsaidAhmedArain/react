import React from 'react'

const Prec = ({text,icon,func}) => {
  return (
    <div className='flex justify-center mt-4'>
        <button onClick={func} className='bg-black text-white p-2 text-sm'>{text}{icon}</button>
    </div>
  )
}

export default Prec