import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './style.css';


const WeeklyCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className= 'calendar'>
           <h1 className='text-center'>Panda Calendar</h1>
           <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center' data-testid='selected-date'>
      <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default WeeklyCalendar;
