import React, { useState } from 'react'
import './../styles/Login.css'
function Login() {
    const[condition,setCondition]=useState(false);
    const showSignIn=()=>{
        setCondition(true)
    }
    const showSignUp=()=>{
        setCondition(false)
    }
  return (
    <div className='login' >
        {/* Head */}
        <div className='container center'>
            <div className='btn-view'>
            <button id='sign-in-btn' onClick={showSignIn}>SignIn</button>
            <button id='sign-up-btn' onClick={showSignUp}>SignUp</button>
            </div>
                <div className='form-container'>
                    {condition? <SignIn/>:<SignUp/>}
                </div>
        </div>
        {/* Footer */}
    </div>
  )
}
function SignUp(){
    return(
        <div>
            <form className='center'>
                <label>
                    Name:
                    <input type='text'/>
                </label>
                <label>
                    UserName:
                    <input type='text'/>
                </label>
                <label>
                    Email:
                    <input type='email'/>
                </label>
                <label>
                    Password:
                    <input type='password'/>
                </label>
                <input className='submit-btn' type='submit' value='Sign Up'/>
            </form>
        </div>
    )
}
function SignIn(){
    return(
        <div>
             <form>
                <label>
                    Name:
                    <input type='text' placeholder='useename/email'/>
                </label>
                <label>
                    Password:
                    <input type='password'/>
                </label>
                <input className='submit-btn' type='submit' value='Sign In'/>
            </form>
        </div>
    )
}
export default Login