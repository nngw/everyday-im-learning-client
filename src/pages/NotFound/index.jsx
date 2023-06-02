import React from 'react'
import image from '../../../assets/images/oh_on_panda.png'
import { Link } from 'react-router-dom'
import './index.css'

const NotFound = () => {
  return (
    <div>
      <div className="confused">
      <h3>Pandas don't get confused. They get bamboozled.</h3>
      </div>
      <div className="Home">
      </div>
      <h3 className='focus'>Go back to the <Link to='/focus'>Focus</Link> Page</h3>
      <img src={image} alt="shocked panda" className="oh-no-panda" />
    </div>
  )
}

export default NotFound