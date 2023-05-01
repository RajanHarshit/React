import React from 'react'
import Cam from '../img/video-camera.png'
import Add from '../img/add-user.png'
import More from '../img/sort.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img className='img-chatIcons' style={{width: '20px'}} src={Cam} alt="" />
          <img className='img-chatIcons' style={{width: '20px'}} src={Add} alt="" />
          <img className='img-chatIcons' style={{width: '20px'}} src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat