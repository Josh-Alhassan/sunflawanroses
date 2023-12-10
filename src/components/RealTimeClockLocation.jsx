import React, { useState, useEffect } from 'react';

import './RealTimeClockLocation.css'
import LocationSVG from '../assets/LocationSVG';

function RealTimeClockLocation() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [error] = useState(null);

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Get the user's time zone
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    // Clear the interval and cleanup on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="location-time-wrap">
        <div className="seperate">
          <p className='current__time'>{currentTime}</p>
          <LocationSVG />
        </div>

        <p className='current__time-zone'> {timezone}</p>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default RealTimeClockLocation;
