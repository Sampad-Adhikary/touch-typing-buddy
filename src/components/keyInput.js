import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KeyInput = () => {
  const [keyPressCount, setKeyPressCount] = useState(0);
  const [matchCount, setMatchCount] = useState(0);
  const [enteredLetter, setEnteredLetter] = useState('');
  const [remainingTime, setRemainingTime] = useState(300);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      alert('Time is up. Moving on to Results.');
      const queryParams = new URLSearchParams(location.search);
      queryParams.set('keyPressCount', keyPressCount.toString());
      queryParams.set('matchCount', matchCount.toString());
      navigate(`/result?${queryParams.toString()}`);
    }, remainingTime * 1000);

    return () => clearTimeout(timer);
  }, [location, keyPressCount, matchCount, navigate, remainingTime]);

  useEffect(() => {
    if (remainingTime > 0) {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  function handleKeyPress(event) {
    const pressedLetter = event.key;
    setEnteredLetter(pressedLetter.toLowerCase());

    const redLetter = document.querySelector('.active')?.textContent;
    const isMatched = pressedLetter.toLowerCase() === redLetter;

    setKeyPressCount((prevCount) => prevCount + 1);

    if (isMatched) {
      setMatchCount((prevCount) => prevCount + 1);
    }
  }

  return (
    <div>
      <div><h2 className='headingSmall'>Remaining Time: {remainingTime} seconds</h2></div>
      <div>
        <form>
          <input id="userInput" type="text" onKeyDown={handleKeyPress} placeholder='Press the Keys you see highlighted...' />
        </form>
      </div>
    </div>
  );
};

export default KeyInput;
