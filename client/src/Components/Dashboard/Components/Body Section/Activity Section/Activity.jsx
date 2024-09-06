import React from 'react';
import './activity.css';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import carMeetImage from '../../../../../Components/Dashboard/Assets/carmeet_event.jpg'; // Adjust path as necessary
import carShowImage from '../../../../../Components/Dashboard/Assets/carshow_event.jpg'; // Adjust path as necessary
import dragRaceImage from '../../../../../Components/Dashboard/Assets/dragrace_event.jpg'; // Adjust path as necessary

const events = [
  {
    id: 1,
    name: 'Monthly Cars & Coffee',
    description: 'Meetup for coffee and cars display',
    imageUrl: carMeetImage,
    time: '30 min ago'
  },
  {
    id: 2,
    name: 'Classic Car Expo',
    description: 'Annual classic car exhibition',
    imageUrl: carShowImage,
    time: '1 hr ago'
  },
  {
    id: 3,
    name: 'Drag Race Weekend',
    description: 'Local drag racing competition',
    imageUrl: dragRaceImage,
    time: '2 hrs ago'
  }
];

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Events</h1>
        <Link to="/calendar" className='btn flex'>  {/* Link to the calendar page */}
          See All Events
          <BsArrowRightShort className="icon"/>
        </Link>
      </div>

      <div className="secContainer grid">
        {events.map(event => (
          <div key={event.id} className="singleEvent flex">
            <img src={event.imageUrl} alt={event.name} />
            <div className="eventDetails">
              <span className="eventName">{event.name}</span>
              <small>{event.description}</small>
            </div>
            <div className="duration">
              {event.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;

