// import React from 'react'

function Protected({children, authentication = true}) {
  return (
    <>{children}</>
  )
}

export default Protected