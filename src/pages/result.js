import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyPressCount = searchParams.get('keyPressCount');
  const matchCount = searchParams.get('matchCount');
  const accuracy = (matchCount/keyPressCount)*100;

  return (
    <div className='home'>
      <h1>Result Page</h1>
      <div>Total Key Presses: {keyPressCount}</div>
      <div>Match Count: {matchCount}</div>
      <div>accuracy: {accuracy} %</div>
    </div>
  );
};

export default Result;
