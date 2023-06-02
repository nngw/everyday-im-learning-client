import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './style.css';


const WeeklyCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
      <div className="calendar-container">
          <div className= 'calendar'>
              <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} />
          </div>
          <p className='text-center' data-testid='selected-date'>
          <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
          </p>
        </div>
      </div>
  );
}

export default WeeklyCalendar;
