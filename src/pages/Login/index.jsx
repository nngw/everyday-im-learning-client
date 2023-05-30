import React, { useState } from 'react'

import { useLogin } from '../../hooks/useLogin'

import './style.css'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await login(email, password)
  }

  return (
    <div className='login'> 
      <form 
        onSubmit={handleSubmit}
        >
          <div className='container-title'>
            <div>
              <h3>Login</h3>
            </div>
            <div>
              <h3>Register</h3>
            </div>
          </div>
          <div>

          </div>
        
        <div>
        <label>Email:
          <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </label>
        </div>
        <label>Password:</label>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        
        <button 
          disabled={isLoading}
          >Submit</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default Login
