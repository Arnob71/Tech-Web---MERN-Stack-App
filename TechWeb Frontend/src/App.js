import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState,useContext } from "react";
import { AuthContext } from "./context/authContext";
import './App.css';
import JobResult from './jobResult';
import AddJob from './addJob';
import Home from './home';
import SignUp from './authentication/signUp';
import Navbar from './navbar';
import Login from './authentication/login';
import CareerPanel from './admin/careerPanel';


function App(){
  const context=useContext(AuthContext);
  return (
    <Router>
      <Navbar/>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addJob' element={<AddJob/>} />
      <Route path='/categories/:category' element={<JobResult/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/admin/career' element={context.userType==='admin'?<CareerPanel/>:<Home/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
