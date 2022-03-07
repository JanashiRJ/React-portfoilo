import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <Fade bottom>
            <h2>
              <b>University Of Sri Jayewardenepura<br/>
              </b>
            </h2>
            <p> Bachelors of Science (Honours) in Information and Communication Technology</p>
          </Fade>
          <Fade bottom>
            <h2>
              <b>Inter University Scholarship Program 2021 (SLTCA) <br/>
              </b>
            </h2>
            <p> Human Resources Management Foundation Level (FCHRM) & Advanced Level (ACHRM)</p><br/>
            <p> Graphic design</p>
          </Fade>
          <Fade bottom>
            <h2>
              <b>Thelijjawila Central College (Mathara) <br/>
              </b>
            </h2>
            <p> G.C.E.Advanced Level</p>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
