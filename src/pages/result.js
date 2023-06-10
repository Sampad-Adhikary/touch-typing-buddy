import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer';

function Result(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyPressCount = searchParams.get('keyPressCount');
  const matchCount = searchParams.get('matchCount');
  const accuracy = ((matchCount/keyPressCount)*100).toFixed(2);
  const[resultMessage,setResultMessage] = useState("Keep Trying, Keep Improving!!!")
  if(accuracy>80){
    setResultMessage("You're a Pro!!!")
  }
  else if(accuracy <=80 && accuracy >50){
    setResultMessage("You're a Beginner!!!, Keep practicing")
  }

  return (
    <div className='home'>
      <h1 className='headingBig'>{resultMessage}</h1>
      <div className='resultBox'>
      <div className='row'>
      <div className='resultBoxC col-6'><img className='resultImg' src='./count.gif' alt='count'/><p className='resultTxt'>Total Key Presses: {keyPressCount}</p></div>
      <div className='resultBoxC col-6'><img className='resultImg' src='./accuracy.gif' alt='accuracy'/><p className='resultTxt'>Accuracy: {accuracy} %</p></div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Result;
