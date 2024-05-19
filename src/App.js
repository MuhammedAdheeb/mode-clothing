import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import Logo from "./mode-logo.png"
import {Ticker} from "./countdown/components/Ticker/Ticker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";

function App() {
    const futureDate = new Date('2024-06-06T16:31:43');
  return (
      <>
          <div className="home-body">
              <div className="navigation">
                  <div>
                      About Us
                  </div>
                  <div className="mode-title">
                      <p>mode movement</p>
                  </div>
                  <div>
                      <img src={Logo}/>
                  </div>
              </div>
              <div className="coming-soon-banner">
                  <div className="right-to-left-moving-text">
                      coming soon in UAE | Australia | UK &emsp;&emsp;coming soon in UAE | Australia | UK &emsp;&emsp;coming soon in UAE | Australia | UK &emsp;&emsp;coming soon in UAE | Australia | UK &emsp;
                  </div>
              </div>
              <div className="text-and-countdown">
                  <div className="countdown-text">
                      <p>mode movement stands at <br/> the forefront of the next <br/> phase, fueled by creativity <br/> and determination.</p>
                  </div>
                  <div className="countdown-timer">
                      <p>Greatness Awaits</p>
                      <Ticker futureDate={futureDate} />
                      {/*IMAGE CLOCK*/}
                  </div>
              </div>
              <div className="text-and-hashtags">
                  our passion is to craft astonishing apparel to ignite confidence and unstoppable energy in every individual.<br/>
                  #wedream #doitforyourself #feelyourall
              </div>
              <div className="social-media-link">
                  <div>
                      <a
                          href="https://www.instagram.com/mode_movementlk?igsh=d2NyaHEzaGY3cDN2"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <FontAwesomeIcon icon={faInstagram} className="icon" />
                          mode_movementlk
                      </a>
                  </div>
              </div>
              <div className="footer">
                  <div className="footer-right-half">
                      <div className= "location-list">
                          <p>Australia</p>
                          <p>Sri Lanka</p>
                          <p>UAE</p>
                          <p>UK</p>
                      </div>
                      <p>mode movement</p>
                  </div>
                  <div className="footer-left-half">
                      <img src={Logo}/>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
