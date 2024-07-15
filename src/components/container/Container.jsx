/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function Container({children, className}) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-2 sm:px-5 ${className}`}>
        {children}
    </div>
  )
}

export default Container