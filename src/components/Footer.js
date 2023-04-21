import React from 'react'

function Footer() {
  return (
    <div>
      <p 
      style={{position:"relative", 
      width:"100%",
      bottom: "0",
      textAlign:"center"
      }}

      >Copyright &copy; {new Date().getFullYear()} by Abdul Halim</p>
    </div>
  )
}

export default Footer
