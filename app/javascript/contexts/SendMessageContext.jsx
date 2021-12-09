import React, { useState, createContext } from 'react';

const SendMessageContext = createContext([[], () => {}]);

const SendMessageContextProvider = props => {
  const [visible, setVisible] = useState(false);

  return (
    <SendMessageContext.Provider value={[visible, setVisible]}>
      {props.children}
    </SendMessageContext.Provider>
  )
}

export { SendMessageContext, SendMessageContextProvider }