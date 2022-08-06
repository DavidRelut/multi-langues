import React, {useContext} from 'react';
import './Content.css';
import data from '../../assets/data'

function Content() {
  return (
    <div className='content'>
      <h1 className='title'>{data.FR.title}</h1>
      <p className='content-txt'>{data.FR.txt}</p>
    </div>
  )
}

export default Content;