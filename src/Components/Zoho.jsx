import React from 'react'
import zoho from "../assets/images/zoho-nav.png"
const Zoho = () => {
  return (
    <>
      <header className='px-6 flex justify-between items-center bg-[#fffff0] h-[4rem]'>
        <div className='flex items-center'>
            <img src={zoho} alt='nav-logo' className='h-20 w-20'/>
            <div className='flex flex-col'>
                <h1 className='text-base font-black'>Zoho</h1>
                <h1 className='text-2xl font-black '>CRM</h1>
            </div>
        </div>
        <div>
            <button className='text-xs font-semibold uppercase bg-[#EF483E] text-white py-[.7rem] px-7 rounded-full'>
                sign up for free
            </button>
        </div>
      </header>
    </>
  )
}

export default Zoho
