import React from 'react'

const Message = () => {
  return (
    <div className='msg owner'>
        <div className="msgInfo">
            <img src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="" className='msg-nav-img'/>
            <span>Just now</span>
        </div>
        <div className="msgContent ownerMsgContent">
            <p className='p'>hello</p>
            <img src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="" className='msgCon-nav-img'/>
        </div>
    </div>
  )
}

export default Message