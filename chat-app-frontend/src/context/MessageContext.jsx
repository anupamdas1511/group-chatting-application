import { useState } from "react";
import { createContext } from "react";

const MessageContext = createContext();

const MessageContextProvider = ({ children }) => {
  const [currentReceiver, setCurrentReceiver] = useState(null);
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);

  return (
    <MessageContext.Provider
      value={{
        privateChats,
        setPrivateChats,
        currentReceiver,
        setCurrentReceiver,
        publicChats,
        setPublicChats,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
export { MessageContext };
