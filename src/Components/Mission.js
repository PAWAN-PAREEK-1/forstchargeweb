import React from 'react'
import "../Style/Mission.css";
import mission from "../Assets/img/mission.svg";

const Mission = () => {
  return (
    <div>
      <div className="mission-vision">



                <div className="mission">

                  <div className="mission-left1">
                  <div className="vision">
            <div className="vision-detail">
              <h3><hr />Our Vision  </h3>
              <p>Our vision is to rejuvenate the way electric vehicle owners charge. By creating a fast, portable and.</p>
            </div>
            <div className="vision-detail">
              <h3><hr />Our Vision  </h3>
              <p>Our vision is to rejuvenate the way electric vehicle owners charge. By creating a fast, portable and.</p>
            </div>
          </div> 

                    <div className="mission-left">
                            <h3>About Us</h3>
                            <h2>Why Choose us?</h2>
                            <p>First Charge is pioneering new ways for pushing the accelerator on e-mobility.</p>
                            <p>We are passionate team players believe in science & technology innovations and.</p>
                            <p>We choose to promote the green technology adoption in renewables and</p>
                            <div className="mission-btn">
                              <a href="">Learn More</a>
                            </div>
                    </div>
                    </div>
                    <div className="mission-right">
                                <img src={mission} alt="" />

                    </div>
                </div>
      </div>

    </div>
  )
}

export default Mission