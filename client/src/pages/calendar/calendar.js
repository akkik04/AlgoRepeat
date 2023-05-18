import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/calendar/calendar.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [labels, setLabels] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEvent = async () => {
    try {
      const taskData = {
        title,
        status,
        labels,
      };

      // Send an API request to create a new task using taskData
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        // Task created successfully
        console.log('Task created successfully');
      } else {
        // Handle error case
        console.error('Error occurred. Please try again');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="calendar-page">
      <h1>Calendar</h1>
      <div className="event-form">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Labels"
          value={labels}
          onChange={(e) => setLabels(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <Calendar value={date} onChange={handleDateChange} />
    </div>
  );
};

export default CalendarPage;
