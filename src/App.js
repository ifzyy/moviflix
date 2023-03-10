import React, { useState} from 'react'
import { useEffect } from 'react';
import toast,{ Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import axios from 'axios';

import './App.css';

function App() {

  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setuser] = useState({})

  const handleLogout = () =>{
    axios.delete("https://throbbing-water-6757.fly.dev/logout", {withCredentials: true})
    .then(response =>{
      if(response.data.loggedout){
        setLoggedInStatus(false)
        toast.success("logout succesful")
      }
    })
  }
  const checkLoggedIn =()=>{
    axios.get("https://throbbing-water-6757.fly.dev/logged_in", {withCredentials: true})
    .then(response =>{
      console.log(response.data)
      if(response.data.logged_in  && loggedInStatus === true) {
        setLoggedInStatus(true)
        setuser(response.data.user)
      }
      else if(!response.data.logged_in && loggedInStatus){
        setLoggedInStatus(false)
         setuser({})
         toast.success("please signup or login")
      }
    })
  }
   
   useEffect(() => {
    checkLoggedIn()
   }, )
  return (
    <div className="App">
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loggedInStatus={loggedInStatus} user={user} logout={handleLogout}/>} />
          <Route path="/login" element={<Login setLoggedInStatus={setLoggedInStatus} setuser={setuser}/>} />
          <Route path="/signup" element={<Signup loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// export default class App extends Component {
//   constructor(){
//     super()

//     this.state = {
//       loggedInStatus: "NOT LOGGED IN",
//       user:{}
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element = {<Home loggedInStatus = {this.state.loggedInStatus} />}/>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }
