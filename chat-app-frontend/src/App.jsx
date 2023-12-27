import "./App.css";
import AppContainer from "./AppContainer";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
