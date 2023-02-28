import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isTargetDatePassed, setIsTargetDatePassed] = useState(false);

  useEffect(() => {
    const countdownDate = new Date('Mar 3, 2023 00:00:00').getTime();

    const calculateCountdown = () => {
      const now = new Date().getTime();
      let distance = countdownDate - now;

      setIsTargetDatePassed(distance < 0);
      if (distance < 0) distance = now - countdownDate;

      const days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

      setCountdown({ days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isTargetDatePassed && <Confetti />}
      <div className="countdown-timer">
        <p className="countdown-timer__title">{isTargetDatePassed ? 'Happy Birthday!' : 'Time until your birthday:'}</p>
        <div className="countdown-timer__value-container">
          {isTargetDatePassed && <div className="countdown-timer__value">{23}<span>years</span></div>}
          {Object.entries(countdown).map(([label, value]) => (
            <div className="countdown-timer__value" key={label}>
              {value}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
