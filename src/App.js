import React, { useState,useLayoutEffect } from 'react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Details from './components/MovieDetails.js';
import WatchList from './components/WatchList.js';
import './App.css';


function App() {

  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setUser] = useState({})

 
  const checkOnline = JSON.parse(localStorage.getItem("online"))
  const loggedIn = JSON.parse(localStorage.getItem("user"))
  
  const handleLogout = () => {
     localStorage.removeItem("online")
     localStorage.removeItem("user")
    setLoggedInStatus(false)
    setUser({})
  }

  const checkLoggedIn = () => {
    if(checkOnline && loggedIn){
      setLoggedInStatus(checkOnline.online)
      setUser(loggedIn)
    }
    else{
      setLoggedInStatus(false)
      setUser(false)
    }
  }

  useLayoutEffect(() => {
   checkLoggedIn()
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="App">
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/:movie" element={<Details />} />
          <Route path="/watchlist" element={<WatchList />}/>
          <Route  element={<Navbar setLoggedInStatus={setLoggedInStatus} setUser={setUser} />} />
          <Route path="/" element={<Home loggedInStatus={loggedInStatus} user={user} logout={handleLogout}/>} />
          <Route path="/login" element={<Login setLoggedInStatus={setLoggedInStatus} setuser={setUser} />} />
          <Route path="/signup" element={<Signup loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} />} />
          <Route path="/movies/:number" element={<Movies loggedInStatus={loggedInStatus} logout={handleLogout}/>} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;