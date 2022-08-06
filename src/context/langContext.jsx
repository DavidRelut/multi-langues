import React, { createContext, useState } from 'react';

export const Context = createContext();

const supportedLangs = ['EN', 'FR', 'ES'];

let browserLang = navigator.language.slice(0,2).toUpperCase();

if(supportedLangs.indexOf(browserLang) === -1){
   browserLang = 'EN';
}

const ContextProvider = props => {
  const [lang, setLang] = useState('EN');

  const toggleLangs = changeLang => {
    setLang(changeLang)
  }

  return (
    <ContextProvider value={{ lang, toggleLangs }} >
      {props.children}
    </ContextProvider>
  )
}

export default ContextProvider;