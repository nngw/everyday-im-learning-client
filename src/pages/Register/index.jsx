import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'
import Button from '../../components/Button/index'

import './index.css'


const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className='register-container'>
      <form className="signup" onSubmit={handleSubmit}>

        <div className='container-title'>
            <h3  className='reg-reg'>Register</h3>
            <h3  className='login-reg'><Link to='/login'> Login</Link></h3>
        </div>

        <div className="input-container">
        <label>Email address:</label>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        </div>
        <div className="input-container">
        <label>Password:</label>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
        </div>

        <Button name='Register' disabled={isLoading} />
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default Register
