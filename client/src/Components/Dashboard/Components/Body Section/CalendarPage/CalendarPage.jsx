import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styling
import './CalendarPage.css'; // Custom styles for your calendar page
import Sidebar from '../../SideBar Section/Sidebar';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
  };

  return (
    <div className="calendarPage">
      <Sidebar />
      <div className="calendarContainer">
        <h1>Event Calendar</h1>
        <Calendar
          onChange={onChange}
          value={date}
          className="customCalendar"
        />
        <div className="selectedDate">
          <h2>Selected Date: {date.toDateString()}</h2>
          <p>Here you can display events or information related to the selected date.</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
