import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Chat from "./Pages/Chat/Chat";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/Login"} element={<Login></Login>} /> 
        <Route path={"/Chat"} element={<Chat></Chat>} /> 
      </Routes>
    </div>
  );
}

export default App;
