import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./Components/User/AddUser";
import EditUser from "./Components/User/EditUser";
import ViewUser from "./Components/User/ViewUser";

function App() {
  return (
    
    
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/edituser:id" element={<EditUser />} />
            <Route path="/user:id" element={<ViewUser />} />
          </Routes>
          
        </div>
      </BrowserRouter>
      </React.StrictMode>
      
      
    
  );
}

export default App;
