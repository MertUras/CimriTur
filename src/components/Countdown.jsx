import React, { useEffect, useState, useMemo } from 'react';
import '../index.css'; // Import your styles from index.css

const Countdown = () => {
  // Set the deadline for 4 months from the current date
  const deadlineTurkeyTime = useMemo(() => {
    const deadline = new Date();
    deadline.setMonth(deadline.getMonth() + 4);
    deadline.setHours(23, 59, 0, 0);
    return deadline;
  }, []);

  const [countdownValues, setCountdownValues] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadlineTurkeyTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdownValues({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdownValues({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadlineTurkeyTime]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-label">Gün</div>
        <div className="countdown-value">{countdownValues.days}</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-label">Saat</div>
        <div className="countdown-value">{countdownValues.hours}</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-label">Dakika</div>
        <div className="countdown-value">{countdownValues.minutes}</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-label">Saniye</div>
        <div className="countdown-value">{countdownValues.seconds}</div>
      </div>
    </div>
  );
};

export default Countdown;




/*import React, { useEffect, useState } from 'react';

import '../index.css'; // Import your styles from index.css

const Countdown = () => {
  // Set the deadline for 5 months from the current date
  const deadlineTurkeyTime = new Date();
  deadlineTurkeyTime.setMonth(deadlineTurkeyTime.getMonth() + 5);
  deadlineTurkeyTime.setHours(23, 59, 0, 0);

  const [countdownValues, setCountdownValues] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadlineTurkeyTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdownValues({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdownValues({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadlineTurkeyTime]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-label">Gün</div>
        <div className="countdown-value">{countdownValues.days}</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-label">Saat</div>
        <div className="countdown-value">{countdownValues.hours}</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-label">Dakika</div>
        <div className="countdown-value">{countdownValues.minutes}</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-label">Saniye</div>
        <div className="countdown-value">{countdownValues.seconds}</div>
      </div>
    </div>
  );
};

export default Countdown;
*/