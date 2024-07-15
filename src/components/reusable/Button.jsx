/* eslint-disable react/prop-types */
// import React from 'react'

function Button({children, className, onClick}) {
  return (
    <button className={` ${className} text-center text-sm bg-[#720D96] transition ease-out hover:shadow-md py-2`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button