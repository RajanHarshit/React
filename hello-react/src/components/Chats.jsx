import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat-bar">
        <img className='image-search-bar' src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="" />
        <div className="userChatInfo-bar">
          <span className='span-user-chat'>Jane</span>
          <p className='p-user-chat'>Hello</p>
        </div>
      </div>
      
      {/*This is User*/}
      <div className="userChat-bar">
        <img className='image-search-bar' src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="" />
        <div className="userChatInfo-bar">
          <span className='span-user-chat'>Jane</span>
          <p className='p-user-chat'>Hello</p>
        </div>
      </div>
      {/*This is User*/}
      <div className="userChat-bar">
        <img className='image-search-bar' src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="" />
        <div className="userChatInfo-bar">
          <span className='span-user-chat'>Jane</span>
          <p className='p-user-chat'>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats