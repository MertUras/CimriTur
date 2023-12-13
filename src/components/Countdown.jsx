import React, { useEffect, useState } from 'react';
import '../index.css'; // Import your styles from index.css

const Countdown = () => {
  const deadlineTurkeyTime = new Date('2024-02-10T23:59:00+03:00').getTime();
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
