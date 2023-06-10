import React, { useEffect, useState } from 'react';
import './keyDisplay.css'

const KeyDisplay = () => {
  const [randomLetter, setRandomLetter] = useState('');

  function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    return randomNumber;
  }

  function getRandomLetter() {
    const randomNumber = getRandomNumber();
    let randomLetter = '';
    switch (randomNumber) {
      case 1:
        randomLetter = 'a';
        break;
      case 2:
        randomLetter = 's';
        break;
      case 3:
        randomLetter = 'd';
        break;
      case 4:
        randomLetter = 'f';
        break;
      case 5:
        randomLetter = 'j';
        break;
      case 6:
        randomLetter = 'k';
        break;
      case 7:
        randomLetter = 'l';
        break;
      case 8:
        randomLetter = ';';
        break;
      default:
        randomLetter = 'a';
        break;
    }
    return randomLetter;
  }

  function updateColor() {
    const newRandomLetter = getRandomLetter();
    setRandomLetter(newRandomLetter);
  }

  useEffect(() => {
    const interval = setInterval(updateColor, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='display'>
        <h1 className='bigHeading' data-text="YOUR&nbsp;TYPING&nbsp;BUDDY.">YOUR TYPING BUDDY.</h1>
      <div className="row">
      <div className="col-1 display-key"></div>
      <div className="col-1 display-key"></div>
        <div className={`col-1 display-key ${randomLetter === 'a' ? 'active' : ''}`}>
          <h1 className='heading-key'>a</h1>
        </div>
        <div className={`col-1 display-key ${randomLetter === 's' ? 'active' : ''}`}>
          <h1 className='heading-key'>s</h1>
        </div>
        <div className={`col-1 display-key ${randomLetter === 'd' ? 'active' : ''}`}>
          <h1 className='heading-key'>d</h1>
        </div>
        <div className={`col-1 display-key ${randomLetter === 'f' ? 'active' : ''}`}>
          <h1 className='heading-key'>f</h1>
        </div>
        <div className={`col-1 display-key ${randomLetter === 'j' ? 'active' : ''}`}>
          <h1 className='heading-key'>j</h1>
        </div>
        <div className={`col-1 display-key ${randomLetter === 'k' ? 'active' : ''}`}>
          <h1 className='heading-key'>k</h1>
        </div>
        <div className={`col-1 display-key ${randomLetter === 'l' ? 'active' : ''}`}>
          <h1 className='heading-key'>l</h1>
        </div>
        <div className={`col-1 display-key ${randomLetter === ';' ? 'active' : ''}`}>
          <h1 className='heading-key'>;</h1>
        </div>
        <div className="col-1"></div>
      <div className="col-1"></div>
      </div>
    </div>
  );
};

export default KeyDisplay;
