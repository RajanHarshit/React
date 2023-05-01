import React from 'react'

const Search = () => {
  return (
    <div className='search-bar'>
      <div className="searchForm-bar">
        <input type="text" className='search-input-bar'placeholder='Find a user'/>
      </div>
      <div className="userChat-bar">
        <img className='image-search-bar' src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="" />
        <div className="userChatInfo-bar">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search