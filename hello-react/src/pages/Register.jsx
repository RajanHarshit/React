import React from 'react';
import Add from '../img/add-image.png'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    console.log("auth:::", auth)
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      console.log("user::",user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error--code::", errorCode, "error---message::", errorMessage)
    })

    
  }
  return (
    <div className="formContainer">
        <div className='formWrapper'>
            <span className='logo'>Clone Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img style={{height:'32px',width: '32px'}} src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have an account ? Login</p>
        </div>
    </div>
  )
}

export default Register
