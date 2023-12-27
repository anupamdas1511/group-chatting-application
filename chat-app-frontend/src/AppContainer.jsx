import React from "react";
import "./App.css";
import ContactContainer from "./components/contacts/ContactContainer";
import MessageContainer from "./components/message/MessageContainer";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppContainer = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name.length == 0) {
      navigate("/login");
    }
  });
  return (
    <div id="app-container">
      <ContactContainer />
      <MessageContainer />
    </div>
  );
};

export default AppContainer;
