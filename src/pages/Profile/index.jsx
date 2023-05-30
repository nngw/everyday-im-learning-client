import React,{useState} from 'react'
import {TaskList} from '../../componants'

const Profile = () => {
  const [tasks, setTasks] = useState([{ id: '0', text: 'Teach React' }, { id:'1', text: 'Complain About something random' }, { id:'2', text: 'Take a Break' }])
 
  return (
    <div className='task-container'>
      <div> Tasks </div>
      <TaskList tasks = {tasks} setTasks = {setTasks} />
    </div>
  )
}

export default Profile
