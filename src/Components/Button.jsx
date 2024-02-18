import React from 'react'

const Button = ({text , icon , func}) => {
  return (
    <div>
        <button className="bg-sky-600 text-white px-3 py-2" onClick={func}  > {icon}{text}
        </button>
    </div>
  )
}

export default Button