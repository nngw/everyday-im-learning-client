import React from 'react'
import MainTitle from '../../components/MainTitle/index'
import Bamboo from '../../components/Bamboo/index'
import Button from '../../components/Button/index'
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
          <Button name='Register'/>
        </div>
      </div>
    </div>
    <Bamboo />
    </>

  )
}

export default Home
