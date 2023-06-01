import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
import Button from '../../components/Button/index'
import './index.css'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await login(email, password)
  }

  return (
    <div className='login-container'>
      <form 
        onSubmit={handleSubmit}
        >
          <div className='container-title'>
          <h3 className='reg'><Link to='/register'>Register</Link></h3>
              <h3 className='login'>Login</h3>
          </div>
          <div>

          </div>
        
        <div className="input-container">
            <label htmlFor="email-input" className='label'>Email:</label>
            <input
              id="email-input"
              type="text" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
        </div>

        <div className="input-container">
          <label htmlFor="reg-input" className='label'>Password:</label>
          <input
            id="reg-input"
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
          </div>
          <Button name='Login' disabled={isLoading}/>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default Login
