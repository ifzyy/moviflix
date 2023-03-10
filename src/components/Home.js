import React, {useEffect} from 'react'
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Enjoy from './Enjoy'
import Download from './Download'
import Kids from './Kids'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/Home.css'

const Home = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  
  if (!props.loggedInStatus) {
  return (
    <div className="Home">
      <div className="bg">
        <div className="bg2">
          <header className="header">
            <div className="logo"><a className="logo " href="/">Moviflix</a> </div>
            <div className="nav">
              <i className="fa-solid fa-bars" />
              <div className="nav-links">
                <Link to="/login" className="link">Sign in</Link>
              </div>
            </div>
          </header>

          <section className="headline" data-aos="zoom-in">
            <h1 className="unlimited">Unlimited movies, <br/> TV shows, and more.</h1>
            <p className="text">Watch anywhere. anytime.</p>
            <p className="text2" data-aos="zoom-in-right">Ready to watch? Click the button to get started.</p>
            <a href="/signup" className="signup">Get started</a>
          </section>
        </div>
      </div>
      <Enjoy />
      <Download />
      <Kids />
    </div>
      
  )}
  else {
    return(
      <div className="Home">
        <Toaster position="top-center" />
        <div className="bg">
          <div className="bg2">
            <header className="header">
              <div className="logo"><a className="logo " href="/">Moviflix</a> </div>
              <div className="nav">
                <div className="nav-links">
                  <button onClick={props.logout} className="link">Logout</button>
                </div>
              </div>
            </header>

            <section className="headline">
              <p className="texto">Welcome </p>
              <section className="headline" data-aos="zoom-in">
                <h1 className="unlimited">Unlimited movies, <br /> TV shows, and more.</h1>
                <p className="text">Watch anywhere. anytime.</p>
                <p className="text2" data-aos="zoom-in-right">Ready to watch? Click the button to get started.</p>
                <Link to="/signup" className="signup">All Movies</Link>
              </section>
            </section>
          </div>
        </div>
        <Enjoy />
        <Download />
        <Kids />
      </div>
    
    )
  }
}

export default Home
