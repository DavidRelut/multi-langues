import React, { useContext } from 'react';
import FrenchFlag from '../../assets/france.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import SpanishFlag from '../../assets/spain.svg';
import './ToggleLangs.css';

function ToggleLangs() {
  return (
    <div className='container-langs'>
      <img src={FrenchFlag} alt="French Flag" />
      <img src={EnglishFlag} alt="English Flag" />
      <img src={SpanishFlag} alt="Spanish Flag" />
    </div>
  )
}

export default ToggleLangs;