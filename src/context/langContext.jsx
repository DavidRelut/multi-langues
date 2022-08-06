import React, { createContext, useState } from 'react';

export const Context = createContext();

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