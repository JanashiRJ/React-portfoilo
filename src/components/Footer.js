import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact Details</h1>
          </Fade>
          <Fade bottom>
            <p>
              <b>Janashi Resanjana,<br/>
                 Kakunagodahena,<br/>
                 Bathalahena,<br/>
                 Hallala,Weligama,<br/>
                 Mathara.
              </b>
            </p>
            <p><b>Mobile:<br/>
            +94767483665</b></p>
            <p><b>janashirasa1021@gmail.com</b><br/></p>
          </Fade>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
