import React from 'react'
import MainTitle from '../../componants/MainTitle/index'
import Bamboo from '../../componants/Bamboo/index'

import './index.css'
const Home = () => {
  return (
    <>
    <div className='home-container'>
      <MainTitle title='Protect The Pandas'/>
      <div className='main-container'>
        <div className='video'>
          Video here
        </div>
        <div className='panda-home'>
          <p>Protect the Panda! 
            A revision and task tracking app 
            that helps you organise tasks, track productivity
            and most importantly protect your very own panda.
          </p>
          <button>Register</button>
        </div>
      </div>
    </div>
    <Bamboo />
    </>

  )
}

export default Home
