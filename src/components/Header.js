import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hey, I'm 
              <span role="img" aria-label="Emoji">
              😊
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Janashi Resanjana"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p><i><b>{data.headerParagraph}</b></i></p>
          </Fade>        
        </div>
      </div>
    </div>
  )
}

export default Header
