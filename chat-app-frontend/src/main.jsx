import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./context/UserContext.jsx";
import { HashRouter } from "react-router-dom";
import MessageContextProvider from "./context/MessageContext.jsx";
import StompContextProvider from "./context/StompContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <MessageContextProvider>
        <StompContextProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </StompContextProvider>
      </MessageContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
