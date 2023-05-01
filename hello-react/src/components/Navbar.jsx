import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="nav-logo">Clone Chat</span>
      <div className="nav-user">
        <img src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="" className='nav-img'/>
        <span>John</span>
        <button className='nav-button'>logout</button>
      </div>
    </div>
  )
}

export default Navbar