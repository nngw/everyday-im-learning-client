import React from 'react'
import image from '../../../assets/images/oh_no_panda.png'
import './index.css'

const NotFound = () => {
  return (
    <div>
      <div className="confused">
      <p>Pandas don't get confused. they get bamboozled.</p>
      </div>
      <div className="Home">
      <p>Go back to home</p>
      </div>
      <button className="btn">Home</button>
      <img src={image} alt="shocked panda" className="oh-no-panda" />
    </div>
  )
}


export default NotFound
