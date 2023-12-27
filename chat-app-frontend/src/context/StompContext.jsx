import { useState } from "react";
import { createContext } from "react";

const StompContext = createContext()

const StompContextProvider = ({ children }) => {
    const [stompClient, setStompClient] = useState(null)
    
    return (
        <StompContext.Provider value={{ stompClient, setStompClient }}>
            {children}
        </StompContext.Provider>
    )
}

export default StompContextProvider
export { StompContext }