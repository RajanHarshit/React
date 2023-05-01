import React from 'react'
import Attach from '../img/attach.png'
import Img from '../img/image.png'

const Input = () => {
  return (
    <div className='input'>
      <input className='inputs' type="text" placeholder='Type something...' />
      <div className="send">
        <img className='img-tag' src={Attach} alt="" />
        <input className='inputs' type="file" style={{display:'none'}} id='file'/>
        <label htmlFor="file">
          <img className='img-tag' src={Img} alt="" />
        </label>
        <button className='btn'>Send</button>
      </div>
    </div>
  )
}

export default Input