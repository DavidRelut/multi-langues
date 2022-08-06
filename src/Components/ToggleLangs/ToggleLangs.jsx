import React, { useContext } from 'react';
import FrenchFlag from '../../assets/france.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import SpanishFlag from '../../assets/spain.svg';
import './ToggleLangs.css';
import { Context } from '../../context/langContext';

function ToggleLangs() {

  const {ToggleLangs} = useContext(Context)

  return (
    <div className='container-langs'>
      <img onClick={() => ToggleLangs('FR')} src={FrenchFlag} alt="French Flag" />
      <img onClick={() => ToggleLangs('EN')} src={EnglishFlag} alt="English Flag" />
      <img onClick={() => ToggleLangs('ES')} src={SpanishFlag} alt="Spanish Flag" />
    </div>
  )
}

export default ToggleLangs;