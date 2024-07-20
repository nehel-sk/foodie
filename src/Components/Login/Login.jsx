import React from 'react'

function Login() {
  return (
    <div className='login-container'>
        <div className='reg-box'>

            <h1>Login Now</h1>
            <form className="form">
                <label>
                Email:
                <input type="email" name="email_Id" />
                </label>
                <label>
                Password:
                <input type="password" name="password" />
                </label>
                <input type="submit" value="Login"  />
            </form>
            
        </div>
    </div>

  )
}

export default Login